var mongoose = require('mongoose');


var Country = mongoose.model('Country', {
	name: String,
	frenchName: String,
	localName: String,
	region: String,
	hasTraveled: Boolean,
});


module.exports = {
	Country: Country
}