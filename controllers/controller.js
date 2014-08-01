var model = require('./models/models.js');
var countries = require('./models/countries.json');
var mongoose = require('mongoose');

var countryApp = {
	newCountry: function(name, frenchName, localName, region, hasTraveled) {
		var newCountry = new Country({
			name: name,
			frenchName: frenchName,
			localName: localName,
			region: region,
			hasTraveled: hasTraveled;
		});
	},
}

module.exports = {
	countryApp: countryApp;
}