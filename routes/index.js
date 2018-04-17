/*
 * @Author: kenter.zheng 
 * @Date: 2018-04-17 11:47:16 
 * @Last Modified by:   kenter.zheng 
 * @Last Modified time: 2018-04-17 11:47:16 
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
}