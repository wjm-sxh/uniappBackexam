// require()  导入/加载
// 导包
const express = require('express')
// 创建程序
const app = express()
// 导入body-parser
const bodyParser = require('body-parser')
// 导入路径模块
const path = require('path')
// 导入cors包
const cors = require('cors')
//express缓存
const session = require('express-session')
// 设置资源跨域共享
app.use(cors())


// 配置缓存有效期
app.use(session({
  secret: 'test',
  name: 'name',
  cookie: {
    maxAge: 60000
  },
  resave: false,
  saveUninitialized: true,
}))



// app.use(cors({
//     origin: 'https://example.com', // 只允许来自example.com的跨域请求
//     methods: ['GET', 'POST'], // 允许的HTTP请求方法
//     allowedHeaders: ['Content-Type', 'Authorization'], // 允许的HTTP请求头
//     exposedHeaders: ['Content-Length', 'X-My-Header'] // 允许的HTTP响应头
// }))


// 解析post请求
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// 测试
// req: 请求对象  request
// res: 响应对象  response 
// 访问地址：http://127.0.0.1:4000/
app.get('/', (req,res)=> {
    // 响应数据
    res.send('http://127.0.0.1:4000 服务创建成功！')
})

// 访问地址：http://127.0.0.1:4000/test (不允许跨域访问)
app.get('/test', (req,res)=> {
    // 响应数据
    res.send({
        code: 200,
        msg: "测试成功",
        data:  [
            {text: "前端",id:1},
            {text: "后端",id:2},
            {text: "嵌入式",id:3}
        ]
    });
})

// 访问地址: http://127.0.0.1:4000/list (允许跨域访问)
app.get('/list', (req,res)=> {
    // 设置该请求为允许跨域（设置请求头信息）
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.setHeader('Access-Control-Allow-Metheds', 'PUT, POST, GET, DELETE, OPTIONS')
      // 响应数据
      res.send({
        code: 200,
        msg: "测试成功",
        data: [1,2,3,4,5,6]
    });
})

// 路由分发请求
// 考试路由模块
app.use('/api/exam', require('./router/exam'))
// 邮件路由模块
app.use('/api/email', require('./router/email'))
// 用户路由模块
app.use('/api/user', require('./router/user'))
// 图片路由模块
app.use('/api/photo', require('./router/photo'))
// 验证码路由模块
app.use('/api/verify', require('./router/verify'))
// 面试题路由模块
app.use('/api/interview', require('./router/interview'))
// 轮播图路由模块
app.use('/api/banner', require('./router/banner'))



// 设置静态资源
// __dirname 代表是这个路径：E:\stu\GZH52429\Nodejs2024\www\exam_end
// 访问地址: http://127.0.0.1:4000/images/1.jpg
// app.use(express.static(path.resolve(__dirname,'public')))

// 访问地址: http://127.0.0.1:4000/static/images/1.jpg
app.use('/static',express.static(path.resolve(__dirname,'public')))

// 不带 '/static'
// 访问管理系统： http://localhost:4000/admin/index.html
// 访问管理系统： http://localhost:4000/admin
// 访问客户端： http://localhost:4000/web/index.html
// 访问客户端： http://localhost:4000/web
app.use(express.static(path.resolve(__dirname,'www')))

// 设置端口（web服务的端口）
const PORT = 4000
app.listen(PORT, ()=> {
    console.log("http服务启动了.");
    // console.log("可以地址:")
    console.log("http://127.0.0.1:"+PORT)
    console.log("http://localhost:"+PORT)
    // console.log("http://192.168.33.1:"+PORT)
})
