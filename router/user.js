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

/**
 * 目的：为了保证 路由模块 的纯粹性，所有的 路由处理函数 ，必须抽离到对应的 路由处理函数
模块 中
 */
// 导入用户路由处理函数模块
const userHandler = require('../router_handler/user')

// 注册新用户
router.post('/reguser', userHandler.regUser)
// 登录
router.post('/login', userHandler.login)

module.exports = router