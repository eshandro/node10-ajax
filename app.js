var express = require('express');
var bodyParser = require('body-parser');
var countries = require('./models/countries.json')

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/countries', function(req, res) {
	res.send(countries);
})

app.post('/countries', function(req, res) {
	var updateCountry = req.body.updateCountry;
	res.send('Success');
	for(var i = 0; i < countries.length; i++) {
		if(countries[i].name === updateCountry) {
			countries[i].hasTraveled = true;
			// console.log(countries[i])
			return;
		}	
	}
});

app.post('/search', function(req, res) {
	var searchCountry = req.body.searchCountry;
	var countryInfo = countries.filter(function(country) {
		return country.name === searchCountry
	})
	res.send(countryInfo)
})

var server = app.listen(5169, function() {
	console.log('Express server listening on port ' + server.address().port);
});
