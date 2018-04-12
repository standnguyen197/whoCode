const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/ibee', { promiseLibrary: require('bluebird') })
.then(() =>  console.log('Connected!'))
.catch((err) => console.error(err));
// ===================== API ==================== //
const authAPI = require('../api/authLocal/');
const serviceAPI = require('../api/registerService/');
const priceUserAPI = require('../api/priceUser/');
const appSettingsAPI = require('../api/appSettings/');
// ===================== USE API ================== //
app.use('/api/authLocal',authAPI);
app.use('/api/registerService',serviceAPI);
app.use('/api/priceUser',priceUserAPI);
app.use('/api/appSettings', appSettingsAPI);
var Post = require("../models/post");

app.get('/posts', (req, res) => {
  Post.find({}, 'title description', function (error, posts) {
	  if (error) { console.error(error); }
	  res.send({
			posts: posts
		})
	}).sort({_id:-1})
})

app.post('/add_post', (req, res) => {
	var title = req.body.title;
	var description = req.body.description;
	var new_post = new Post({
		title: title,
		description: description
	})

	new_post.save(function (error) {
		if (error) {
			console.log(error)
		}
		res.send({
			success: true
		})
	})
})

app.put('/posts/:id', (req, res) => {

	Post.findById(req.params.id, 'title description', function (error, post) {
	  if (error) { console.error(error); }

	  post.title = req.body.title
	  post.description = req.body.description
	  post.save(function (error) {
			if (error) {
				console.log(error)
			}
			res.send({
				success: true
			})
		})
	})
})

app.delete('/posts/:id', (req, res) => {

	Post.remove({
		_id: req.params.id
	}, function(err, post){
		if (err)
			res.send(err)
		res.send({
			success: true
		})
	})
})

app.get('/post/:id', (req, res) => {

	Post.findById(req.params.id, 'title description', function (error, post) {
	  if (error) { console.error(error); }
	  res.send(post)
	})
})

var port = process.env.PORT || 8081;
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(port);


io.on('connection', function (socket) {
	console.log('Server connected socket');
	socket.emit('customEmit', { hello: 'world' });
});
require('../libSystem/orderProduct/index')(io);