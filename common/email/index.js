// 导入发送邮件的方法
const sendEmail = require('./sendEmail');
// 导入邮件的配置
const qq = require('./qq');
// 导入已封装的数据函数
const db = require('../db');
const PROJECT_NAME = qq.name;
const FROM_EMAIL = qq.email;
// 把验证码储存在数据库
class Email {
    static delay = null;
    // 发送邮件 client_email: 用户邮箱
    static getEmailCode(client_email) {
        // 返回发送验证码的promise
        return new Promise((resolve, reject) => {
            // 生成验证码
            let vcode = Math.random().toString().slice(-6);//六位随机数
            //随机生成6位数字
            let email = {
                title: `${PROJECT_NAME}---邮箱验证码`,
                body: `
                    <h1>您好：</h1>
                    <p style="font-size: 18px;color:#000;">
                    您的验证码为：
                    <span style="font-size: 16px;color:#f00;"><b>${vcode}</b>,</span>
                    <p>您当前正在${PROJECT_NAME}账号，验证码告知他人将会导致数据信息被盗，请勿泄露!</p>
                    </p>
                    <p style="font-size: 1.5rem;color:#999;">60秒内有效</p>
                `
            }
            //定义对象记录发送的邮件信息
            let emailCotent = {
                from: FROM_EMAIL, // 发件人地址
                to: `${client_email}`, // 收件人地址，多个收件人可以使用逗号分隔
                subject: email.title, // 邮件标题
                html: email.body // 邮件内容
            }
            // 做多一层判断，判断是否重复发送验证码
            db.query(`select * from pre_email where email ='${client_email}'`)
                .then(
                    async (rows) => {
                        if (rows.length >= 1) {
                            resolve({
                                code: 1,
                                msg: '已发送验证码,请勿重复发送。60秒后重新发送。'
                            })
                        }
                        else {
                            // 发送邮件
                            await sendEmail.send(emailCotent);
                            // 把验证码储存数据库
                            Email.writeEmailCode(client_email, vcode)
                                .then(
                                    // 发送成功
                                    () => {
                                        if (Email.delay != null) {
                                            clearTimeout(Email.delay);
                                            resolve({
                                                code: 1,
                                                msg: '请60秒后重新发送验证码。'
                                            });
                                        }
                                        else {
                                            resolve({
                                                code: 200,
                                                msg: '发送验证码成功,请注意60秒后验证码过期'
                                            });
                                        }

                                        // 60秒之后删除验证码
                                        Email.delay = setTimeout(() => {
                                            // 删除邮箱验证码（从数据表中删除）
                                            Email.removeEmailCode(client_email);
                                            // 清除延迟函数
                                            clearTimeout(Email.delay);
                                            // 重置属性
                                            Email.delay = null;
                                        }, 60 * 1000)
                                    },
                                    err => {
                                        reject({
                                            code: -1,
                                            msg: '发送邮箱验证发生异常1。',
                                            err 
                                        })
                                    }
                                )
                        }
                    },
                    err => {
                        reject({
                            code: -1,
                            msg: '服务端发生异常2。',
                            err
                        })
                    }
                )
        })
    }
    
    // 添加验证码 (把验证码存储在数据库)
    static async writeEmailCode(client_email, vcode) {
        return new Promise((resolve, reject) => {
            // 执行插入数据的sql语句
            db.query(`insert into pre_email(email,vcode) values('${client_email}','${vcode}')`)
                .then(
                    () => {
                        resolve({
                            code: 200,
                            msg: '添加验证码成功。'
                        })
                    }
                )
                .catch(
                    err => {
                        reject({
                            code: -1,
                            msg: '添加验证码失败。',
                            err
                        })
                    }
                )
        })
    }

    // 删除验证码
    static async removeEmailCode(client_email) {
        return new Promise((resolve) => {
            // 执行删除数据的sql语句
            db.query(`delete from pre_email where email = '${client_email}'`)
                .then(
                    () => {
                        resolve({
                            code: 200,
                            msg: '删除验证码成功。'
                        })
                    }
                )
                .catch(
                    err => {
                        resolve({
                            code: -1,
                            msg: '删除验证码失败。',
                            err
                        })
                    }

                )
        })
    }

    // 校验邮件验证码
    static async verifyEmailCode(client_email, vcode) {
        // 判断邮箱和验证码是否匹配
        return new Promise((resolve, reject) => {
            // 执行查询数据的sql语句
            db.query(`select * from pre_email where email = '${client_email}' and vcode='${vcode}'`)
                .then(
                    rows => {
                        if (rows.length === 1) {
                            resolve({
                                code: 200,
                                msg: '邮箱验证成功。'
                            })
                        }
                        else {
                            resolve({
                                code: -1,
                                msg: '邮箱验证失败，请重新发送验证码。'
                            })
                        }
                    },
                    err => {
                        reject({
                            code: 500,
                            msg: '邮箱验证失败，服务端异常。',
                            err
                        })
                    }
                )
        })
    }
}
module.exports = Email;