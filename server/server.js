var express = require('express');
var http = require('http');
var morgan = require('morgan');
var app = express();

app.set('port', process.env.PORT || 35002);
app.set('view engine', 'html');
