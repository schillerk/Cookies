var express = require('express');
var fs = require('fs');
var app = express();

var stripe = require('stripe')(
  require('./config.js').STRIPE_SK
);

app.use(express.static('public'));

app.get('/', function(req, res) {
  serveFile('index.html', res);
});

app.post('/pay', function (req, res) {
  console.log('Received pay', req.params);
  stripe.charges.create({
    amount: req.params.amount,
    currency: 'usd',
    source: req.params.tok,
    description: 'Charge for startup cookies - ' + req.params.email,
  }, function(err, charge) {
    if (err) {
      console.log(err, charge);
      res.send('error');
      return;
    }
    res.send('ok');
  });
});

function serveFile(path, res) {
  fs.readFile(path, function (err, data){
    res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
    res.write(data);
    res.end();
  });
}

var server = app.listen(4111, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
