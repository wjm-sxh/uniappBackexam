
// 导入路由
const router = require('express').Router()
// 导入考试类
const Exam =  require('../model/examModel')
// 导入jwt模块 （jsonwebtoken）
const Jwt = require('../common/token/jwt')
// 创建考试类实例
const examModel = new Exam()


// ## 考试分类
// 添加考试分类名称
// 地址：http://127.0.0.1:4000/api/exam/category_add
// 请求：POST (不可以在浏览器地址栏测试)
// 参数：text 
// 示例：http://127.0.0.1:4000/api/exam/category_add
// 响应数据格式: json格式
router.post('/category_add', async (req, res) => {
    // 接收前端提交的参数
    let text = req.body.text;
    let icon = req.body.icon;
    // 判断text是否有值
    if (text) {
        // 执行数据库的操作
        await examModel.category_add(text,icon)
            .then(
                data => {
                    // 把模型中的处理结果响应给前端
                    res.send(data);
                }
            )
            .catch(
                err => {
                    res.send(err);
                }
            )
    }
    else {
        // 提示缺少参数
        res.send({
            code: -1,
            msg: "缺少参数，请检查后再提交"
        })
    }
})


// 获取考试分类列表
// 地址：http://127.0.0.1:4000/api/exam/category_list
// 请求：GET (可以在浏览器地址栏测试)
// 参数：无
// 示例：http://127.0.0.1:4000/api/exam/category_list
// 响应数据格式: json格式
router.get('/category_list', async (req, res) => {
    await examModel.category_list()
        .then(
            data => {
                // 响应数据给前端
                res.send(data)
            },
            err => {
                res.send(err);
            }
        )
})

// 删除考试分类名称
// 地址：http://127.0.0.1:4000/api/exam/category_remove
// 请求：GET (可以在浏览器地址栏测试)
// 参数：id
// 示例：http://127.0.0.1:4000/api/exam/category_remove
// 响应数据格式: json格式
router.get('/category_remove', async (req, res) => {
    let id = req.query.id;
    if(id){
        await examModel.category_remove(id)
        .then(
            data => {
                // 响应数据给前端
                res.send(data)
            },
            err => {
                res.send(err);
            }
        )
    }
    else {
        // 提示缺少参数
        res.send({
            code: -1,
            msg: "缺少参数，请检查后再提交"
        })
    }
})


// 修改考试分类名称
// 地址：http://127.0.0.1:4000/api/exam/category_modify
// 请求：POST (不可以在浏览器地址栏测试)
// 参数：id text 
// 示例：http://127.0.0.1:4000/api/exam/category_modify
// 响应数据格式: json格式
router.post('/category_modify', async (req,res)=> {
    // 接收前端提交的参数
    let {id, text} = req.body;
    // 判断参数是否有值
    if(id == undefined || text == undefined) {
        res.send({
            code: -1,
            msg: "缺少参数，请检查在提交"
        })
    }
    else {
        await examModel.category_modify(id,text)
        .then(
            data=> {
                res.send(data)
            },
            err=> {
                res.send(err);
            }
        )
    }
})


// ## 试卷
// 新增试卷
// 地址：http://127.0.0.1:4000/api/exam/exam_add
// 请求：POST (不可以在浏览器地址栏测试)
// 参数：id, text , name , total, passline,time
// 示例：http://127.0.0.1:4000/api/exam/exam_add
// 响应数据格式: json格式
router.post('/exam_add', async (req, res) => {
    // 接收前端提交的参数
    let {id, text , name , total, passline,time, num, score} = req.body;
    // 判断text是否有值
    if (text && id && name && total && passline && time && num && score) {
        // 执行数据库的操作
        await examModel.exam_add(id, text , name , total, passline,time, num, score)
            .then(
                data => {
                    // 把模型中的处理结果响应给前端
                    res.send(data);
                }
            )
            .catch(
                err => {
                    res.send(err);
                }
            )
    }
    else {
        // 提示缺少参数
        res.send({
            code: -1,
            msg: "缺少参数，请检查后再提交"
        })
    }
})
// 获取试卷列表
// 地址：http://127.0.0.1:4000/api/exam/exam_list_all
// 请求：GET (可以在浏览器地址栏测试)
// 参数：无
// 示例：http://127.0.0.1:4000/api/exam/exam_list_all
// 响应数据格式: json格式
router.get('/exam_list_all', async (req, res) => {
    await examModel.exam_list_all()
        .then(
            data => {
                // 响应数据给前端
                res.send(data)
            },
            err => {
                res.send(err);
            }
        )
})

