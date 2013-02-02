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

  page.injectJs('./definitions.js');
  var item = page.evaluate(function () {
    return getDefinition(document);
  });
  console.log(JSON.stringify(item));
  phantom.exit();
});
