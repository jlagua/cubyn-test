
var express = require('express');
var app = express();

// We use mongodb for this test (mLab)
var mongoose = require('mongoose');
var user = "cubyntestuser";
var pwd = "cubyntest1"
mongoose.connect('mongodb://' + user + ':' + pwd + '@ds137643.mlab.com:37643/cubyn_test_db');

var ParcelController = require('./src/parcel/parcelController');
app.use('/parcels', ParcelController);

var port = 8080;

var server = app.listen(port, function() {
    console.log('Server listening on port ' + port);
});