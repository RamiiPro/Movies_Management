var express    = require("express");
var url = require('url');
var http = require('http');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var path = require('path');
var store = require('data-store')('my-app');
const fs = require('fs');
var qs = require('qs');
var multer = require('multer');
var methodOverride = require('method-override');

var Express = require('express');
var array = require('array');
var app = Express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Database Connection
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "moviebd"
});

app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/assets',express.static('public'));
app.use('/bower_components',express.static('public'));
app.use(express.static(__dirname + '/template/css'));
app.use(express.static(__dirname + '/template/js'));
app.use(express.static(__dirname + '/template/images'));


app.get("/",function(req,res){
  res.sendFile(__dirname+'/index.html');
});

//Rami
app.get("/movies",function(req,res){
  res.sendFile(__dirname+'/template/movie.html');
});
app.get("/add_movie",function(req,res){
  res.sendFile(__dirname+'/template/movieAdd.html');
});
app.get("/update_movie",function(req,res){
  res.sendFile(__dirname+'/template/movieUpdate.html');
});

//----------------------------------------------------------List_movie-------------------------------------------------------------
app.get("/arrayMovies",function(req,res){
connection.query("SELECT * from movie", function(err, rows, fields) {
  if (!err)
  {
    console.log('The solution is: ', rows);
    res.json(rows);
  }
  else
    console.log('Error while performing Query.');
  });
});

//----------------------------------------------------------add_movie-------------------------------------------------------------
 app.post("/add_movie_done", function(req, res) {

	var values = [
    [req.body.titleName,req.body.durationName,req.body.actorName,req.body.directorName]
	];

	var sql = "INSERT INTO movie (title, duration, actor, director) VALUES ?";

    console.log('The solution is: ', res);
	connection.query(sql, [values],function (err, result) {
    if (err) throw err;
    {
    console.log("1 record inserted");
	}
	});
	res.redirect('/movies');
 });
 
//------------------------------------------------------update_movie------------------------------------------------------------------
app.post('/update_movie_done', function(req, res) {
var q = url.parse(req.url, true).query;

  connection.query("UPDATE movie SET  title = ?,duration = ?,actor = ?, director = ? WHERE idMovie =?",[req.body.titleName,req.body.durationName,req.body.actorName,req.body.directorName,req.body.idName],function(err, rows, fields) {

  if (!err)
  {
    console.log('The solution is: ', rows);
    res.redirect('movies');}
  else
    console.log('Error while performing Query.');
  });
});


//-----------------------------------------------------delete_movie-----------------------------------------------------------------
app.get('/delete_movie_done', function(req, res) {
var q = url.parse(req.url, true).query;
var values = [
    [q.id]
  ];
  connection.query('DELETE FROM movie WHERE idMovie = ?',[values], function(err, rows, fields) {
  if (!err)
  {
    console.log('The solution values: ', values);
    res.redirect("movies");
  }
  else
    console.log('Error while performing Query.');
  });
});

app.get("/", function(req, res) {
     res.sendFile(__dirname + "/index.html");
 });


//port listen
app.listen(3000, function() {
  console.log('listening on 3000')
})