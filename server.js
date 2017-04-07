var express = require('express')
var moment = require('moment')
var app = express()
var natural
var unix

app.get('/',function(req,res) {
    res.send('Timestamp Microservice:' + '\n' 
    + 'Pass a parameter. If it contains a unix or natural date, the app will return formatted date information.' + '\n'
    + 'Example: https://fcc-timestamp-cariberg.c9users.io/December 1 2012')
})

app.get('/:timestamp', function (req, res) {
    var raw = req.params.timestamp
    if (moment(raw).isValid) {
        natural = moment(raw).format('MMM D YYYY')
        unix = moment(raw).format('x')
    }
    /*else if(moment.unix(parseInt(raw)).isValid) {
        natural = moment.unix(parseInt(raw)).format('MMM D YYYY')
        unix = moment.unix(parseInt(raw)).format('x')
    }*/
    else {
        natural = null
        unix = null
    }
  res.send('{natural: ' + natural + ', unix: ' + unix + '}')
})

app.listen(8080, function () {
})