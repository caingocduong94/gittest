var request = require('request');
var cheerio = require('cheerio');

var url = 'http://vnexpress.net/';

request(url, function (err, respone, body){
    if(!err && respone.statusCode == 200){
       var $ = cheerio.load(body);
       console.log($('.block_col_top_left div.news_lead').text());
       
    }
}) 