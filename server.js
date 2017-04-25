var express = require('express')
var moment = require('moment')
var app = express()
var natural
var unix

app.get('/',function(req,res) {
    res.send('Timestamp Microservice: Pass a parameter. If it contains a unix or natural date, the app will return formatted date information. Example: https://fcc-timestamp-cariberg.c9users.io/December 1 2012')
})

app.get('/:timestamp', function (req, res) {
    var raw = req.params.timestamp
    var realDate = Date.parse(raw.match(/[a-zA-Z]+|[0-9]+/g).join(" "))
    var uniStart = raw.search(/\d/)
    var uniInt = parseInt(raw.substr(uniStart,raw.length))
    console.log(uniInt)
    if (!isNaN(realDate)) {
        natural = moment.utc(realDate).format('MMM D YYYY')
        unix = moment.utc(realDate).format('x')
    }
    else if (!isNaN(uniInt)) {
        natural = moment.unix(uniInt).format('MMM D YYYY')
        unix = moment.unix(uniInt).format('x')
    }
    else {
        natural = null
        unix = null
    }
  res.send('{natural: ' + natural + ', unix: ' + unix + '}')
})

app.listen(8080, function () {
})