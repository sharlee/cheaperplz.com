var childProcess = require('child_process');
var path = require('path');

var phantomjs = require('phantomjs');
var binPath = phantomjs.path;

var scrape = module.exports = function (url, failure, success) {
  var childArgs = [
    path.join(__dirname, 'phantom-script.js'),
    url
  ];

  childProcess.execFile(binPath, childArgs, function (err, stdout, stderr) {
    if (err) {
      failure(stderr);
    }
    try {
      console.info(stdout);
      var json = JSON.parse(stdout);
      success(json);
    } catch (e) {
      failure(e);
    }
  });
};
