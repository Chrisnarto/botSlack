var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');
	
var Request = require("request");

var port = process.env.PORT || 8080;
	
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {
   res.send("Hello World!");
});

router.post('/callback', function(req, res) {
   let requestBody = req.body;
   
   if(requestBody.event.type == "app_mention"){
	   Request.post({
			"headers": {"Authorization":"Bearer xoxb-436617174097-439023760183-45CCU7QEV29LQTjDhrWTRCI0","content-type": "application/json" },
			"url": "https://slack.com/api/chat.postMessage",
			"body": JSON.stringify({
				"text": "Hola <@"+requestBody.event.user+">",
				"channel": requestBody.event.channel
			})
		}, (error, response, body) => {
			if(error) {
				console.log(error);
			}
			console.log(JSON.parse(body));
		});
   }
   
   res.send("OK");
});


app.use(router);

app.listen(port, function() {
   //var port = server.address().port;
    console.log("App now running on port", 8080);
});