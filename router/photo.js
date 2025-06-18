// 创建图片路由
const router = require('express').Router()
// 导入path模块
const path = require('path')
// 导入fs文件系统模块
const fs = require('fs')
// 导入处理图片的模块
const upload = require('../common/uploadFile/index')


// <input type='file' name='photo'>
// 上传图片
// 地址：/api/photo/upload
// 方式：POST
// 参数： photo
// 响应数据格式: json格式
// 示例： http://localhost:4000/api/photo/upload
router.post('/upload', upload.single('photo'), async (req, res) => {
    // 接收前端提交的文件
    let file = req.file;
    // console.log(file);
    // 判断是否缺少值
    if (file == undefined) {
        res.send({
            code: -1,
            msg: '上传文件失败，请检查后再提交'
        })
    }
    else {
        // 定义图片路径 
		// 这个是设置静态资源的URL /static 
		// 这个是在public目录下创建的URL  /imgs 
        // /static/imgs/上传的图片.jpg
        let picUrl = `/static/imgs/${file.filename}`;
        // 反馈图片上传信息
        if (picUrl) {
            res.send({
                code: 200,
                msg: '上传图片成功。',
                picUrl,
            });
        }
        else {
            res.send({
                code: -1,
                msg: '上传图片失败。'
            });
        }
    }
})


// 删除图片
// 地址：/api/photo/delete
// 方式：POST
// 参数：photo
// 响应数据格式: json格式
// 示例： http://localhost:4000/api/photo/delete
router.post('/delete', async (req, res) => {
    // 相对地址 http://
    let picUrl = req.body.picUrl;
    // 文件夹名称
    let dirName = req.body.dirName || 'imgs';
    // 判断前端是否提交了路径
    if(picUrl == undefined){
        res.send({ 
            code: -1, 
            msg: '缺少参数' 
        })
    }
    else {
         //通过slice方法，分割出图片前面的url地址
        //  http://localhost:4000/static/imgs/photo-20241009-1728459979596.jpeg
        let index = picUrl.indexOf(dirName);
        // 判断该图片路径是否存在
        if (index > -1) {
            // 拼接图片路径 (查找图片)
            // /imgs/photo-20241009-1728459979596.jpeg
            let temp_path = path.join(__dirname, '../public/', picUrl.slice(index));
            // fs.unlink 删除文件
            fs.unlink(temp_path, (err) => {
                // err 如果为null 就删除图片成功 ； 否则删除失败
                if (err) {
                    res.send({ 
                        code: -1, 
                        msg: '删除图片失败' 
                    })
                }
                else {
                    //删除图片文件成功
                    res.send({ 
                        code: 200, 
                        msg: '删除图片成功' 
                    })
                }
            })
        }
        else {
            res.send({ 
                code: 404, 
                msg: '该路径找不到图片资源。' 
            })
        }
    }
})


// 把图片路由挂在系统对象上
module.exports = router;