$(function() {
  var handler = StripeCheckout.configure({
    key: 'pk_test_DfWFqx41f7WRUXrMKEXIOYXQ',
    token: function(token) {
      document.body.style.cursor='wait';
      $.get('/pay?email=' + token.email + '&tok=' + token.id + '&amount=500', function(resp) {
        document.body.style.cursor='default';
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
      amount: 500,
      bitcoin: true
    });
    return false;
  });

});
