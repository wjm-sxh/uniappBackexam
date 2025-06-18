// 导入db模块
const db = require('../common/db')

class Interview {
    /****一级分类菜单****/ 
    category_add(category_text,category_icon){
        return new Promise((resolve, reject) => {
            // 根据text字段查询是否存在重复的名称
            db.query(`select category_text from pre_interview_category where category_text = '${category_text}'`)
                .then(
                    row => {
                        // 判断该分类是否存在
                        if (row.length == 0) {
                            // 插入数据的sql语句
                            db.query(`insert into pre_interview_category(category_text,category_icon) values('${category_text}','${category_icon}')`)
                                .then(
                                    content => {
                                        resolve({
                                            code: 200,
                                            msg: "新增面试题分类名称",
                                            status: content.changedRows == 0 ? '正常' : '异常'
                                        })
                                    }
                                )
                                .catch(
                                    error => {
                                        reject({
                                            code: -1,
                                            msg: "新增分类失败",
                                            error
                                        })
                                    }
                                )
                        }
                        else {
                            resolve({
                                code: 201,
                                msg: `该分类“${category_text}”名称已存在`
                            })
                        }
                    }
                )
        })
    }
    category_remove(category_id){
       return new Promise((resolve,reject)=>{
          // 根据text字段查询是否存在重复的名称
          db.query(`select category_text from pre_interview_category where category_id = '${category_id}'`)
          .then(
              row => {
                  if (row.length == 0) {
                      resolve({
                          code: 404,
                          msg: `这个分类ID“${category_id}”不存在`
                      })
                  }
                  else {
                      // 执行删除操作
                      db.query(`delete from pre_interview_category where category_id = '${category_id}'`)
                          .then(
                              content => {
                                  resolve({
                                      code: 200,
                                      msg: `删除该ID“${category_id}”分类名称成功`,
                                      status: content.changedRows === 0 ? '正常' : '异常'
                                  })
                              }
                          )
                          .catch(
                              error => {
                                  reject({
                                      code: -1,
                                      msg: `删除该ID“${category_id}”分类名称失败`,
                                      error
                                  })
                              }
                          )
                  }
              }
          )
       })
    }
    category_edit(category_id,category_text){
        return new Promise((resolve, reject) => {
            // 先查询
            db.query(`select category_text from pre_interview_category where category_id='${category_id}'`)
                .then(
                    row => {
                        if (row.length == 0) {
                            resolve({
                                code: 404,
                                msg: `这个分类ID“${category_id}”不存在`
                            })
                        }
                        else {
                            // 修改面试题分类名称
                            db.query(`update pre_interview_category set category_text= '${category_text}' where category_id= '${category_id}'`)
                                .then(
                                    content => {
                                        resolve({
                                            code: 200,
                                            msg: `修改该ID“${category_id}”分类名称成功`,
                                            status: content.fieldCount === 0 ? '正常' : '异常'
                                        })
                                    }
                                )
                                .catch(
                                    error => {
                                        reject({
                                            code: -1,
                                            msg: `修改该ID“${category_id}”分类名称失败`,
                                            error
                                        })
                                    }
                                )
                        }
                    }
                )
        })
    }
    category_list(){
        return new Promise((resolve, reject) => {
            db.query(`select  * from pre_interview_category`)
                .then(
                    row => {
                        resolve({
                            code: 200,
                            msg: "获取面试题分类列表",
                            result: row
                        })
                    },
                    error => {
                        reject({
                            code: -1,
                            msg: "获取面试题分类列表失败",
                            error
                        })
                    }
                )
        })
    }
    /****二级分类菜单****/ 
    menu_add(category_id,menu_name,category_text){
        return new Promise((resolve, reject) => {
            // 根据text字段查询是否存在重复的名称
            db.query(`select menu_name from pre_interview_menu where menu_name = '${menu_name}'`)
                .then(
                    row => {
                        // 判断该分类是否存在
                        if (row.length == 0) {
                            // 插入数据的sql语句
                            db.query(`insert into pre_interview_menu(category_id,menu_name,category_text) values('${category_id}','${menu_name}','${category_text}')`)
                                .then(
                                    content => {
                                        resolve({
                                            code: 200,
                                            msg: "新增面试题子分类名称",
                                            status: content.changedRows == 0 ? '正常' : '异常'
                                        })
                                    }
                                )
                                .catch(
                                    error => {
                                        reject({
                                            code: -1,
                                            msg: "新增分类失败",
                                            error
                                        })
                                    }
                                )
                        }
                        else {
                            resolve({
                                code: 201,
                                msg: `该分类“${menu_name}”名称已存在`
                            })
                        }
                    }
                )
        })
    }
    menu_remove(menu_id){
       return new Promise((resolve,reject)=>{
          // 根据text字段查询是否存在重复的名称
          db.query(`select menu_id from pre_interview_menu where menu_id = '${menu_id}'`)
          .then(
              row => {
                  if (row.length == 0) {
                      resolve({
                          code: 404,
                          msg: `这个分类ID“${menu_id}”不存在`
                      })
                  }
                  else {
                      // 执行删除操作
                      db.query(`delete from pre_interview_menu where menu_id = '${menu_id}'`)
                          .then(
                              content => {
                                  resolve({
                                      code: 200,
                                      msg: `删除该ID“${menu_id}”子分类名称成功`,
                                      status: content.changedRows === 0 ? '正常' : '异常'
                                  })
                              }
                          )
                          .catch(
                              error => {
                                  reject({
                                      code: -1,
                                      msg: `删除该ID“${menu_id}”子分类名称失败`,
                                      error
                                  })
                              }
                          )
                  }
              }
          )
       })
    }
    menu_edit(menu_id,menu_name){
        return new Promise((resolve, reject) => {
            // 先查询
            db.query(`select menu_name from pre_interview_menu where menu_id='${menu_id}'`)
                .then(
                    row => {
                        if (row.length == 0) {
                            resolve({
                                code: 404,
                                msg: `这个子分类ID“${menu_id}”不存在`
                            })
                        }
                        else {
                            // 修改面试题分类名称
                            db.query(`update pre_interview_menu set menu_name= '${menu_name}' where menu_id= '${menu_id}'`)
                                .then(
                                    content => {
                                        resolve({
                                            code: 200,
                                            msg: `修改该ID“${menu_id}”子分类名称成功`,
                                            status: content.fieldCount === 0 ? '正常' : '异常'
                                        })
                                    }
                                )
                                .catch(
                                    error => {
                                        reject({
                                            code: -1,
                                            msg: `修改该ID“${menu_id}”子分类名称失败`,
                                            error
                                        })
                                    }
                                )
                        }
                    }
                )
        })
    }
    menu_list(category_id){
        return new Promise((resolve, reject) => {
            let sql;
            if(category_id) {
                sql = `select  * from pre_interview_menu where category_id='${category_id}'`
            }
            else {
                sql = `select  * from pre_interview_menu`
            }
            db.query(sql)
                .then(
                    row => {
                        resolve({
                            code: 200,
                            msg: "获取面试题分类列表",
                            result: row
                        })
                    },
                    error => {
                        reject({
                            code: -1,
                            msg: "获取面试题分类列表失败",
                            error
                        })
                    }
                )
        })
    }

