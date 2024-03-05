exports.getLogin = (req, res) => {
    res.render('auth/login'); // login.ejs dosyasını render eder
  };
  
  exports.postLogin = (req, res) => {
    const { username, password } = req.body;
    // Basit bir kullanıcı adı ve şifre kontrolü
    if (username === 'admin' && password === '123456') {
        req.session.username = username; // Oturum bilgilerini ayarla
        res.redirect('/home'); // Giriş başarılıysa /home sayfasına yönlendir
    } 
    // else {
    //     // Kullanıcı adı veya şifre yanlış ise tekrar login sayfasına yönlendir
    //     res.redirect('/login');
    // }
  };

