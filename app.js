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

router.get('/callback', function(req, res) {
   res.send("Hello World!");
});


app.use(router);

app.listen(port, function() {
  console.log("Node server running on http://localhost:3000");
});