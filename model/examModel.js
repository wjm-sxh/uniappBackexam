// 导入db模块
const db = require('../common/db')

// 定义考试类
class Exam {
    // ### 考试分类名称
    // 增
    // 新增考试分类名称
    category_add(text, icon) {
        return new Promise((resolve, reject) => {
            // 根据text字段查询是否存在重复的名称
            db.query(`select text from pre_exam_category where text = '${text}'`)
                .then(
                    row => {
                        // 判断该分类是否存在
                        if (row.length == 0) {
                            // 插入数据的sql语句
                            db.query(`insert into pre_exam_category(text,icon) values('${text}','${icon}')`)
                                .then(
                                    content => {
                                        resolve({
                                            code: 200,
                                            msg: "新增考试分类名称",
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
                                msg: `该分类“${text}”名称已存在`
                            })
                        }
                    }
                )
        })
    }

    // 删
    // 删除考试分类名称
    category_remove(id) {
        return new Promise((resolve, reject) => {
            // 根据id字段查询是否存在重复的名称
            db.query(`select text from pre_exam_category where id = '${id}'`)
                .then(
                    row => {
                        if (row.length == 0) {
                            resolve({
                                code: 404,
                                msg: `这个分类ID“${id}”不存在`
                            })
                        }
                        else {
                            // 执行删除操作
                            db.query(`delete from pre_exam_category where id = '${id}'`)
                                .then(
                                    content => {
                                        resolve({
                                            code: 200,
                                            msg: `删除该ID“${id}”分类名称成功`,
                                            status: content.changedRows === 0 ? '正常' : '异常'
                                        })
                                    }
                                )
                                .catch(
                                    error => {
                                        reject({
                                            code: -1,
                                            msg: `删除该ID“${id}”分类名称失败`,
                                            error
                                        })
                                    }
                                )
                        }
                    }
                )

        })
    }

    // 查
    // 获取考试分类列表
    category_list() {
        return new Promise((resolve, reject) => {
            db.query(`select  * from pre_exam_category`)
                .then(
                    row => {
                        resolve({
                            code: 200,
                            msg: "获取考试分类列表",
                            result: row
                        })
                    },
                    error => {
                        reject({
                            code: -1,
                            msg: "获取考试分类列表失败",
                            error
                        })
                    }
                )
        })
    }

    // 改
    // 修改分类名称
    category_modify(id, text) {
        return new Promise((resolve, reject) => {
            // 先查询
            db.query(`select text from pre_exam_category where id='${id}'`)
                .then(
                    row => {
                        if (row.length == 0) {
                            resolve({
                                code: 404,
                                msg: `这个分类ID“${id}”不存在`
                            })
                        }
                        else {
                            // 修改考试分类名称
                            db.query(`update pre_exam_category set text= '${text}' where id= '${id}'`)
                                .then(
                                    content => {
                                        resolve({
                                            code: 200,
                                            msg: `修改该ID“${id}”分类名称成功`,
                                            status: content.fieldCount === 0 ? '正常' : '异常'
                                        })
                                    }
                                )
                                .catch(
                                    error => {
                                        reject({
                                            code: -1,
                                            msg: `修改该ID“${id}”分类名称失败`,
                                            error
                                        })
                                    }
                                )
                        }
                    }
                )
        })
    }

    // ### 试卷部分
    // 新增试卷列表
    exam_add(id, text, name, total, passline, time, num, score) {
        return new Promise((resolve, reject) => {
            // 根据text字段查询是否存在重复的名称
            db.query(`select name from pre_exam_list where name = '${name}'`)
                .then(
                    row => {
                        // 判断该分类是否存在
                        if (row.length == 0) {
                            // 插入数据的sql语句
                            db.query(`insert into pre_exam_list(id, text , name , total, passline,time,num,score) values('${id}','${text}','${name}','${total}','${passline}','${time}','${num}','${score}')`)
                                .then(
                                    content => {
                                        resolve({
                                            code: 200,
                                            msg: "新增试卷名称",
                                            status: content.changedRows == 0 ? '正常' : '异常'
                                        })
                                    }
                                )
                                .catch(
                                    error => {
                                        reject({
                                            code: -1,
                                            msg: "新增试卷失败",
                                            error
                                        })
                                    }
                                )
                        }
                        else {
                            resolve({
                                code: 201,
                                msg: `该试卷“${name}”已存在`
                            })
                        }
                    }
                )
        })
    }

    // 试卷列表
    exam_list(id) {
        return new Promise((resolve, reject) => {
            db.query(`select  * from pre_exam_list where id = '${id}'`)
                .then(
                    row => {
                        resolve({
                            code: 200,
                            msg: "获取试卷列表",
                            result: row
                        })
                    },
                    error => {
                        reject({
                            code: -1,
                            msg: "获取试卷列表失败",
                            error
                        })
                    }
                )
        })
    }

    exam_list_all() {
        return new Promise((resolve, reject) => {
            db.query(`select  * from pre_exam_list`)
                .then(
                    row => {
                        resolve({
                            code: 200,
                            msg: "获取试卷列表",
                            result: row
                        })
                    },
                    error => {
                        reject({
                            code: -1,
                            msg: "获取试卷列表失败",
                            error
                        })
                    }
                )
        })
    }

    // 试卷分页
    exam_items(page_num, page_size) {
        return new Promise((resolve, reject) => {
            db.query('select count(*) as total from pre_exam_list')
                .then(
                    data => {
                        // console.log({data})
                        return data
                    },
                    err => {
                        reject({
                            code: -1,
                            msg: "统计失败",
                            err
                        })
                    }
                )
                .then(
                    data => {
                        let num = ((parseInt(page_num) - 1) * parseInt(page_size))// 从哪个位置开始获取
                        let size = (parseInt(page_size)) // 获取多少条记录
                        db.query(`select * from pre_exam_list limit ${num} , ${size}`)
                            .then(
                                rows => {
                                    resolve({
                                        code: 200,
                                        msg: "获取试卷列表成功",
                                        total: data[0] && data[0].total,
                                        result: [...rows]
                                    })
                                },
                                err => {
                                    reject({
                                        code: -1,
                                        msg: "获取试卷列表失败",
                                        err
                                    })
                                }
                            )
                    }
                )
        })
    }

    // 删除试卷
    exam_remove(eid) {
        return new Promise((resolve, reject) => {
            // 根据text字段查询是否存在重复的名称
            db.query(`select text from pre_exam_list where eid = '${eid}'`)
                .then(
                    row => {
                        if (row.length == 0) {
                            resolve({
                                code: 404,
                                msg: `这个分类ID“${id}”不存在`
                            })
                        }
                        else {
                            // 执行删除操作
                            db.query(`delete from pre_exam_list where eid = '${eid}'`)
                                .then(
                                    content => {
                                        resolve({
                                            code: 200,
                                            msg: `删除该ID“${eid}”试卷成功`,
                                            status: content.changedRows === 0 ? '正常' : '异常'
                                        })
                                        // 删除试卷对应的题目
                                        db.query(`delete from pre_exam_topic where eid = '${eid}'`)
                                            .then(() => { })
                                            .catch(() => { })
                                    }
                                )
                                .catch(
                                    error => {
                                        reject({
                                            code: -1,
                                            msg: `删除该ID“${eid}”试卷失败`,
                                            error
                                        })
                                    }
                                )
                        }
                    }
                )

        })
    }

     // 获取试卷详情信息
     exam_detail(eid) {
        return new Promise((resolve, reject) => {
            // 根据text字段查询是否存在重复的名称
            db.query(`select * from pre_exam_list where eid = '${eid}'`)
                .then(
                    row => {
                        if (row.length == 0) {
                            resolve({
                                code: 404,
                                msg: `这个分类ID“${id}”不存在`
                            })
                        }
                        else {
                            resolve({
                                code: 200,
                                msg: "获取试卷详情",
                                result: row
                            })
                        }
                    }
                )

        })
    }

    // 统计试卷数量
    exam_category_total(){
       return new Promise((resolve,reject)=>{
        this.category_list()
        .then(
           async content=>{
                let {code , result } = content;
                if(code == 200) {
                    let arr = []
                    for(let i = 0 ; i < result.length ; i ++){
                        let text = result[i].text;
                        await db.query(`select count(*) as total from pre_exam_list where text = '${text}'`)
                        .then(
                            data => {
                                 arr.push({
                                    text,
                                    num: data[0].total
                                 })
                            }
                        )
                    }

                    resolve({
                        code: 200,
                        msg: "统计各分类试卷数量(N套试卷)",
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
    // 搜索试卷功能
    exam_search(keyword){
        return new Promise((resolve, reject) => {
            db.query(`select  * from pre_exam_list where text like '%${keyword}%' or name like '%${keyword}%'`)
                .then(
                    row => {
                        resolve({
                            code: 200,
                            msg: "获取关键字对应试卷列表",
                            result: row
                        })
                    },
                    error => {
                        reject({
                            code: -1,
                            msg: "获取关键字搜索试卷失败",
                            error
                        })
                    }
                )
        })
    }


    // ## 题目部分
    // 新增试卷列表
    topic_add(eid, name, question, answer, score, opt) {
        // console.log({eid, name, question, answer, score, opt})
        return new Promise((resolve, reject) => {
            // 根据text字段查询是否存在重复的名称
            db.query(`select question from pre_exam_topic where question = '${question}'`)
                .then(
                    row => {
                        // 判断该分类是否存在
                        if (row.length == 0) {
                            // 插入数据的sql语句
                            db.query(`insert into pre_exam_topic(eid, name, question, answer,score,opt) values('${eid}','${name}','${question}','${answer}','${score}','${opt}')`)
                                .then(
                                    content => {
                                        resolve({
                                            code: 200,
                                            msg: "新增题目成功",
                                            status: content.changedRows == 0 ? '正常' : '异常'
                                        })
                                    }
                                )
                                .catch(
                                    error => {
                                        reject({
                                            code: -1,
                                            msg: "新增题目失败",
                                            error
                                        })
                                    }
                                )
                        }
                        else {
                            resolve({
                                code: 201,
                                msg: `该题目“${question}”已存在`
                            })
                        }
                    }
                )
        })
    }
    // 试卷列表（根据eid获取题目列表）
    topic_list(eid) {
        return new Promise((resolve, reject) => {
            db.query(`select  * from pre_exam_topic where eid = '${eid}'`)
                .then(
                    row => {
                        resolve({
                            code: 200,
                            msg: "获取题目列表",
                            result: row
                        })
                    },
                    error => {
                        reject({
                            code: -1,
                            msg: "获取题目列表失败",
                            error
                        })
                    }
                )
        })
    }

    // 删除题目
    topic_remove(tid) {
        return new Promise((resolve, reject) => {
            // 根据text字段查询是否存在重复的名称
            db.query(`select tid from pre_exam_topic where tid = '${tid}'`)
                .then(
                    row => {
                        if (row.length == 0) {
                            resolve({
                                code: 404,
                                msg: `这个ID“${id}”题目不存在`
                            })
                        }
                        else {
                            // 执行删除操作
                            db.query(`delete from pre_exam_topic where tid = '${tid}'`)
                                .then(
                                    content => {
                                        resolve({
                                            code: 200,
                                            msg: `删除该ID“${tid}”题目成功`,
                                            status: content.changedRows === 0 ? '正常' : '异常'
                                        })
                                    }
                                )
                                .catch(
                                    error => {
                                        reject({
                                            code: -1,
                                            msg: `删除该ID“${tid}”题目失败`,
                                            error
                                        })
                                    }
                                )
                        }
                    }
                )

        })
    }

    // 统计指定试卷的题目数量
    topic_num(eid) {
        return new Promise((resolve, reject) => {
            db.query(`select count(*) as total from pre_exam_topic where eid = '${eid}'`)
                .then(
                    content => {
                        resolve({
                            code: 200,
                            msg: "统计题目数量成功",
                            result: content
                        })
                    },
                    err => {
                        reject({
                            code: -1,
                            msg: "统计失败",
                            err
                        })
                    }
                )
        })
    }

    // 获取所有题目（分页）
    topic_items(page_num, page_size) {
        return new Promise((resolve, reject) => {
            db.query('select count(*) as total from pre_exam_topic')
                .then(
                    data => {
                        // console.log({data})
                        return data
                    },
                    err => {
                        reject({
                            code: -1,
                            msg: "统计失败",
                            err
                        })
                    }
                )
                .then(
                    data => {
                        let num = ((parseInt(page_num) - 1) * parseInt(page_size))// 从哪个位置开始获取
                        let size = (parseInt(page_size)) // 获取多少条记录
                        db.query(`select * from pre_exam_topic limit ${num} , ${size}`)
                            .then(
                                rows => {
                                    resolve({
                                        code: 200,
                                        msg: "获取试卷列表成功",
                                        total: data[0] && data[0].total,
                                        result: [...rows]
                                    })
                                },
                                err => {
                                    reject({
                                        code: -1,
                                        msg: "获取试卷列表失败",
                                        err
                                    })
                                }
                            )
                    }
                )
        })
    }

    // ### 成绩
    // pre_exam_score
    exam_score_add(uid, nickName, account, name, score, wrong, right, myanswer, time) {
        return new Promise((resolve, reject) => {
            // 根据text字段查询是否存在重复的名称
            db.query(`select name from pre_exam_score where name = '${name}' and uid = '${uid}'`)
                .then(
                    row => {
                        // 判断该考试成绩是否存在
                        if (row.length == 0) {
                            let date = new Date();
                            let createAt = date.getTime().toString();
                            // 插入数据的sql语句
                            db.query(`insert into pre_exam_score(uid,nickName,account,name,score,wrong,right2,myanswer,time,createAt) values('${uid}','${nickName}','${account}','${name}','${score}','${wrong}','${right}','${myanswer}','${time}','${createAt}')`)
                                .then(
                                    content => {
                                        resolve({
                                            code: 200,
                                            msg: "新增成绩成功",
                                            status: content.changedRows == 0 ? '正常' : '异常'
                                        })
                                    }
                                )
                                .catch(

                                    error => {
                                        console.log(error)
                                        reject({
                                            code: -1,
                                            msg: "新增成绩失败",
                                            error
                                        })
                                    }
                                )
                        }
                        else {
                            resolve({
                                code: 201,
                                msg: `该成绩已存在`
                            })
                        }
                    }
                )
        })
    }

    // 删
    // 删除考试分类名称
    exam_score_remove(sid) {
        return new Promise((resolve, reject) => {
            // 根据text字段查询是否存在重复的名称
            db.query(`select text from pre_exam_score where sid = '${sid}'`)
                .then(
                    row => {
                        if (row.length == 0) {
                            resolve({
                                code: 404,
                                msg: `这个成绩“${id}”不存在`
                            })
                        }
                        else {
                            // 执行删除操作
                            db.query(`delete from pre_exam_score where sid = '${sid}'`)
                                .then(
                                    content => {
                                        resolve({
                                            code: 200,
                                            msg: `删除成绩成功`,
                                            status: content.changedRows === 0 ? '正常' : '异常'
                                        })
                                    }
                                )
                                .catch(
                                    error => {
                                        reject({
                                            code: -1,
                                            msg: `删除成绩失败`,
                                            error
                                        })
                                    }
                                )
                        }
                    }
                )

        })
    }

    // 查
    // 获取考试分类列表
    exam_score_list(uid) {
        return new Promise((resolve, reject) => {
            db.query(`select  * from pre_exam_score where uid = '${uid}'`)
                .then(
                    row => {
                        resolve({
                            code: 200,
                            msg: "获取考试成绩列表",
                            result: row
                        })
                    },
                    error => {
                        reject({
                            code: -1,
                            msg: "获取考试成绩列表失败",
                            error
                        })
                    }
                )
        })
    }

    // 获取考试成绩详情
    exam_score_detail(sid) {
        return new Promise((resolve, reject) => {
            db.query(`select  * from pre_exam_score where sid = '${sid}'`)
                .then(
                    row => {
                        resolve({
                            code: 200,
                            msg: "获取考试成绩详情",
                            result: row
                        })
                    },
                    error => {
                        reject({
                            code: -1,
                            msg: "获取考试成绩详情失败",
                            error
                        })
                    }
                )
        })
    }

    // 获取所有成绩（分页）
    score_items(page_num, page_size) {
        return new Promise((resolve, reject) => {
            db.query('select count(*) as total from pre_exam_score')
                .then(
                    data => {
                        // console.log({data})
                        return data
                    },
                    err => {
                        reject({
                            code: -1,
                            msg: "统计失败",
                            err
                        })
                    }
                )
                .then(
                    data => {
                        let num = ((parseInt(page_num) - 1) * parseInt(page_size))// 从哪个位置开始获取
                        let size = (parseInt(page_size)) // 获取多少条记录
                        db.query(`select * from pre_exam_score limit ${num} , ${size}`)
                            .then(
                                rows => {
                                    resolve({
                                        code: 200,
                                        msg: "获取成绩列表成功",
                                        total: data[0] && data[0].total,
                                        result: [...rows]
                                    })
                                },
                                err => {
                                    reject({
                                        code: -1,
                                        msg: "获取成绩列表失败",
                                        err
                                    })
                                }
                            )
                    }
                )
        })
    }
}

// 导出考试
module.exports = Exam;
