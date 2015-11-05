fs = require 'fs'
path = require 'path'
morgan = require 'morgan'
express = require 'express'
bodyParser = require 'body-parser'

app = express()

app.set 'port', process.env.PORT || 27001
app.set 'views', 'views'
app.engine '.html', require('ejs').__express
app.set 'view engine', 'html'

app.use morgan('dev')
app.use express.static(path.join('public'))
app.use bodyParser.json()
app.use bodyParser.urlencoded({extended: true})

app.get '/', (req, res) ->
  res.render 'index', { title: '' }

app.get '/comments.json', (req, res) ->
  fs.readFile 'comments.json', (err, data) ->
    res.setHeader 'Cache-Control', 'no-cache'
    res.json JSON.parse(data)

app.post '/comments.json', (req, res) ->
  fs.readFile 'comments.json', (err, data) ->
    comments = JSON.parse(data)
    comments.push req.body
    fs.writeFile 'comments.json', JSON.stringify(comments, null, 4), (err) ->
      res.setHeader 'Cache-Control', 'no-cache'
      res.json comments

app.listen app.get('port'), () ->
  console.log 'Server started localhost:' + app.get('port')