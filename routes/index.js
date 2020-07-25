var express = require('express');
const cookieParser = require('cookie-parser');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie('home', 'visitou')
  res.render('index', { title: 'Express' });
});

router.get('/session', function(req, res, next) {
  res.cookie('nome', 'Gabriel')
  res.cookie('session', 'visitou')

  if (!req.cookies.home){
    res.send('Visite a nossa home ' + req.cookies.nome)
  }
  else {
    res.send('Você já visitou nossa home ' + req.cookies.nome)
  }
});

module.exports = router;
