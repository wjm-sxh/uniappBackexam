// 创建路由 (这个路由可以分发请求)
const router = require('express').Router();

// 导入操作邮件的API
const api = require('../common/email/index');

// 发送邮件
// 地址：/api/email/send
// 方式：GET
// 参数： email
// 响应式数据格式: json格式
// 示例地址： http://localhost:4000/api/email/send?email=3212214220@qq.com
router.get('/send', async (req, res) => {
    // 获取用户邮箱
    let { email } = req.query;
    // 判断用户是否提交了邮箱
    if (email) {
        if (/^\w{4,}@qq.com$/.test(email)) {
            // 调用api发送邮件
            api.getEmailCode(email)
                .then(
                    content => {
                        // 把发送状态告诉用户
                        res.send(content);
                    },
                    error => {
                        // 把发送状态告诉用户 (失败)
                        res.send(error);
                    }
                )
        }
        else {
            res.send({
                code: -1,
                msg: "请填写正确格式的qq邮箱~~"
            })
        }
    }
    else {
        res.send({
            code: -1,
            msg: "请提交邮箱~~"
        })
    }
})

// 校验邮件 (辨别是否为真实用户)
// 地址：/api/email/verify
// 方式：GET
// 参数： email
// 响应式数据格式: json格式
// 示例地址： http://localhost:4000/api/email/verify?email=3212214220@qq.com&vcode=088431
router.get('/verify', async (req, res) => {
    // 获取用户邮箱
    let { email, vcode } = req.query;
    // 判断用户是否提交了邮箱
    if (email) {
        if (/^\w{4,}@qq.com$/.test(email)) {
            // 调用api校验邮箱验证码
            api.verifyEmailCode(email, vcode)
                .then(
                    content => {
                        // 把校验的结果告诉用户
                        res.send(content);
                        // 是否删除验证码
                        if(content.code == 200) {
                            // 删除验证码
                            api.removeEmailCode(email);
                        }
                    },
                    error => {
                        // 把校验的结果告诉用户 (失败)
                        res.send(error);
                    }
                )
        }
        else {
            res.send({
                code: -1,
                msg: "请填写正确格式的qq邮箱~~"
            })
        }
    }
    else {
        res.send({
            code: -1,
            msg: "请提交邮箱~~"
        })
    }
})


// 把这个路由挂在模块系统对象下
module.exports = router;