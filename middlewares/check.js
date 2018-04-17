/*
 * @Author: kenter.zheng 
 * @Date: 2018-04-17 11:42:20 
 * @Last Modified by: kenter.zheng
 * @Last Modified time: 2018-04-17 15:31:48
 */
module.exports = {
    checkLogin: (req, res, next) => {
        console.log('checkLogin');
        if (!req.session.user) {
            req.flash('error', '未登录');
            return res.redirect('/signin')
        }
        next()
    },
    checkNotLogin: function checkNotLogin(req, res, next) {
        console.log('checkNotLogin');
        if (req.session.user) {
            req.flash('error', '已登录')
            return res.redirect('back') // 返回之前的页面
        }
        next()
    }
}