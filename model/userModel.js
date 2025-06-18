// 导入db模块
const db = require('../common/db')
// 导入加密模块
const aes = require('../common/aes/index')

// 定义用户类
class User {
    // 注册
    register(nickName, account, password, email) {
        return new Promise((resolve, reject) => {
            // 执行查询用户sql语句
            //  db.query(`select 字段  from  数据表   where 字段=值`)
            db.query(`select account  from  pre_user   where account='${account}'`)
                .then(
                    rows => {
                        if (rows.length == 0) {
                            // 未注册
                            // 对密码进行加密
                            let pwd = aes.aesEncrypt(password)
                            // 记录用户注册的时间
                            let date = new Date()
                            let time = date.getTime()//时间戳（以后可以根据时间戳获取年月日时分秒）
                            let num = Math.floor(Math.random() * 5 + 1)
                            let imgUrl = `/static/images/${num}.jpg`
                            // 执行插入数据的sql语句
                            db.query(`insert into pre_user(nickName,account,password,email,createAt,imgUrl) values('${nickName}','${account}','${pwd}','${email}','${time}','${imgUrl}')`)
                                .then(
                                    content => {
                                        resolve({
                                            code: 200,
                                            msg: "恭喜您，注册账号成功",
                                            status: content.changedRows == 0 ? '正常' : '异常'
                                        })
                                    },
                                    err => {
                                        reject({
                                            code: -1,
                                            msg: "注册失败",
                                            err
                                        })
                                    }
                                )

                        }
                        else {
                            // 已注册
                            resolve({
                                code: 1,
                                msg: `该账号已存在,${account}`
                            })
                        }
                    },
                    err => {
                        //  出现异常
                        reject({
                            code: 500,
                            msg: "后台出现异常",
                            err
                        })
                    }
                )
        })
    }

    // 登录
    login(account, password) {
        return new Promise((resolve, reject) => {
            db.query(`select  account, password, id, nickName from  pre_user  where account = '${account}'`)
                .then(
                    rows => {
                        if (rows.length == 0) {
                            resolve({
                                code: 404,
                                msg: `该账号不存在，${account}`
                            })
                        }
                        else {
                            // 解构赋值
                            let [user] = rows;
                            // console.log("检查:",user);
                            if (user.password) {
                                // 通过布尔值 判断密码是否一致
                                // let isLogin = aes.aesDecrypt(明文（用户提交的参数）, 加密的（数据表中的字段）)
                                let isLogin = aes.aesDecrypt(password, user.password)
                                // console.log({isLogin})
                                if (isLogin) {
                                    // 给前端提示
                                    resolve({
                                        code: 200,
                                        msg: `${account},登录成功`,
                                        id: user.id,
                                        nickName: user.nickName
                                    })
                                }
                                else {
                                    // 提示
                                    resolve({
                                        code: -1,
                                        msg: `账号或密码错误`
                                    })
                                }
                            }
                        }
                    },
                    err => {
                        reject({
                            code: 500,
                            msg: "后台发生错误",
                            err
                        })
                    }
                )
        })
    }

    // 登录(管理员)
    signin(account, password,role) {
        return new Promise((resolve, reject) => {
            db.query(`select  account, password, id, nickName from  pre_user  where account = '${account}' and role='${role}'`)
                .then(
                    rows => {
                        if (rows.length == 0) {
                            resolve({
                                code: 404,
                                msg: `该账号不存在，${account}`
                            })
                        }
                        else {
                            // 解构赋值
                            let [user] = rows;
                            // console.log("检查:",user);
                            if (user.password) {
                                // 通过布尔值 判断密码是否一致
                                // let isLogin = aes.aesDecrypt(明文（用户提交的参数）, 加密的（数据表中的字段）)
                                let isLogin = aes.aesDecrypt(password, user.password)
                                // console.log({isLogin})
                                if (isLogin) {
                                    // 给前端提示
                                    resolve({
                                        code: 200,
                                        msg: `${account},登录成功`,
                                        id: user.id,
                                        nickName: user.nickName
                                    })
                                }
                                else {
                                    // 提示
                                    resolve({
                                        code: -1,
                                        msg: `账号或密码错误`
                                    })
                                }
                            }
                        }
                    },
                    err => {
                        reject({
                            code: 500,
                            msg: "后台发生错误",
                            err
                        })
                    }
                )
        })
    }

    // 删除
    remove(id) {
        return new Promise((resolve, reject) => {
            db.query(`select account from pre_user where id = '${id}'`)
                .then(
                    rows => {
                        if (rows.length == 0) {
                            // 说明不存在这个账号了
                            resolve({
                                code: -1,
                                msg: `该账号不存在`
                            })
                        }
                        else {
                            db.query(`delete from pre_user where id = '${id}'`)
                                .then(
                                    content => {
                                        resolve({
                                            code: 200,
                                            msg: `删除账号成功，${rows[0].account}`,
                                            status: content.changedRows === 0 ? '正常' : '异常'
                                        })
                                    },
                                    error => {
                                        reject({
                                            code: -1,
                                            msg: "删除账号失败",
                                            error
                                        })
                                    }
                                )
                        }
                    },
                    err => {
                        reject({
                            code: -1,
                            msg: "查询账号失败",
                            err
                        })
                    }
                )
        })
    }

