var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

var port = process.env.PORT || 8080;
	
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {
   res.send("Hello World!");
});

router.post('/callback', function(req, res) {
   
   console.log(req);
   res.send(req.body.challenge);
});


app.use(router);

app.listen(port, function() {
   //var port = server.address().port;
    console.log("App now running on port", 8080);
});