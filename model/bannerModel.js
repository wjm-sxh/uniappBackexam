const db = require('../common/db/index');// index （可省略）

// 定义一个轮播图类
class Banner {
    // 增删改查
    add(imgUrl,href,title){
        return new Promise((resolve,reject)=>{
            db.query(`insert into pre_banner(imgUrl,href,title) values('${imgUrl}','${href}','${title}')`)
            .then(
                content=>{
                    resolve({
                        code: 200,
                        msg: "添加数据成功",
                        status: content.changedRows == 0 ? '成功' : '失败'
                    })
                },
                error=>{
                    reject({
                        code: -1,
                        msg: "程序报错了",
                        error
                    })
                }
            )
        })
    }
    remove(id){
        return new Promise((resolve, reject) => {
            // 根据id字段查询是否存在重复的名称
            db.query(`select imgUrl from pre_banner where id = '${id}'`)
                .then(
                    row => {
                        if (row.length == 0) {
                            resolve({
                                code: 404,
                                msg: `这个轮播图ID“${id}”不存在`
                            })
                        }
                        else {
                            // 执行删除操作
                            db.query(`delete from pre_banner where id = '${id}'`)
                                .then(
                                    content => {
                                        resolve({
                                            code: 200,
                                            msg: `删除该ID“${id}”轮播图成功`,
                                            status: content.changedRows === 0 ? '正常' : '异常'
                                        })
                                    }
                                )
                                .catch(
                                    error => {
                                        reject({
                                            code: -1,
                                            msg: `删除该ID“${id}”轮播图失败`,
                                            error
                                        })
                                    }
                                )
                        }
                    }
                )

        })
    }
    edit(id,imgUrl,href,title){
        return new Promise((resolve, reject) => {
            // 先查询
            db.query(`select imgUrl from pre_banner where id='${id}'`)
                .then(
                    row => {
                        if (row.length == 0) {
                            resolve({
                                code: 404,
                                msg: `这个轮播图ID“${id}”不存在`
                            })
                        }
                        else {
                            // 修改考试分类名称
                            db.query(`update pre_banner set imgUrl= '${imgUrl}', href= '${href}', title= '${title}' where id= '${id}'`)
                                .then(
                                    content => {
                                        resolve({
                                            code: 200,
                                            msg: `修改该ID“${id}”轮播图成功`,
                                            status: content.fieldCount === 0 ? '正常' : '异常'
                                        })
                                    }
                                )
                                .catch(
                                    error => {
                                        reject({
                                            code: -1,
                                            msg: `修改该ID“${id}”轮播图失败`,
                                            error
                                        })
                                    }
                                )
                        }
                    }
                )
        })
    }
    list(){
        return new Promise((resolve, reject) => {
            db.query(`select  * from pre_banner`)
                .then(
                    row => {
                        resolve({
                            code: 200,
                            msg: "获取轮播图列表",
                            result: row
                        })
                    },
                    error => {
                        reject({
                            code: -1,
                            msg: "获取轮播图列表失败",
                            error
                        })
                    }
                )
        })
    }
}


// 把这个类挂在模块系统上
module.exports = Banner

