/*
 * @Author: kenter.zheng 
 * @Date: 2018-04-17 11:53:44 
 * @Last Modified by: kenter.zheng
 * @Last Modified time: 2018-04-17 15:21:45
 */
const express = require('express')
const router = express.Router()

const checkLogin = require('../middlewares/check').checkLogin

// GET /signout 登出
router.get('/', checkLogin, function (req, res, next) {
    console.log('调用了登出')
    // 清空 session 中用户信息
    req.session.user = null
    req.flash('success', '登出成功')
    // 登出成功后跳转到主页
    res.redirect('/posts')
})

module.exports = router