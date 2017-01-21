var COST = 500;

$(function() {
  var handler = StripeCheckout.configure({
    key: 'pk_test_DfWFqx41f7WRUXrMKEXIOYXQ',
    token: function(token) {
      document.body.style.cursor = 'wait';
      $.get('/pay?email=' + token.email + '&tok=' + token.id + '&amount=' + COST , function(resp) {
        document.body.style.cursor = 'default';
        if (resp === 'ok') {
          alert('Thanks!');
        } else {
          alert('Uh oh, something went wrong.  Your card was not charged.');
        }
      });
    },
  });

  $('#btn-order-now').on('click', function() {
    handler.open({
      name: 'Startup Fortune Cookies',
      description: '20 wisdom-filled cookies',
      amount: COST,
      bitcoin: true
    });
    return false;
  });

});
