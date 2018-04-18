/*
 * @Author: kenter.zheng 
 * @Date: 2018-04-17 11:47:16 
 * @Last Modified by: kenter.zheng
 * @Last Modified time: 2018-04-18 11:38:01
 */
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.redirect('/posts')
    })
    app.use('/signup', require('./signup'))
    app.use('/signin', require('./signin'))
    app.use('/signout', require('./signout'))
    app.use('/posts', require('./posts'))
    app.use('/comments', require('./comments'))
    app.use(function (req, res) {
        if (!res.headersSent) {
            res.status(404).render('404')
        }
    })
    app.use(function (err, req, res, next) {
        console.error(err)
        req.flash('error', err.message)
        res.redirect('/posts')
    })
}