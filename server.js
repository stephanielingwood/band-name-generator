'use strict';

var express = require('express');
var bodyparser = require('body-parser');
var Adjective = require('./lib/adjective');
var getRandomWord = require('./lib/getRandomWord');
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname + '/app/'));

console.log(Adjective);

// make an adjective constructor function
var Adjective = function() {
	this.sleepy = true;
	this.lovely = true;
	this.crazy = true;
	this.penultimate = true;
	this.flakey = true;
	this.superb = true;
}

var Verb = function() {
	this.running = true;
	this.fabricate = true;
	this.coding = true;
	this.moving = true;
	this.plowing = true;
	this.playing = true;
}

var Noun = function() {
	this.cat = true;
	this.dog = true;
	this.spoon = true;
	this.paint = true;
	this.ducky = true;
	this.pants = true;
}

// make an instance of that adjective object
var adjective = new Adjective();
var verb = new Verb();
var noun = new Noun();
// make that word returieval function
function getRandomWord(object) {
	// get all of those properties into an array
	var propArray = Object.keys(object);
	// pick a random word from the array
	var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
	//return that word in an object (so we can send it to the front end)
	return {word: randomProp};
}

function postRandomWord(word, wordObject) {
	//check if the word is on the object
	if (!wordObject.hasOwnProperty(word)) {
		// if it's not on the object, add it and send a message that we added it
		wordObject[word] = true;
		return {message: 'Thanks, we added your swell word, ' + word + ' to our list.'};
	}

	//if it IS on the object, send a polite message saying that we have it
	return {message: 'We already have your word, ' + word + ' in our list.'};

}

app.get('/', function(req, res) {
	res.sendFile('index.html');
});

app.get('/adjective', function(req, res) {
	res.json(getRandomWord(adjective));
});

app.post('/adjective', function(req, res) {
	console.log(req.body);
	res.json(postRandomWord(req.body.word, adjective));
});

app.get('/verb', function(req, res) {
	res.json(getRandomWord(verb));
});

app.get('/noun', function(req, res) {
	res.json(getRandomWord(noun));
});

app.listen(port, function(){
	console.log('server starts on port ' + port);
});



