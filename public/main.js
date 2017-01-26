var COST1 = 2000;
var COST2 = 6800;
var COST3 = 12700;

var COOKIE_TEXTS = [
  'Your revenue will increase by 30%',
  'Be on the lookout for potential acquirers',
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
          amount: COST1
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

  $('#btn-order-now1').on('click', function() {
    handler.open({
      name: 'Startup Fortune Cookies',
      description: '35 wisdom-filled cookies',
      amount: COST1,
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
    }, 2500);
  }
  changeTextTo(0);
});

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
          amount: COST2
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

  $('#btn-order-now2').on('click', function() {
    handler.open({
      name: 'Startup Fortune Cookies',
      description: '100 wisdom-filled cookies',
      amount: COST2,
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
    }, 2500);
  }
  changeTextTo(0);
});

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
          amount: COST3
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

  $('#btn-order-now3').on('click', function() {
    handler.open({
      name: 'Startup Fortune Cookies',
      description: '400 wisdom-filled cookies',
      amount: COST3,
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
    }, 2500);
  }
  changeTextTo(0);
});
