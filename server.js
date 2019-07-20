// packages we used for jSON
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
// the universal port that we use
var port = process.env.PORT || 8080;

// body parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("app/public"));
// routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(port, () => console.log("listening on port", port));
