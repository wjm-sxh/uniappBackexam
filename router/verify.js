const router = require('express').Router();
//在node.js中生成svg验证码
const svgCaptcha = require('svg-captcha');

// 获取验证码
// 地址: /api/verify/captcha
// 方式：GET
// 参数： 无
// 响应数据：svg格式
// 示例：http://localhost:4000/api/verify/captcha
let arr = [];
router.get('/captcha', function (req, res) {
    var captcha = svgCaptcha.create();//创建svg验证码
    req.session.captcha = captcha.text;//将验证码文本存进session
    text = captcha.text;
    arr.push(text)
    res.type('svg').send(captcha.data);
})

// 测试验证码
// 地址: /test
// 方式：GET
// 参数： 无
// 示例：http://localhost:4000/api/verify/test
router.get('/test', function (req, res) {
    if(req.query.captcha){
        // console.log( "系统验证码1:",text )
        // console.log( "系统验证码2:",req.session.captcha );// 要求协议、域名、端口一致方可用
        // console.log( "前端提交的验证码:",req.query.captcha )
        let index;
       
        let newArr = arr.filter((text,i) => {
            let v1 = text.toUpperCase();
            // 不管前端验证码 是大小字母，还是小写字母， 传递过来都转大写字母做比较
            let v2 = req.query.captcha.toUpperCase();
            if(v1 == v2){
                index = i;
                return text;
            }
        })
        if(newArr.length == 1) {
            res.send({
                code: 200,
                msg: "验证通过"
            })
            arr.splice(index,1);
        }
        else {
            res.send({
                code: -1,
                msg: "验证码错误"
            })
        }
    }
    else {
        res.send({
            code: -1,
            msg: "缺少验证码"
        })
    }
    // res.send(req.session)
})

// 暴露当前路由
module.exports = router;