    // 设置用户头像
    img(id, imgUrl) {
        return new Promise((resolve, reject) => {
            db.query(`select account from pre_user where id='${id}'`)
            .then(
                rows=>{
                     if(rows.length == 0) {
                        // 不存在
                        resolve({
                            code: -1,
                            msg: "该账号不存在"
                        })
                     }
                     else {
                        // 存在
                        db.query(`update pre_user set imgUrl= '${imgUrl}' where id= '${id}'`)
                        .then(
                            content=>{
                                resolve({
                                    code: 200,
                                    msg: `设置用户头像成功`,
                                    status: content.fieldCount === 0 ? '正常' : '异常'
                                })
                            },
                            error=>{
                                reject({
                                    code: -1,
                                    msg: "服务端发生错误",
                                    error 
                                })
                            }
                        )
                     }
                },
                err=> {
                    reject({
                        code: -1,
                        msg: "服务端发生错误",
                        err 
                    })
                }
            )
        })
    }

     // 设置用户密码（找回密码）
     pwd(account, password) {
        return new Promise((resolve, reject) => {
            db.query(`select account from pre_user where account='${account}'`)
            .then(
                rows=>{
                     if(rows.length == 0) {
                        // 不存在
                        resolve({
                            code: -1,
                            msg: "该账号不存在"
                        })
                     }
                     else {
                        // 存在
                        // 对密码进行加密
                        let pwd = aes.aesEncrypt(password)
                        db.query(`update pre_user set password= '${pwd}' where account= '${account}'`)
                        .then(
                            content=>{
                                resolve({
                                    code: 200,
                                    msg: `设置用户密码成功`,
                                    status: content.fieldCount === 0 ? '正常' : '异常'
                                })
                            },
                            error=>{
                                reject({
                                    code: -1,
                                    msg: "服务端发生错误",
                                    error 
                                })
                            }
                        )
                     }
                },
                err=> {
                    reject({
                        code: -1,
                        msg: "服务端发生错误",
                        err 
                    })
                }
            )
        })
    }


    // 编写用户信息
    edit(id, age,sex,address,phone,nickName) {
        return new Promise((resolve, reject) => {
            db.query(`select account from pre_user where id='${id}'`)
            .then(
                rows=>{
                     if(rows.length == 0) {
                        // 不存在
                        resolve({
                            code: -1,
                            msg: "该账号不存在"
                        })
                     }
                     else {
                        // 存在
                        db.query(`update pre_user set age= '${age}',sex= '${sex}',address= '${address}' ,phone= '${phone}' , nickName='${nickName}'  where id= '${id}'`)
                        .then(
                            content=>{
                                resolve({
                                    code: 200,
                                    msg: `设置用户信息成功`,
                                    status: content.fieldCount === 0 ? '正常' : '异常'
                                })
                            },
                            error=>{
                                reject({
                                    code: -1,
                                    msg: "服务端发生错误",
                                    error 
                                })
                            }
                        )
                     }
                },
                err=> {
                    reject({
                        code: -1,
                        msg: "服务端发生错误",
                        err 
                    })
                }
            )
        })
    }


    // 获取用户详情信息
    info(id) {
        return new Promise((resolve, reject) => {
            db.query(`select nickName, account, imgUrl, age,sex,address,email,phone, createAt from pre_user where id='${id}'`)
            .then(
                rows=>{
                    if(rows.length == 0) {
                        resolve({
                            code: -1,
                            msg: "该账号不存在"
                        })
                    }
                    else {
                        resolve({
                            code: 200,
                            result: [... rows]
                        })
                    }
                },
                err=>{
                    reject({
                        code: -1,
                        msg: "服务端发生错误",
                        err 
                    })
                }
            )
        })
    }


    // 获取用户列表
    list(page_num,page_size) {
        return new Promise((resolve, reject) => {
            db.query('select count(*) as total from pre_user')
            .then(
                data =>{
                    // console.log({data})
                    return data
                },
                err=> {
                    reject({
                        code: -1,
                        msg: "统计失败",
                        err 
                    })
                }
            )
            .then(
                data => {
                    let num= ((parseInt(page_num) - 1) * parseInt(page_size))// 从哪个位置开始获取
                    let size= (parseInt(page_size)) // 获取多少条记录
                    db.query(`select * from pre_user limit ${num} , ${size}`)
                    .then(
                        rows=> {
                            resolve({
                                code: 200,
                                msg: "获取用户列表成功",
                                total: data[0] && data[0].total, 
                                result: [... rows] // 指定数量的用户列表
                            })
                        },
                        err=> {
                            reject({
                                code: -1,
                                msg: "获取用户列表失败",
                                err 
                            })
                        }
                    )
                }
            )
        })
    }

    // 搜索“关键字”
    search(keyword){
        return new Promise((resolve,reject)=>{
            db.query(`select nickName, id, age,sex,address,phone,account,imgUrl,createAt from pre_user where nickName like '%${keyword}%' or account like '%${keyword}%'`)
            .then(
                rows=>{
                    resolve({
                        code: 200,
                        result: [... rows],
                        msg: "查询用户列表成功"
                    })
                },
                err=>{
                    reject({
                        code: -1,
                        msg: "查询用户列表失败",
                        err 
                    })
                }
            )
        })
    }
    
}


// 把这个类实例挂载到模块系统对象上
module.exports = User