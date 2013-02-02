
var testUrl = 'http://www.amazon.com/Kid-Galaxy-10473-Robot-Data/dp/B004I8V71Q/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1359787866&sr=1-1&keywords=robot';

var scrape = require('../lib/scrape.js');

exports.test = function (req, res) {
  scrape(testUrl, function (err) {
    res.json({
      err: true
    });
    console.warn(err);
  }, function (price) {
    res.json(price);
  });
};

exports.scrape = function (req, res) {
  scrape(req.body.url, function (err) {
    res.json({
      err: true
    });
    console.warn(err);
  }, function (price) {
    res.json(price);
  });
};