    /****面试题列表****/ 
    topic_add(category_id,menu_id, menu_name, topic_question,topic_answer,topic_img){
        return new Promise((resolve, reject) => {
            // 根据text字段查询是否存在重复的名称
            db.query(`select topic_question from pre_interview_topic where topic_question = '${topic_question}'`)
                .then(
                    row => {
                        // 判断该分类是否存在
                        if (row.length == 0) {
                            // 插入数据的sql语句
                            db.query(`insert into pre_interview_topic(category_id,menu_id, menu_name, topic_question,topic_answer,topic_img) values('${category_id}','${menu_id}','${menu_name}','${topic_question}','${topic_answer}','${topic_img}')`)
                                .then(
                                    content => {
                                        resolve({
                                            code: 200,
                                            msg: "新增面试题成功",
                                            status: content.changedRows == 0 ? '正常' : '异常'
                                        })
                                    }
                                )
                                .catch(
                                    error => {
                                        reject({
                                            code: -1,
                                            msg: "新增面试题失败",
                                            error
                                        })
                                    }
                                )
                        }
                        else {
                            resolve({
                                code: 201,
                                msg: `该面试题“${menu_name}”名称已存在`
                            })
                        }
                    }
                )
        })
    }
    topic_remove(topic_id){
       return new Promise((resolve,reject)=>{
          // 根据text字段查询是否存在重复的名称
          db.query(`select topic_id from pre_interview_topic where topic_id = '${topic_id}'`)
          .then(
              row => {
                  if (row.length == 0) {
                      resolve({
                          code: 404,
                          msg: `这个面试题ID“${topic_id}”不存在`
                      })
                  }
                  else {
                      // 执行删除操作
                      db.query(`delete from pre_interview_topic where topic_id = '${topic_id}'`)
                          .then(
                              content => {
                                  resolve({
                                      code: 200,
                                      msg: `删除该ID“${topic_id}”面试题成功`,
                                      status: content.changedRows === 0 ? '正常' : '异常'
                                  })
                              }
                          )
                          .catch(
                              error => {
                                  reject({
                                      code: -1,
                                      msg: `删除该ID“${topic_id}”面试题称失败`,
                                      error
                                  })
                              }
                          )
                  }
              }
          )
       })
    }
    topic_edit(topic_id,topic_answer){
        return new Promise((resolve, reject) => {
            // 先查询
            db.query(`select topic_id from pre_interview_topic where topic_id='${topic_id}'`)
                .then(
                    row => {
                        if (row.length == 0) {
                            resolve({
                                code: 404,
                                msg: `这个面试题ID“${menu_id}”不存在`
                            })
                        }
                        else {
                            // 修改面试题分类名称
                            db.query(`update pre_interview_topic set topic_answer= '${topic_answer}' where topic_id= '${topic_id}'`)
                                .then(
                                    content => {
                                        resolve({
                                            code: 200,
                                            msg: `修改该ID“${topic_id}”面试题成功`,
                                            status: content.fieldCount === 0 ? '正常' : '异常'
                                        })
                                    }
                                )
                                .catch(
                                    error => {
                                        reject({
                                            code: -1,
                                            msg: `修改该ID“${topic_id}”面试题失败`,
                                            error
                                        })
                                    }
                                )
                        }
                    }
                )
        })
    }
    topic_list(menu_id){
        return new Promise((resolve, reject) => {
            db.query(`select  * from pre_interview_topic where menu_id='${menu_id}'`)
                .then(
                    row => {
                        resolve({
                            code: 200,
                            msg: "获取面试题列表",
                            result: row
                        })
                    },
                    error => {
                        reject({
                            code: -1,
                            msg: "获取面试题列表失败",
                            error
                        })
                    }
                )
        })
    }
    topic_items(menu_id,page_num=1,page_size=30){
        return new Promise((resolve, reject) => {

            db.query('select count(*) as total from pre_interview_topic')
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
              data=>{
                let num= ((parseInt(page_num) - 1) * parseInt(page_size))// 从哪个位置开始获取
                let size= (parseInt(page_size)) // 获取多少条记录

                db.query(`select  * from pre_interview_topic where menu_id='${menu_id}' limit ${num} , ${size}`)
                .then(
                    row => {
                        resolve({
                            code: 200,
                            msg: "获取面试题列表",
                            total: data[0] && data[0].total,
                            result: row
                        })
                    },
                    error => {
                        reject({
                            code: -1,
                            msg: "获取面试题列表失败",
                            error
                        })
                    }
                )
              }
           )
        })
    }
    topic_search(keyword){
        return new Promise((resolve, reject) => {
            db.query(`select  * from pre_interview_topic where topic_question like '%${keyword}%' or menu_name like '%${keyword}%'`)
                .then(
                    row => {
                        resolve({
                            code: 200,
                            msg: "获取关键字对应的面试题列表",
                            result: row
                        })
                    },
                    error => {
                        reject({
                            code: -1,
                            msg: "获取关键字对应面试题列表失败",
                            error
                        })
                    }
                )
        })
    }

    topic_list_all(){
        return new Promise((resolve, reject) => {
            db.query(`select  * from pre_interview_topic`)
                .then(
                    row => {
                        resolve({
                            code: 200,
                            msg: "获取面试题列表",
                            result: row
                        })
                    },
                    error => {
                        reject({
                            code: -1,
                            msg: "获取面试题列表失败",
                            error
                        })
                    }
                )
        })
    }

    topic_list_hot(){
        return new Promise((resolve, reject) => {
            db.query(`select  * from pre_interview_topic where hot = 1`)
                .then(
                    row => {
                        resolve({
                            code: 200,
                            msg: "获取热门面试题列表",
                            result: row
                        })
                    },
                    error => {
                        reject({
                            code: -1,
                            msg: "获取面试题列表失败",
                            error
                        })
                    }
                )
        })
    }

    // 查看面试题详情
    topic_detail(topic_id){
        return new Promise((resolve, reject) => {
            db.query(`select  * from pre_interview_topic where topic_id = '${topic_id}'`)
                .then(
                    row => {
                        resolve({
                            code: 200,
                            msg: "获取面试题详情成功",
                            result: row
                        })
                    },
                    error => {
                        reject({
                            code: -1,
                            msg: "获取面试题详情失败",
                            error
                        })
                    }
                )
        })
    }

    // 统计试卷数量
    topic_category_total(){
        return new Promise((resolve,reject)=>{
         this.category_list()
         .then(
            async content=>{
                 let {code , result } = content;
                 if(code == 200) {
                     let arr = []
                     for(let i = 0 ; i < result.length ; i ++){
                         let category_id = result[i].category_id;
                         let category_text = result[i].category_text;
                         await db.query(`select count(*) as total from pre_interview_topic where category_id = '${category_id}'`)
                         .then(
                             data => {
                                  arr.push({
                                     category_text,
                                     num: data[0].total
                                  })
                             }
                         )
                     }
 
                     resolve({
                         code: 200,
                         msg: "统计各分类面试题数量",
                         result:arr 
                     })
                 }
             }
         )
         .catch(
             err=>{
                reject({
                     code: -1,
                     msg: "查询失败",
                     err 
                })
             }
         )
        })
     }


    /****面试题收藏表****/ 
    collect_add(topic_id,user_id, topic_question, topic_answer,topic_img){
        return new Promise((resolve, reject) => {
            // 根据text字段查询是否存在重复的名称
            db.query(`select topic_question from pre_interview_collect where topic_question = '${topic_question}'`)
                .then(
                    row => {
                        // 判断该分类是否存在
                        if (row.length == 0) {
                            let date = new Date();
                            let collect_createAt = date.getTime().toString()
                            // 插入数据的sql语句
                            db.query(`insert into pre_interview_collect(topic_id,user_id, topic_question, topic_answer,topic_img,collect_createAt) values('${topic_id}','${user_id}','${topic_question}','${topic_answer}','${topic_answer}','${topic_img}','${collect_createAt}')`)
                                .then(
                                    content => {
                                        resolve({
                                            code: 200,
                                            msg: "新增收藏面试题",
                                            status: content.changedRows == 0 ? '正常' : '异常'
                                        })
                                    }
                                )
                                .catch(
                                    error => {
                                        reject({
                                            code: -1,
                                            msg: "新增收藏面试题失败",
                                            error
                                        })
                                    }
                                )
                        }
                        else {
                            resolve({
                                code: 201,
                                msg: `该收藏面试题“${menu_name}”名称已存在`
                            })
                        }
                    }
                )
        })
    }
    collect_remove(topic_id,user_id){
       return new Promise((resolve,reject)=>{
          // 根据text字段查询是否存在重复的名称
          db.query(`select topic_id from pre_interview_collect where topic_id = '${topic_id}' and user_id='${user_id}'`)
          .then(
              row => {
                  if (row.length == 0) {
                      resolve({
                          code: 404,
                          msg: `这个面试题ID“${topic_id}”不存在`
                      })
                  }
                  else {
                      // 执行删除操作
                      db.query(`delete from pre_interview_collect where topic_id = '${topic_id}' and user_id='${user_id}'`)
                          .then(
                              content => {
                                  resolve({
                                      code: 200,
                                      msg: `删除该ID“${topic_id}”收藏面试题成功`,
                                      status: content.changedRows === 0 ? '正常' : '异常'
                                  })
                              }
                          )
                          .catch(
                              error => {
                                  reject({
                                      code: -1,
                                      msg: `删除该ID“${topic_id}”收藏面试题称失败`,
                                      error
                                  })
                              }
                          )
                  }
              }
          )
       })
    }

    collect_list(user_id){
        return new Promise((resolve, reject) => {
            db.query(`select  * from pre_interview_collect where user_id='${user_id}'`)
                .then(
                    row => {
                        resolve({
                            code: 200,
                            msg: "获取收藏面试题列表",
                            result: row
                        })
                    },
                    error => {
                        reject({
                            code: -1,
                            msg: "获取收藏面试题列表失败",
                            error
                        })
                    }
                )
        })
    }

    collect_items(user_id,page_num=1,page_size=30){
        return new Promise((resolve, reject) => {

            db.query('select count(*) as total from pre_interview_collect where user_id = "'+user_id+'"')
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
              data=>{
                let num= ((parseInt(page_num) - 1) * parseInt(page_size))// 从哪个位置开始获取
                let size= (parseInt(page_size)) // 获取多少条记录

                db.query(`select  * from pre_interview_collect where user_id='${user_id}' limit ${num} , ${size}`)
                .then(
                    row => {
                        resolve({
                            code: 200,
                            msg: "获取收藏面试题列表",
                            total: data[0] && data[0].total,
                            result: row
                        })
                    },
                    error => {
                        reject({
                            code: -1,
                            msg: "获取收藏面试题列表失败",
                            error
                        })
                    }
                )
              }
           )
        })
    }
    
    ishas(user_id , topic_id){
        return new Promise((resolve, reject) => {
            db.query(`select  * from pre_interview_collect where user_id='${user_id}' and topic_id='${topic_id}'`)
                .then(
                    row => {
                        resolve({
                            code: 200,
                            msg: row.length == 1 ? '已收藏':'未收藏',
                            result: row
                        })
                    },
                    error => {
                        reject({
                            code: -1,
                            msg: "获取收藏面试题列表失败",
                            error
                        })
                    }
                )
        })
    }

    /****纠错表****/ 
    correction_add(topic_id,user_id, topic_question, correction_answer){
        return new Promise((resolve, reject) => {
            let date = new Date()
            let correction_createAt = date.getTime().toString()
           // 插入数据的sql语句
           db.query(`insert into pre_interview_correction(topic_id,user_id, topic_question, correction_answer,correction_createAt) values('${topic_id}','${user_id}','${topic_question}','${correction_answer}','${topic_answer}','${correction_createAt}')`)
           .then(
               content => {
                   resolve({
                       code: 200,
                       msg: "新增纠错面试题",
                       status: content.changedRows == 0 ? '正常' : '异常'
                   })
               }
           )
           .catch(
               error => {
                   reject({
                       code: -1,
                       msg: "新增纠错面试题失败",
                       error
                   })
               }
           )
        })
    }
    correction_remove(correction_id){
       return new Promise((resolve,reject)=>{
          // 根据text字段查询是否存在重复的名称
          db.query(`select correction_id from pre_interview_correction where correction_id = '${correction_id}'`)
          .then(
              row => {
                  if (row.length == 0) {
                      resolve({
                          code: 404,
                          msg: `这个面试题ID“${correction_id}”不存在`
                      })
                  }
                  else {
                      // 执行删除操作
                      db.query(`delete from pre_interview_correction where correction_id = '${correction_id}'`)
                          .then(
                              content => {
                                  resolve({
                                      code: 200,
                                      msg: `删除该ID“${topic_id}”纠错面试题成功`,
                                      status: content.changedRows === 0 ? '正常' : '异常'
                                  })
                              }
                          )
                          .catch(
                              error => {
                                  reject({
                                      code: -1,
                                      msg: `删除该ID“${topic_id}”纠错面试题称失败`,
                                      error
                                  })
                              }
                          )
                  }
              }
          )
       })
    }
    correction_list(user_id){
        return new Promise((resolve, reject) => {
            db.query(`select  * from pre_interview_correction where user_id='${user_id}'`)
                .then(
                    row => {
                        resolve({
                            code: 200,
                            msg: "获取我的纠错面试题列表",
                            result: row
                        })
                    },
                    error => {
                        reject({
                            code: -1,
                            msg: "获取我的纠错面试题列表失败",
                            error
                        })
                    }
                )
        })
    }
    correction_items(page_num=1,page_size=30){
        return new Promise((resolve, reject) => {
            db.query('select count(*) as total from pre_interview_correction')
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
              data=>{
                let num= ((parseInt(page_num) - 1) * parseInt(page_size))// 从哪个位置开始获取
                let size= (parseInt(page_size)) // 获取多少条记录

                db.query(`select  * from pre_interview_correction  limit ${num} , ${size}`)
                .then(
                    row => {
                        resolve({
                            code: 200,
                            msg: "获取纠错面试题列表",
                            total: data[0] && data[0].total,
                            result: row
                        })
                    },
                    error => {
                        reject({
                            code: -1,
                            msg: "获取纠错面试题列表失败",
                            error
                        })
                    }
                )
              }
           )
        })
    }

}


// 导出面试题
module.exports = Interview;