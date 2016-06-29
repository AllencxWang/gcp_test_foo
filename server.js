var express = require("express"),
    app = express(),
    server = require("http").Server(app),
    bodyParser = require('body-parser'),
    os = require("os"),
    request = require("request");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function(req, res) {
    res.status(200).json({
        method: req.method,
        url: req.url,
        body: req.body,
        query: req.query,
        host: os.hostname()
    });
    
    request.post({
        url: 'http://localhost/test2.php',
        json: {
            
        }
    }, function(error, response, body){
        console.log(body);
    });

});

server.listen(8080, function () {
    console.log("server is running on port 8080");
});