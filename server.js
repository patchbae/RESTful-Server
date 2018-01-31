var express = require('express');	        // include the express library
var app = express();					          // create a server using express
var fs = require("fs");						// include file system module
app.use('/',express.static('public')); // serve static files from /public

app.get('/notepad', function (req, res) {
	res.sendFile('public/notepad.html', {root: __dirname}) //opens an in-browser notepad
})

app.get('/linewalker', function (req, res) {
	res.sendFile('public/linewalker/linewalker.html', {root: __dirname}) //opens a p5 sketch
})

app.get('/surely?', function (req, res) {
	res.redirect("http://www.youtube.com/watch?v=B_XuPXGMpLA&t=0m3s")} //re-directs to a Youtube page
)

app.get('/Jambo', function (req, res) {
	res.send("is Swahili for hello. And also the name of my first dog.")} //re-directs to a Youtube page
)
app.listen(8080);                      // start the server

console.log("Server is running on port 8080.")




/*
Sources:

  Four line static file server by Tom Igoe

  expressjs API | https://expressjs.com/en/4x/api.html#res



*/
