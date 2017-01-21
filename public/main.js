var COST = 500;
var COOKIE_TEXTS = [
  'Your revenue<br>will increase by 30%',
  'Be on the lookout<br>for potential acquirers'
];

$(function() {
  var handler = StripeCheckout.configure({
    key: 'pk_test_DfWFqx41f7WRUXrMKEXIOYXQ',
    token: function(token) {
      document.body.style.cursor = 'wait';
      $.ajax({
        type: 'POST',
        url: '/pay',
        data: JSON.stringify({
          email: token.email,
          tok: token.id,
          amount: COST
        }),
        contentType: 'application/json',
        dataType: 'json'
      }).then(function(resp) {
        document.body.style.cursor = 'default';
        if (resp === 'ok') {
          alert('Thanks!');
        } else {
          alert('Uh oh, something went wrong.  Your card was not charged.');
        }
      });
    }
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

  var $text = $('#cookie-text');
  function changeTextTo(idx) {
    $text.fadeOut(400, function() {
      $text.html(COOKIE_TEXTS[idx]).fadeIn();
    })
    idx++;
    if (idx === COOKIE_TEXTS.length) {
      idx = 0;
    }
    setTimeout(function() {
      changeTextTo(idx);
    }, 4000);
  }
  changeTextTo(0);
});
