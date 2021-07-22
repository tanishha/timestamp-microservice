// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

const morgan = require("morgan");

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({
  optionsSuccessStatus: 200
})); // some legacy browsers choke on 204
// Load third-party middleware
app.use(morgan("dev"));
// Inbuilt middleware for parsing incoming data
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json()); // (for json)
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({
    greeting: 'hello API'
  });
});

const Router = require("./modules/routes");
app.use('/api', Router)

const port = process.env.PORT || 4000;


// listen for requests :)
app.listen(port, function () {
  console.log('Your app is listening on port ' + port);
});