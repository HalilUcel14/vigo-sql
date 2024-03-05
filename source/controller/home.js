const userList = require('../database/user.js');

exports.get = (req,res) => {
    const user = req.session.username ? {username: req.session.username}:null;
    res.render('home/home',{user});
};  

exports.post = (req,res) => {
    // const {username, password} = req.body;

    // const user = userList.find(user => user.username === username && user.password === password);

    // if(user) {
    //     //
    //     res.redirect('/Anasayfa');
    // }else {
    //     res.render('auth/login', {errorMessage: 'Kullanıcı Adı veya Şifre yanlış!'})
    // }
};



