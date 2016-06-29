var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    bodyParser = require('body-parser'),
    os = require('os'),
    request = require('request');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function(req, res) {
    var data = {
        method: req.method,
        url: req.url,
        body: req.body,
        query: req.query
    };

    res.status(200).json(data);
    
    request.post({
        url: 'http://104.199.138.139:8080/instances/'+os.hostname+'/logs',
        json: data
    }, function(error, response, body){
        //console.log(body);
    });

});

server.listen(8080, function () {
    console.log('server is running on port 8080');
});