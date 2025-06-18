// 导入路由
const router = require('express').Router()
// 导入用户类
const User = require('../model/userModel')
// 导入jwt模块 （jsonwebtoken）
const Jwt = require('../common/token/jwt')

// 创建用户类的实例
const userModel = new User()

// 注册接口
// 地址： /api/user/register
// 方式： POST
// 参数： nickName, account, password, email
// 响应数据格式： json格式
// 示例： http://localhost:4000/api/user/register
router.post('/register', async (req,res)=> {
    // 接收前端提交的表单信息
    let {nickName, account, password, email} = req.body;
    // 判断这些参数是否有值
    if(nickName == undefined || account == undefined || password == undefined || email == undefined) {
        // 缺少值
        res.send({
            code: 4004,
            msg: "缺少参数，请重新提交"
        })
    }
    else {
        // 有值
        await userModel.register(nickName, account, password, email)
        .then(
            data=>{
                // 把注册的结果响应给前端
                res.send(data);
            },
            err=> {
                // 发生了错误
                res.send(err);
            }
        )
    }
})


// 登录接口
// 地址： /api/user/login
// 方式： POST
// 参数： account, password
// 响应数据格式： json格式
// 示例： http://localhost:4000/api/user/login
router.post('/login', async (req,res)=> {
    let { account, password } = req.body;
    // console.log({ account, password });
    // console.log(req.body)
    if(account == undefined || password == undefined) {
         // 缺少值
         res.send({
            code: -1,
            msg: "缺少参数，请重新提交"
        })
    }
    else {
        // 调用用户类登录方法
        userModel.login(account, password)
        .then(
            data=>{
                // 把登录的结果响应给前端
                // 处理token（用户临时身份）
                let id = data.id;
                let token = new Jwt(id).getToken();
                if(data.code == 200) {
                    // 登录成功才有token
                    res.send({
                        code: data.code,
                        msg: data.msg,
                        nickName: data.nickName,
                        token 
                    });
                }
                else {
                    // 登录失败
                    res.send(data);
                }
            },
            err=> {
                // 发生了错误
                res.send(err);
            }
        )
    }
})


// 登录接口(管理员)
// 地址： /api/user/signin
// 方式： POST
// 参数： account, password,role
// 响应数据格式： json格式
// 示例： http://localhost:4000/api/user/signin
router.post('/signin', async (req,res)=> {
    let { account, password , role} = req.body;
    // console.log({ account, password , role});
    if(account == undefined || password == undefined || role == undefined) {
         // 缺少值
         res.send({
            code: -1,
            msg: "缺少参数登录，请重新提交"
        })
    }
    else {
        // 调用用户类登录方法
        userModel.signin(account, password,role)
        .then(
            data=>{
                // 把登录的结果响应给前端
                // 处理token（用户临时身份）
                let id = data.id;
                let token = new Jwt(id).getToken();
                if(data.code == 200) {
                    // 登录成功才有token
                    res.send({
                        code: data.code,
                        msg: data.msg,
                        nickName: data.nickName,
                        token 
                    });
                }
                else {
                    // 登录失败
                    res.send(data);
                }
            },
            err=> {
                // 发生了错误
                res.send(err);
            }
        )
    }
})



// 删除账号接口
// 地址： /api/user/remove
// 方式： POST
// 参数： token
// 响应数据格式： json格式
// 示例： http://localhost:4000/api/user/remove
router.post('/remove', async (req,res)=> {
    // 获取用户的临时身份
    let token = req.body.token || req.headers.token;
    if(token){
        let result = new Jwt(token).verifyToken();
        if(result.code == 200) {
            // 获取用户id
            let id = result.info.data;
            // 删除账号
            await  userModel.remove(id)
            .then(
                content=>{
                    // 把删除的结果响应给前端
                    res.send(content)
                },
                err=> {
                    // 发送异常
                    res.send(err)
                }
            )
        }
        else {
            res.send({
                code: -1,
                msg: "登录已经失效了，请重新登录"
            })
        }
        
    }
    else {
        res.send({
            code: -1,
            msg: "缺少参数"
        })
    }
})


// 设置用户头像接口
// 地址： /api/user/img
// 方式： POST
// 参数： token, imgUrl
// 响应数据格式： json格式
// 示例： http://localhost:4000/api/user/img
router.post('/img', async (req,res)=> {
    // 获取用户的临时身份
    let token = req.body.token || req.headers.token;
    let imgUrl = req.body.imgUrl;
    if(token && imgUrl){
        let result = new Jwt(token).verifyToken();
        if(result.code == 200) {
            // 获取用户id
            let id = result.info.data;
            // 设置用户头像
            await  userModel.img(id,imgUrl)
            .then(
                content=>{
                    // 把设置用户头像的结果响应给前端
                    res.send(content)
                },
                err=> {
                    // 发送异常
                    res.send(err)
                }
            )
        }
        else {
            res.send({
                code: -1,
                msg: "登录已经失效了，请重新登录"
            })
        }
        
    }
    else {
        res.send({
            code: -1,
            msg: "缺少参数"
        })
    }
})


