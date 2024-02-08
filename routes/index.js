var express = require('express');
var session = require('express-session');
var router = express.Router();
var uudi = require('uuid');

// Setup express-session middleware
router.use(session({
  secret: uudi.v4,
  resave: false,
  saveUninitialized: true
}));

router.get('/login', (req, res) => {
  res.sendFile('login.html', ({
    root: 'public'
  }));
});

// Define checkAuthentication middleware
function checkAuthentication(req, res, next) {
  if (req.session && req.session.user) {
    // Jika pengguna sudah login, lanjutkan ke rute berikutnya
    return next();
  } else {
    // Jika pengguna belum login, redirect ke halaman login
    return res.redirect('/login');
  }
}

// Define renderHtml function
function renderHtml(url, file) {
  router.get(url, checkAuthentication, function (req, res) {
    res.sendFile(file, {
      root: 'public'
    });
  });
};

// Setup routes
renderHtml('/', 'index.html');
renderHtml('/kodeAkun', 'code_account.html');
renderHtml('/labaRugi', 'jurnal_labaRugi.html');
renderHtml('/dataPinjaman', 'data_pinjaman.html');
renderHtml('/dataSimpanan', 'data_simpanan.html');
renderHtml('/jurnalHarian', 'jurnal_harian.html');
renderHtml('/jurnalUmum', 'jurnal_umum.html');
renderHtml('/bukuBesar', 'jurnal_bukuBesar.html');
renderHtml('/neracaSaldo', 'jurnal_neracaSaldo.html');

module.exports = router;