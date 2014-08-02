var express = require('express');
var bodyParser = require('body-parser');
var countriesList = require('./models/countries.json');
var mongoose = require('mongoose');
var model = require('./models/models.js');
var controller = require('./controllers/controller.js')

mongoose.connect('mongodb://localhost/visitedCountries');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/countries', function(req, res) {
/*	model.Country.remove({}, function(error) {
		console.log('Database deleted')
	})
	for (var i = 0; i < countriesList.length; i++) {
		var name = countriesList[i].name;
		var frenchName = countriesList[i].frenchName;
		var localName = countriesList[i].localName;
		var region = countriesList[i].region;
		var hasTraveled = countriesList[i].hasTraveled;
		var newCountry = new model.Country({ name: name, frenchName: frenchName,localName: localName, 
			region: region, hasTraveled: hasTraveled });
		newCountry.save(function(error, newCountry){
			if(error) {
				console.log("New Country not added to the database")
			}
			else {
							
			}
		});		
	}
*/	
	model.Country.find({}).sort({name: 1}).exec(function(error, countriesDatabase){
			res.send(countriesDatabase);							
	});
});

app.post('/countries', function(req, res) {
	var updateCountry = req.body.updateCountry;

	model.Country.findOneAndUpdate({ name: updateCountry }, {$set: {hasTraveled: true}}, 
		function(error, results){
			if (error) {
				console.log("hasTraveled not updated")
			}
			else {
				console.log('hasTraveled updated')
				res.send('Success');
			}
		});
/*	for(var i = 0; i < countriesList.length; i++) {
		if(countriesList[i].name === updateCountry) {
			countriesList[i].hasTraveled = true;
			// console.log(countries[i])
			return;
		}	
	}*/
});

app.post('/search', function(req, res) {
	var searchCountry = req.body.searchCountry;
	var countryInfo = countriesList.filter(function(country) {
		return country.name === searchCountry
	})
	res.send(countryInfo)
})

var server = app.listen(5169, function() {
	console.log('Express server listening on port ' + server.address().port);
});
