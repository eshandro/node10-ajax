var countries = require('../models/countries.json');
var mongoose = require('mongoose');
var model = require('../models/models.js');


var countryApp = {
	createCountry: function(name, frenchName, localName, region, hasTraveled) {
			this.name = name;
			this.frenchName = frenchName;
			this.localName = localName;
			this.region = region;
			this.hasTraveled = hasTraveled;
	},
}

module.exports = {
	countryApp: countryApp,
}