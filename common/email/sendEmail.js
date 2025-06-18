// 导入发送邮件的模块
const nodeemailer = require('nodemailer');
// 导入邮件的配置
const qq = require('./qq');
// 填写发件人邮箱信息
const email = qq.email;
// 填写授权码
const pass = qq.pass;

// 创建一个smtp服务器 // 创建一个smtp客户端对象
const transporter = nodeemailer.createTransport({
    host: "smtp.qq.com", // QQ邮箱的SMTP地址
    // host: "smtp.163.com",                        // 网易邮箱的SMTP地址
    // host: "smtpdm.aliyun.com",// 阿里云的邮件地址
    port: 465,// 每个邮箱的端口号可能是一样的，一般都使用465，但有些公司使用的就不是465
    secureConnection: false, // 是否使用 SSL
    auth: {
        "user": email, // 你自己的邮箱的邮箱地址
        "pass": pass // 授权码（不是邮箱密码）
    }
});

//发送邮件的方法
module.exports.send = (mailOptions) => {
    return new Promise((resolve) => {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return console.log('邮箱：', error);
            }
            resolve(info);
        });
    })
}
