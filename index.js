// Add all of our code

// npm packages

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

app.set('port', (process.env.PORT || 5000))

app.use(bodyParser.urlencoded({extened: false}))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello Youtube')
})

app.get('/webhook', function(req, res){
  if(req.query['hub.verify_token'] ===]
    'my_voice_is_my_password_verify_me') {
        res.send(req.query['hub.challenge'])
    }
  res.send('No entry')
})

app.listen(app.get('port'), function(){
  console.log('running on port', app.get('port'))
})
