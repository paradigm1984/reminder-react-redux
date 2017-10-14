"use strict";

// packages
var express = require("express");
var path = require('path');


var app = express();

app.use(express.static("server"));

const port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log('App running on port ' + port);
});
