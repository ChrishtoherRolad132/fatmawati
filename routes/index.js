var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

function renderHtml(url, file) {
  router.get(url, function (req, res) {
    res.sendFile(file, ({
      root: 'public'
    }));
  });
};

renderHtml('/kodeAkun', 'code_account.html');
renderHtml('/labaRugi', 'jurnal_labaRugi.html');
renderHtml('/dataPinjaman', 'data_pinjaman.html');
renderHtml('/dataSimpanan', 'data_simpanan.html');
renderHtml('/jurnalHarian', 'jurnal_harian.html');
renderHtml('/jurnalUmum', 'jurnal_umum.html');
renderHtml('/bukuBesar', 'jurnal_bukuBesar.html');
renderHtml('/neracaSaldo', 'jurnal_neracaSaldo.html');

module.exports = router;