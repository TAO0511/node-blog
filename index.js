const path = require('path')
const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/users', userRouter);

var server = app.listen(3000, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});