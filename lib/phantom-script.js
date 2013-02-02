var system = require('system');
if (system.args.length === 1) {
  console.log({
    error: 'bad args'
  });
  phantom.exit();
} else {
  var url = system.args[1];
}

var page = require('webpage').create();

page.open(url, function (status) {

  var name = page.evaluate(function () {
    return document.getElementsByClassName('parseasinTitle')[0].textContent;
  });
  name = name.trim();

  var price = page.evaluate(function () {
    return document.getElementsByClassName('priceLarge')[0].textContent;
  });
  console.log(JSON.stringify({
    name: name,
    price: price
  }));
  phantom.exit();
});