// 设置用户密码接口
// 地址： /api/user/pwd
// 方式： POST
// 参数： account, password
// 响应数据格式： json格式
// 示例： http://localhost:4000/api/user/pwd
router.post('/pwd', async (req,res)=> {
    // 获取用户的临时身份
    let account = req.body.account;
    let password = req.body.password;
    if(account && password){
        // 设置用户密码
        await  userModel.pwd(account,password)
        .then(
            content=>{
                // 把设置用户密码的结果响应给前端
                res.send(content)
            },
            err=> {
                // 发送异常
                res.send(err)
            }
        )
    }
    else {
        res.send({
            code: -1,
            msg: "缺少参数"
        })
    }
})


// 编辑用户信息接口
// 地址： /api/user/edit
// 方式： POST
// 参数： token, age,sex,address,phone
// 响应数据格式： json格式
// 示例： http://localhost:4000/api/user/edit
router.post('/edit', async (req,res)=> {
    // 获取用户的临时身份
    let token = req.body.token || req.headers.token;
    let {age,sex,address,phone, nickName} = req.body;
    if(token){
        let result = new Jwt(token).verifyToken();
        if(result.code == 200) {
            // 获取用户id
            let id = result.info.data;
            // 设置用户信息
            await  userModel.edit(id,age,sex,address,phone, nickName)
            .then(
                content=>{
                    // 把编辑用户信息的结果响应给前端
                    res.send(content)
                },
                err=> {
                    // 发送异常
                    res.send(err)
                }
            )
        }
        else {
            res.send({
                code: -1,
                msg: "登录已经失效了，请重新登录"
            })
        }
        
    }
    else {
        res.send({
            code: -1,
            msg: "缺少参数"
        })
    }
})



// 获取用户信息接口
// 地址： /api/user/info
// 方式： POST
// 参数： token
// 响应数据格式： json格式
// 示例： http://localhost:4000/api/user/info
router.post('/info', async (req,res)=> {
    // 获取用户的临时身份
    let token = req.body.token || req.headers.token;
    if(token){
        let result = new Jwt(token).verifyToken();
        if(result.code == 200) {
            // 获取用户id
            let id = result.info.data;
            // 获取用户详情信息
            await  userModel.info(id)
            .then(
                content=>{
                    // 把获取用户详情信息的结果响应给前端
                    res.send(content)
                },
                err=> {
                    // 发送异常
                    res.send(err)
                }
            )
        }
        else {
            res.send({
                code: -1,
                msg: "登录已经失效了，请重新登录"
            })
        }
        
    }
    else {
        res.send({
            code: -1,
            msg: "缺少参数"
        })
    }
})



// 获取用户列表接口
// 地址： /api/user/list
// 方式： GET
// 参数： page, pageSize
// 响应数据格式： json格式
// 示例： http://localhost:4000/api/user/list
router.get('/list', async (req,res)=> {
    let {page, pageSize} = req.query;
    if(page == undefined || pageSize == undefined) {
        res.send({
            code: -1,
            msg: "缺少参数"
        })
    }
    else {
        await userModel.list(page, pageSize)
        .then(
            content=> {
                // 把获取的结果响应给前端
                res.send(content)
            },
            err=> {
                // 把失败的结果响应给前端
                res.send(err)
            }
        )
    }
})


// 关键字搜索用户
// 地址： /api/user/search
// 方式： GET
// 参数： keyword
// 响应数据格式： json格式
// 示例： http://localhost:4000/api/user/search
router.get('/search', async (req,res)=> {
    let {keyword} = req.query;
    if(keyword == undefined) {
        res.send({
            code: -1,
            msg: "缺少参数"
        })
    }
    else {
        await userModel.search(keyword)
        .then(
            content=> {
                // 把获取的结果响应给前端
                res.send(content)
            },
            err=> {
                // 把失败的结果响应给前端
                res.send(err)
            }
        )
    }
})


// 判断用户是否登录在线
// 地址： /api/user/logged
// 方式： POST
// 参数： token
// 响应数据格式： json格式
// 示例： http://localhost:4000/api/user/logged
router.post('/logged', async (req,res)=> {
    // 获取用户的临时身份
    let token = req.body.token || req.headers.token;
    if(token){
        let result = new Jwt(token).verifyToken();
        if(result.code == 200) {
            // 获取用户id
            // let id = result.info.data;
            // 登录在线
            res.send({
                code: 200,
                msg: "用户登录在线状态"
            })
        }   
        else {
            res.send({
                code: -1,
                msg: "登录已经失效了，请重新登录"
            })
        }
        
    }
    else {
        res.send({
            code: -1,
            msg: "缺少参数"
        })
    }
})

// 导出用户路由
module.exports = router;