// 获取试卷列表（根据主分类id获取响相应的试卷）
// 地址：http://127.0.0.1:4000/api/exam/exam_list
// 请求：GET (可以在浏览器地址栏测试)
// 参数：id
// 示例：http://127.0.0.1:4000/api/exam/exam_list
// 响应数据格式: json格式
router.get('/exam_list', async (req, res) => {
    //获取前端提交的id
    let id = req.query.id;
    if(id) {
        await examModel.exam_list(id)
        .then(
            data => {
                // 响应数据给前端
                res.send(data)
            },
            err => {
                res.send(err);
            }
        )
    }
    else {
        res.send({
            code: -1,
            msg: "缺少id"
        })
    }
    
})

// 搜索试卷列表
// 地址：http://127.0.0.1:4000/api/exam/exam_search
// 请求：GET (可以在浏览器地址栏测试)
// 参数：keyword
// 示例：http://127.0.0.1:4000/api/exam/exam_search
// 响应数据格式: json格式
router.get('/exam_search', async (req, res) => {
    let keyword = req.query.keyword;
    if(keyword){
        await examModel.exam_search(keyword)
        .then(
            data => {
                // 响应数据给前端
                res.send(data)
            },
            err => {
                res.send(err);
            }
        )
    }
    else {
        res.send({
            code: -1,
            msg: "缺少关键字"
        })
    }
   
})

// 统计各分类试卷数量
// 地址：http://127.0.0.1:4000/api/exam/exam_category_total
// 请求：GET (可以在浏览器地址栏测试)
// 参数：无
// 示例：http://127.0.0.1:4000/api/exam/exam_category_total
// 响应数据格式: json格式
router.get('/exam_category_total', async (req, res) => {
    await examModel.exam_category_total()
        .then(
            data => {
                // 响应数据给前端
                res.send(data)
            },
            err => {
                res.send(err);
            }
        )
})

// 获取试卷列表（分页）
// 地址：http://127.0.0.1:4000/api/exam/exam_items
// 请求：GET (可以在浏览器地址栏测试)
// 参数：page, pageSize
// 示例：http://127.0.0.1:4000/api/exam/exam_items
// 响应数据格式: json格式
router.get('/exam_items', async (req, res) => {
    let { page, pageSize } = req.query;
    if(page == undefined || pageSize == undefined) {
        res.send({
            code: -1,
            msg: "缺少参数"
        })
    }
    else {
        await examModel.exam_items(page, pageSize)
        .then(
            data => {
                // 响应数据给前端
                res.send(data)
            },
            err => {
                res.send(err);
            }
        )
   }
})

// 删除试卷
// 地址：http://127.0.0.1:4000/api/exam/exam_remove
// 请求：GET (可以在浏览器地址栏测试)
// 参数：eid
// 示例：http://127.0.0.1:4000/api/exam/exam_remove
// 响应数据格式: json格式
router.get('/exam_remove', async (req, res) => {
    let eid = req.query.eid;
    if(eid){
        await examModel.exam_remove(eid)
        .then(
            data => {
                // 响应数据给前端
                res.send(data)
            },
            err => {
                res.send(err);
            }
        )
    }
    else {
        // 提示缺少参数
        res.send({
            code: -1,
            msg: "缺少参数，请检查后再提交"
        })
    }
})


