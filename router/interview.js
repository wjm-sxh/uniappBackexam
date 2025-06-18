
// 导入路由
const router = require('express').Router()
// 导入面试题类
const Interview =  require('../model/interviewModel')
// 导入jwt模块 （jsonwebtoken）
const Jwt = require('../common/token/jwt')
// 创建面试题类实例
const interviewModel = new Interview()


// ## 面试题分类（一级）
// 添加面试题分类名称
// 地址：http://127.0.0.1:4000/api/interview/category_add
// 请求：POST (不可以在浏览器地址栏测试)
// 参数：category_text,category_icon
// 示例：http://127.0.0.1:4000/api/interview/category_add
// 响应数据格式: json格式
router.post('/category_add', async (req, res) => {
    // 接收前端提交的参数
    let {category_text,category_icon} = req.body
    // 判断text是否有值
    if (category_text) {
        // 执行数据库的操作
        await interviewModel.category_add(category_text,category_icon)
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


// 获取面试题分类列表
// 地址：http://127.0.0.1:4000/api/interview/category_list
// 请求：GET (可以在浏览器地址栏测试)
// 参数：无
// 示例：http://127.0.0.1:4000/api/interview/category_list
// 响应数据格式: json格式
router.get('/category_list', async (req, res) => {
    await interviewModel.category_list()
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

// 删除面试题分类名称
// 地址：http://127.0.0.1:4000/api/interview/category_remove
// 请求：GET (可以在浏览器地址栏测试)
// 参数：category_id
// 示例：http://127.0.0.1:4000/api/interview/category_remove
// 响应数据格式: json格式
router.get('/category_remove', async (req, res) => {
    let category_id = req.query.category_id;
    if(category_id){
        await interviewModel.category_remove(category_id)
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


// 修改面试题分类名称
// 地址：http://127.0.0.1:4000/api/interview/category_edit
// 请求：POST (不可以在浏览器地址栏测试)
// 参数：category_id, category_text
// 示例：http://127.0.0.1:4000/api/interview/category_edit
// 响应数据格式: json格式
router.post('/category_edit', async (req,res)=> {
    // 接收前端提交的参数
    let {category_id,category_text} = req.body;
    // 判断参数是否有值
    if(category_id == undefined || category_text == undefined) {
        res.send({
            code: -1,
            msg: "缺少参数，请检查在提交"
        })
    }
    else {
        await interviewModel.category_edit(category_id,category_text)
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


// ## 面试题子分类（二级）
// 添加面试题子分类名称
// 地址：http://127.0.0.1:4000/api/interview/menu_add
// 请求：POST (不可以在浏览器地址栏测试)
// 参数：category_id, menu_name
// 示例：http://127.0.0.1:4000/api/interview/menu_add
// 响应数据格式: json格式
router.post('/menu_add', async (req, res) => {
    // 接收前端提交的参数
    let {category_id,menu_name,category_text} = req.body
    // 判断text是否有值
    if (menu_name) {
        // 执行数据库的操作
        await interviewModel.menu_add(category_id,menu_name,category_text)
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


// 获取面试题子分类列表
// 地址：http://127.0.0.1:4000/api/interview/menu_list
// 请求：GET (可以在浏览器地址栏测试)
// 参数：category_id
// 示例：http://127.0.0.1:4000/api/interview/menu_list
// 响应数据格式: json格式
router.get('/menu_list', async (req, res) => {
    let category_id = req.query.category_id
    await interviewModel.menu_list(category_id)
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


// 删除面试题分类名称
// 地址：http://127.0.0.1:4000/api/interview/menu_remove
// 请求：GET (可以在浏览器地址栏测试)
// 参数：menu_id
// 示例：http://127.0.0.1:4000/api/interview/menu_remove
// 响应数据格式: json格式
router.get('/menu_remove', async (req, res) => {
    let menu_id = req.query.menu_id;
    if(menu_id){
        await interviewModel.menu_remove(menu_id)
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


// 修改面试题分类名称
// 地址：http://127.0.0.1:4000/api/interview/menu_edit
// 请求：POST (不可以在浏览器地址栏测试)
// 参数：menu_id, menu_name
// 示例：http://127.0.0.1:4000/api/interview/menu_edit
// 响应数据格式: json格式
router.post('/menu_edit', async (req,res)=> {
    // 接收前端提交的参数
    let {menu_id, menu_name} = req.body;
    // 判断参数是否有值
    if(menu_id == undefined || menu_name == undefined) {
        res.send({
            code: -1,
            msg: "缺少参数，请检查在提交"
        })
    }
    else {
        await interviewModel.menu_edit(menu_id, menu_name)
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



// ## 面试题
// 添加面试题
// 地址：http://127.0.0.1:4000/api/interview/topic_add
// 请求：POST (不可以在浏览器地址栏测试)
// 参数：category_id,menu_id,menu_name, topic_question,topic_answer,topic_img (可选)
// 示例：http://127.0.0.1:4000/api/interview/topic_add
// 响应数据格式: json格式
router.post('/topic_add', async (req, res) => {
    // 接收前端提交的参数
    let {category_id,menu_id, menu_name, topic_question,topic_answer,topic_img} = req.body
    // 判断text是否有值
    if (category_id && menu_id && menu_name && topic_question) {
        // 执行数据库的操作
        await interviewModel.topic_add(category_id,menu_id,menu_name, topic_question,topic_answer,topic_img)
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


// 获取面试题子分类面试题列表
// 地址：http://127.0.0.1:4000/api/interview/topic_list
// 请求：GET (可以在浏览器地址栏测试)
// 参数：menu_id
// 示例：http://127.0.0.1:4000/api/interview/topic_list
// 响应数据格式: json格式
router.get('/topic_list', async (req, res) => {
    let menu_id = req.query.menu_id
    if(menu_id){
        await interviewModel.topic_list(menu_id)
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


// 获取面试题列表（全部）
// 地址：http://127.0.0.1:4000/api/interview/topic_list_all
// 请求：GET (可以在浏览器地址栏测试)
// 参数：无
// 示例：http://127.0.0.1:4000/api/interview/topic_list_all
// 响应数据格式: json格式
router.get('/topic_list_all', async (req, res) => {
    await interviewModel.topic_list_all()
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



// 获取面试题列表（热门）
// 地址：http://127.0.0.1:4000/api/interview/topic_list_hot
// 请求：GET (可以在浏览器地址栏测试)
// 参数：无
// 示例：http://127.0.0.1:4000/api/interview/topic_list_hot
// 响应数据格式: json格式
router.get('/topic_list_hot', async (req, res) => {
    await interviewModel.topic_list_hot()
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

// 查看面试题详情
// 地址：http://127.0.0.1:4000/api/interview/topic_detail
// 请求：GET (可以在浏览器地址栏测试)
// 参数：topic_id
// 示例：http://127.0.0.1:4000/api/interview/topic_detail
// 响应数据格式: json格式
router.get('/topic_detail', async (req, res) => {
    let { topic_id } = req.query;
    if(topic_id){
        await interviewModel.topic_detail(topic_id)
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
            msg: "缺少题目id"
        })
    }
})


// 查看各分类面试题数量
// 地址：http://127.0.0.1:4000/api/interview/topic_category_total
// 请求：GET (可以在浏览器地址栏测试)
// 参数：无
// 示例：http://127.0.0.1:4000/api/interview/topic_category_total
// 响应数据格式: json格式
router.get('/topic_category_total', async (req, res) => {
    await interviewModel.topic_category_total()
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


// 获取面试题子分类面试题列表
// 地址：http://127.0.0.1:4000/api/interview/topic_items
// 请求：GET (可以在浏览器地址栏测试)
// 参数：menu_id
// 示例：http://127.0.0.1:4000/api/interview/topic_items
// 响应数据格式: json格式
router.get('/topic_items', async (req, res) => {
    let {menu_id,page_num,page_size} = req.query
    if(menu_id){
        await interviewModel.topic_items(menu_id,page_num,page_size)
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


// 删除面试题名称
// 地址：http://127.0.0.1:4000/api/interview/topic_remove
// 请求：GET (可以在浏览器地址栏测试)
// 参数：topic_id
// 示例：http://127.0.0.1:4000/api/interview/topic_remove
// 响应数据格式: json格式
router.get('/topic_remove', async (req, res) => {
    let topic_id = req.query.topic_id;
    if(topic_id){
        await interviewModel.topic_remove(topic_id)
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


// 修改面试题
// 地址：http://127.0.0.1:4000/api/interview/topic_edit
// 请求：POST (不可以在浏览器地址栏测试)
// 参数：topic_id,topic_answer
// 示例：http://127.0.0.1:4000/api/interview/topic_edit
// 响应数据格式: json格式
router.post('/topic_edit', async (req,res)=> {
    // 接收前端提交的参数
    let {topic_id,topic_answer} = req.body;
    // 判断参数是否有值
    if(topic_id == undefined || topic_answer == undefined) {
        res.send({
            code: -1,
            msg: "缺少参数，请检查在提交"
        })
    }
    else {
        await interviewModel.topic_edit(topic_id,topic_answer)
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


// 关键字查询面试题
// 地址：http://127.0.0.1:4000/api/interview/topic_search
// 请求：GET (可以在浏览器地址栏测试)
// 参数：menu_id
// 示例：http://127.0.0.1:4000/api/interview/topic_search
// 响应数据格式: json格式
router.get('/topic_search', async (req, res) => {
    let keyword = req.query.keyword
    if(keyword){
        await interviewModel.topic_search(keyword)
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


// ## 收藏
// 添加收藏面试题
// 地址：http://127.0.0.1:4000/api/interview/collect_add
// 请求：POST (不可以在浏览器地址栏测试)
// 参数：category_id,menu_id, menu_name, topic_question,topic_answer,topic_img（可选）,token
// 示例：http://127.0.0.1:4000/api/interview/collect_add
// 响应数据格式: json格式
router.post('/collect_add', async (req, res) => {
    // 接收前端提交的参数
    let {category_id,menu_id, menu_name, topic_question,topic_answer,topic_img,token} = req.body
    if(token){
        let result = new Jwt(token).verifyToken();
        if(result.code == 200) {
            // 获取用户id
            let user_id = result.info.data;
            // 判断text是否有值
            if (category_id && menu_id && menu_name && topic_question) {
                // 执行数据库的操作
                await interviewModel.collect_add(topic_id,user_id, topic_question, topic_answer,topic_img)
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

// 获取收藏面试题列表
// 地址：http://127.0.0.1:4000/api/interview/collect_list
// 请求：GET (可以在浏览器地址栏测试)
// 参数：token
// 示例：http://127.0.0.1:4000/api/interview/collect_list
// 响应数据格式: json格式
router.get('/collect_list', async (req, res) => {
     // 接收前端提交的参数
     let {token} = req.query
     if(token){
         let result = new Jwt(token).verifyToken();
         if(result.code == 200) {
             // 获取用户id
             let user_id = result.info.data;
              // 执行数据库的操作
              await interviewModel.collect_list(user_id)
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

// 获取收藏面试题列表（分页）
// 地址：http://127.0.0.1:4000/api/interview/collect_items
// 请求：GET (可以在浏览器地址栏测试)
// 参数：token,page_num,page_size
// 示例：http://127.0.0.1:4000/api/interview/collect_items
// 响应数据格式: json格式
router.get('/collect_items', async (req, res) => {
    let {token,page_num,page_size} = req.query
    if(token){
         let result = new Jwt(token).verifyToken();
         if(result.code == 200) {
             // 获取用户id
             let user_id = result.info.data;
              // 执行数据库的操作
              await interviewModel.collect_items(user_id,page_num,page_size)
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

// 删除收藏面试题名称
// 地址：http://127.0.0.1:4000/api/interview/collect_remove
// 请求：GET (可以在浏览器地址栏测试)
// 参数：topic_id,token
// 示例：http://127.0.0.1:4000/api/interview/collect_remove
// 响应数据格式: json格式
router.get('/collect_remove', async (req, res) => {
    let {topic_id, token} = req.query;
    if(token){
        let result = new Jwt(token).verifyToken();
        if(result.code == 200) {
            // 获取用户id
            let user_id = result.info.data;
             // 执行数据库的操作
             await interviewModel.collect_remove(topic_id,user_id)
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

// 获取收藏面试题列表
// 地址：http://127.0.0.1:4000/api/interview/ishas
// 请求：GET (可以在浏览器地址栏测试)
// 参数：token,topic_id
// 示例：http://127.0.0.1:4000/api/interview/ishas
// 响应数据格式: json格式
router.get('/ishas', async (req, res) => {
    // 接收前端提交的参数
    let {token,topic_id} = req.query
    if(token){
        let result = new Jwt(token).verifyToken();
        if(result.code == 200) {
            // 获取用户id
            let user_id = result.info.data;
             // 执行数据库的操作
             await interviewModel.ishas(user_id,topic_id)
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

// ## 纠错
// 添加纠错面试题
// 地址：http://127.0.0.1:4000/api/interview/correction_add
// 请求：POST (不可以在浏览器地址栏测试)
// 参数：topic_id,user_id, topic_question, correction_answer,token
// 示例：http://127.0.0.1:4000/api/interview/correction_add
// 响应数据格式: json格式
router.post('/correction_add', async (req, res) => {
    // 接收前端提交的参数
    let {topic_id, topic_question, correction_answer,token} = req.body
    if(token){
        let result = new Jwt(token).verifyToken();
        if(result.code == 200) {
            // 获取用户id
            let user_id = result.info.data;
            // 判断text是否有值
            if (topic_id && topic_question && correction_answer) {
                // 执行数据库的操作
                await interviewModel.correction_add(topic_id,user_id, topic_question, correction_answer)
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

// 获取纠错面试题列表(个人)
// 地址：http://127.0.0.1:4000/api/interview/correction_list
// 请求：GET (可以在浏览器地址栏测试)
// 参数：token
// 示例：http://127.0.0.1:4000/api/interview/correction_list
// 响应数据格式: json格式
router.get('/correction_list', async (req, res) => {
     // 接收前端提交的参数
     let {token} = req.query
     if(token){
         let result = new Jwt(token).verifyToken();
         if(result.code == 200) {
             // 获取用户id
             let user_id = result.info.data;
              // 执行数据库的操作
              await interviewModel.correction_list(user_id)
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

// 获取纠错面试题列表
// 地址：http://127.0.0.1:4000/api/interview/correction_items
// 请求：GET (可以在浏览器地址栏测试)
// 参数：page_num,page_size
// 示例：http://127.0.0.1:4000/api/interview/correction_items
// 响应数据格式: json格式
router.get('/correction_items', async (req, res) => {
    let {page_num,page_size} = req.query
     // 执行数据库的操作
     await interviewModel.correction_items(page_num,page_size)
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
})

// 删除纠错面试题名称
// 地址：http://127.0.0.1:4000/api/interview/correction_remove
// 请求：GET (可以在浏览器地址栏测试)
// 参数：correction_id
// 示例：http://127.0.0.1:4000/api/interview/correction_remove
// 响应数据格式: json格式
router.get('/correction_remove', async (req, res) => {
    let {correction_id} = req.query;
    if(correction_id){
         // 执行数据库的操作
         await interviewModel.correction_remove(correction_id)
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
        res.send({
            code: -1,
            msg: "缺少参数"
        })
    }


})


//把当前这个路由挂在模块系统对象上
module.exports = router
