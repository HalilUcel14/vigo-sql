const express = require('express');
const session = require('express-session');
const env = require('node:process');
const bodyParser = require('body-parser');
const path = require('path');
//



// Env Kullanım
env.PORT = 14193;

const app = express();

// Body parser Kullanımı
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());
// Session middleware
app.use(session({
    secret: 'my-secret-key', // Buraya güvenli bir anahtar girin
    resave: false,
    saveUninitialized: true
}));
// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

//
//
const sessionChecker = (req, res, next) => {
    // Oturum kontrolü
    if (!req.session.username && req.url !== '/login') { // "/login" yolunu kontrol et
        // Oturumda kullanıcı adı yoksa ve "/login" yolunda değilse, "/login" sayfasına yönlendir
        return res.redirect('/login');
    } else {
        // Oturumda kullanıcı adı varsa veya "/login" yolunda ise, bir sonraki middleware'e devam et
        next();
    }
};

// Middleware'i kullanarak her route'a uygula
app.use(sessionChecker);
//
//
const mainRoute = require('../source/router/main.js');
const loginRoute = require('../source/router/login.js');
const homeRoute = require('../source/router/home.js');
const refKodHataRoute = require('../source/router/rapor/ref_kod_hata.js');
//
//
// Route Kullanımları
app.use('/',mainRoute);
//
app.use('/login',loginRoute);
//
app.use('/home',homeRoute);
//
app.use('/rapor/referanskodhata',refKodHataRoute);
//
//app.use('/rapor',raporRoute);
//
//
//

const PORT = env.PORT || 14194;

app.listen(PORT,()=> {
    console.log('Server is running on port ${PORT}',PORT);
});