// 获取试卷详情
// 地址：http://127.0.0.1:4000/api/exam/exam_detail
// 请求：GET (可以在浏览器地址栏测试)
// 参数：eid
// 示例：http://127.0.0.1:4000/api/exam/exam_detail
// 响应数据格式: json格式
router.get('/exam_detail', async (req, res) => {
    let eid = req.query.eid;
    if(eid){
        await examModel.exam_detail(eid)
        .then(
            data => {
                // 响应数据给前端
                res.send(data)
            },
            err => {
                res.send(err);
            }
        )
    }
    else {
        // 提示缺少参数
        res.send({
            code: -1,
            msg: "缺少参数，请检查后再提交"
        })
    }
})



// ## 题目
// ## 试卷
// 新增试卷题目
// 地址：http://127.0.0.1:4000/api/exam/topic_add
// 请求：POST (不可以在浏览器地址栏测试)
// 参数：eid, name, question, answer, score, option
// 示例：http://127.0.0.1:4000/api/exam/topic_add
// 响应数据格式: json格式
router.post('/topic_add', async (req, res) => {
    // 接收前端提交的参数
    let {eid, name, question, answer, score, option} = req.body;
    // console.log({eid, name, question, answer, score, option});
    // 判断text是否有值
    if (eid && name && question && answer && score && option) {
        // 执行数据库的操作
        await examModel.topic_add(eid, name, question, answer, score, option)
            .then(
                data => {
                    // 把模型中的处理结果响应给前端
                    res.send(data);
                }
            )
            .catch(
                err => {
                    res.send(err);
                }
            )
    }
    else {
        // 提示缺少参数
        res.send({
            code: -1,
            msg: "缺少参数，请检查后再提交"
        })
    }
})

