// 对称加密：就是加密与解密的 秘钥一致，简单的说就是 加密时用到的 密码，与解密时用到的 密码一致
// const bcrypt = require('bcryptjs');
var bcrypt = require('bcryptjs');
module.exports = {
    //加密 
    aesEncrypt(data) {
        // 对明文加密
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(data, salt);
        // 随机字符串
        return hash;
    },
    
    //解密
    aesDecrypt(encrypted, pwd) { 
        /**创建一个解密 */
        // 验证比对,返回布尔值表示验证结果 true表示一致，false表示不一致
        //  return bcrypt.compareSync(encrypted, pwd)
        // Load hash from your password DB.
        return bcrypt.compareSync(encrypted, pwd); // true
    }
}

