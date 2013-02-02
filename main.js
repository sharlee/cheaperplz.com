var childProcess = require('child_process');
var phantomjs = require('phantomjs');
var binPath = phantomjs.path;

var path = require('path');

var childArgs = [
  path.join(__dirname, 'phantom-script.js')
];

childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
  // handle results
  console.log(err, stdout, stderr);
});