// 获取题目列表
// 地址：http://127.0.0.1:4000/api/exam/topic_list
// 请求：GET (可以在浏览器地址栏测试)
// 参数：eid
// 示例：http://127.0.0.1:4000/api/exam/topic_list
// 响应数据格式: json格式
router.get('/topic_list', async (req, res) => {
    let eid = req.query.eid;
    // console.log("111")
    if(eid) {
        // 根据试卷ID （eid） 查询对应的题目列表
        await examModel.topic_list(eid)
        .then(
            data => {
                // 响应数据给前端
                res.send(data)
            },
            err => {
                res.send(err);
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


// 删除题目
// 地址：http://127.0.0.1:4000/api/exam/topic_remove
// 请求：GET (可以在浏览器地址栏测试)
// 参数：tid
// 示例：http://127.0.0.1:4000/api/exam/topic_remove
// 响应数据格式: json格式
router.get('/topic_remove', async (req, res) => {
    let tid = req.query.tid;
    if(tid){
        await examModel.topic_remove(tid)
        .then(
            data => {
                // 响应数据给前端
                res.send(data)
            },
            err => {
                res.send(err);
            }
        )
    }
    else {
        // 提示缺少参数
        res.send({
            code: -1,
            msg: "缺少参数，请检查后再提交"
        })
    }
})

// 统计指定试卷的题目数量
// 地址：http://127.0.0.1:4000/api/exam/topic_num
// 请求：GET (可以在浏览器地址栏测试)
// 参数：eid
// 示例：http://127.0.0.1:4000/api/exam/topic_num
// 响应数据格式: json格式
router.get('/topic_num', async (req, res) => {
    let eid = req.query.eid;
    if(eid) {
        // 根据试卷ID （eid） 查询对应的题目列表
        await examModel.topic_num(eid)
        .then(
            data => {
                // 响应数据给前端
                res.send(data)
            },
            err => {
                res.send(err);
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



// 获取题目列表（分页）
// 地址：http://127.0.0.1:4000/api/exam/topic_items
// 请求：GET (可以在浏览器地址栏测试)
// 参数：page, pageSize
// 示例：http://127.0.0.1:4000/api/exam/topic_items
// 响应数据格式: json格式
router.get('/topic_items', async (req, res) => {
    let { page, pageSize } = req.query;
    if(page == undefined || pageSize == undefined) {
        res.send({
            code: -1,
            msg: "缺少参数"
        })
    }
    else {
        await examModel.topic_items(page, pageSize)
        .then(
            data => {
                // 响应数据给前端
                res.send(data)
            },
            err => {
                res.send(err);
            }
        )
   }
})








// 新增成绩
// 地址：http://127.0.0.1:4000/api/exam/exam_score_add
// 请求：POST (不可以在浏览器地址栏测试)
// 参数：nickName,account,name,score,wrong,right,myanswer,time
// 示例：http://127.0.0.1:4000/api/exam/exam_score_add
// 响应数据格式: json格式
router.post('/exam_score_add', async (req, res) => {
    // 获取用户的临时身份
    let token = req.body.token || req.headers.token;
    if(token){
        let result = new Jwt(token).verifyToken();
        if(result.code == 200) {
            // 获取用户id
            let uid = result.info.data;
            // 接收前端提交的参数
            let {nickName,account,name,score,wrong,right,myanswer,time} = req.body;
            console.log({nickName,account,name,score,wrong,right,myanswer,time})
            // 判断text是否有值
            if (uid) {
                // 执行数据库的操作
                await examModel.exam_score_add(uid,nickName,account,name,score,wrong,right,myanswer,time)
                    .then(
                        data => {
                            // 把模型中的处理结果响应给前端
                            res.send(data);
                        }
                    )
                    .catch(
                        err => {
                            res.send(err);
                        }
                    )
            }
            else {
                // 提示缺少参数
                res.send({
                    code: -1,
                    msg: "缺少参数，请检查后再提交"
                })
            }
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


// 获取成绩列表
// 地址：http://127.0.0.1:4000/api/exam/exam_score_list
// 请求：GET (可以在浏览器地址栏测试)
// 参数：token
// 示例：http://127.0.0.1:4000/api/exam/exam_score_list
// 响应数据格式: json格式
router.get('/exam_score_list', async (req, res) => {
     // 获取用户的临时身份
     let token = req.query.token || req.headers.token;
     if(token){
         let result = new Jwt(token).verifyToken();
         if(result.code == 200) {
             // 获取用户id
             let uid = result.info.data;
             await examModel.exam_score_list(uid)
            .then(
                data => {
                    // 响应数据给前端
                    res.send(data)
                },
                err => {
                    res.send(err);
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

// 删除成绩
// 地址：http://127.0.0.1:4000/api/exam/exam_score_remove
// 请求：GET (可以在浏览器地址栏测试)
// 参数：id
// 示例：http://127.0.0.1:4000/api/exam/exam_score_remove
// 响应数据格式: json格式
router.get('/exam_score_remove', async (req, res) => {
    let sid = req.query.sid;
    if(sid){
        await examModel.exam_score_remove(sid)
        .then(
            data => {
                // 响应数据给前端
                res.send(data)
            },
            err => {
                res.send(err);
            }
        )
    }
    else {
        // 提示缺少参数
        res.send({
            code: -1,
            msg: "缺少参数，请检查后再提交"
        })
    }
})


// 获取成绩详情页
// 地址：http://127.0.0.1:4000/api/exam/exam_score_detail
// 请求：GET (可以在浏览器地址栏测试)
// 参数：sid
// 示例：http://127.0.0.1:4000/api/exam/exam_score_detail
// 响应数据格式: json格式
router.get('/exam_score_detail', async (req, res) => {
    let { sid } = req.query;
    await examModel.exam_score_detail(sid)
        .then(
            data => {
                // 响应数据给前端
                res.send(data)
            },
            err => {
                res.send(err);
            }
        )
})


// 获取题目列表（分页）
// 地址：http://127.0.0.1:4000/api/exam/score_items
// 请求：GET (可以在浏览器地址栏测试)
// 参数：page, pageSize
// 示例：http://127.0.0.1:4000/api/exam/score_items
// 响应数据格式: json格式
router.get('/score_items', async (req, res) => {
    let { page, pageSize } = req.query;
    if(page == undefined || pageSize == undefined) {
        res.send({
            code: -1,
            msg: "缺少参数"
        })
    }
    else {
        await examModel.score_items(page, pageSize)
        .then(
            data => {
                // 响应数据给前端
                res.send(data)
            },
            err => {
                res.send(err);
            }
        )
   }
})



//把当前这个路由挂在模块系统对象上
module.exports = router