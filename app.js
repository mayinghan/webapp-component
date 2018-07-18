var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app
//config router
  .use('/public/', express.static('./public/'))
  .use('/node_modules/', express.static('./node_modules'))
//config body-parser middleware
  // parse application/x-www-form-urlencoded
  .use(bodyParser.urlencoded({ extended: false }))
  // parse application/json
  .use(bodyParser.json())
/**
.set('views', directory) : express will go to views folder 
to look for html file by default. If the developer wants to 
redirect express to another directory, use 'set' api. 
*/

//using art-template to render the homepage
  //config art-template 
  .engine('html', require('express-art-template')) //all html file cna be rendered by the template
  .set('view options', {
      debug: process.env.NODE_ENV !== 'production'
  })


  .get('/', function (req, res) {
    res.sendFile('/views/index.html', { root: __dirname })
  })
  .get('/post', function (req, res) {
    res.render('post.html')
  })
  //using POST to get the information
  .post('/post', function (req, res) {
    //get the form POST data
    var comment = req.body
    console.log('req.body')

    res.redirect('/')
  })
  .get('/pinglun', function (req, res) {
    var comment = req.query

    res.redirect('/')
  })
  .listen(3000, 'localhost', function() {
    console.log('running...')
  })
