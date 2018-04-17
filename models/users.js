/*
 * @Author: kenter.zheng 
 * @Date: 2018-04-17 14:17:09 
 * @Last Modified by: kenter.zheng
 * @Last Modified time: 2018-04-17 14:49:54
 */
const User = require('../lib/mongo').User

module.exports = {
  // 注册一个用户
  create: function create (user) {
    return User.create(user).exec()
  },
  
  // 通过用户名获取用户信息
  getUserByName: function getUserByName (name) {
    return User
      .findOne({ name: name })
      .addCreatedAt()
      .exec()
  }
}