const express = require('express')
// 创建路由对象
const router = express.Router()

// // 注册新用户
// router.post('/reguser', (req, res) => {
//     res.send('reguser OK')
// })

// // 登录
// router.post('/login', (req, res) => {
//     res.send('login OK')
// })

// // 将路由对象共享出去
// module.exports = router

// 导入用户路由处理函数模块
const userHandler = require('../router_handler/user')

// 注册新用户
router.post('/reguser', userHandler.regUser)
// 登录
router.post('/login', userHandler.login)

module.exports = router