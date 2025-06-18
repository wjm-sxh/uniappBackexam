const router = require('express').Router();
const Banner = require('../model/bannerModel');
const bannerModel = new Banner();

// 路由分发请求
// 添加
// 地址：/api/banner/add
// 方式: POST
// 参数 imgUrl,href,title
// 示例：http://localhost:4000/api/banner/add
// 响应数据格式： json
router.post('/add', async (req,res)=> {
    // 解构赋值
    let {imgUrl,href,title} = req.body;
    if(imgUrl && href && title){
        // 传递参数
        await bannerModel.add(imgUrl,href,title)
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


// 删除
// 地址：/api/banner/remove
// 方式: POST
// 参数： id
// 示例：http://localhost:4000/api/banner/remove
// 响应数据格式： json
router.post('/remove', async (req,res)=> {
    // 解构赋值
    let {id} = req.body;
    if(id){
        // 传递参数
        await  bannerModel.remove(id)
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



// 修改
// 地址：/api/banner/edit
// 方式: POST
// 参数：id,imgUrl,href,title
// 示例：http://localhost:4000/api/banner/edit
// 响应数据格式： json
router.post('/edit', async (req,res)=> {
    let {id,imgUrl,href,title} = req.body;
    if(id && imgUrl && href && title){
        // 传递参数
        await bannerModel.edit(id,imgUrl,href,title)
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


// 列表
// 地址：/api/banner/list
// 方式: GET
// 参数：无
// 示例：http://localhost:4000/api/banner/list
// 响应数据格式： json
router.get('/list', async (req,res)=> {
    await bannerModel.list()
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



module.exports = router;