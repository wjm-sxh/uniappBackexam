// 导入上传图片的包  定义上传图片的信息（图片名称，目录）
const multer = require('multer');
const path = require('path')
// 通过 filename 属性定制
const storage = multer.diskStorage({
    // 保存的路径
    // 备注：目录需要自己创建
    destination: function (req, file, callback) {
        callback(null, path.resolve(__dirname,'../../public/imgs'));
    },
    filename: function (req, file, callback) {
        // 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
        let originalname = file.originalname;
        let lastIndex = originalname.lastIndexOf('.')+1;
        let suffix = originalname.slice(lastIndex) || file.mimetype.split('/')[1]; //获取文件格式
        // console.log('---->',file)
        // console.log('---->',suffix)
        let dt = new Date();
        let yy = dt.getFullYear();
        let mm = dt.getMonth() + 1;
        let dd = dt.getDate();
        mm = mm < 10 ? '0'+mm: mm;
        dd = dd < 10 ? '0'+dd: dd;
        let str = `${yy}${mm}${dd}`
        callback(null, file.fieldname+'-'+str+ '-' + Date.now() + '.' + suffix);
    }
});
//生成的图片放入uploads文件夹下
const upload = multer({ storage: storage });
// 导出处理图片的方法
module.exports = upload
