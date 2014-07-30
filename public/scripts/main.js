$(document).ready(function() {
	$('#load').on('click', function(e) {
		 $.get('/countries', function(countriesList) {
		 	console.log(countriesList.length)
		 	for(var i=0; i < countriesList.length; i++) {
			 	var li = $('<li>');
			 	li.append(countriesList[i].name)
			 	console.log(li)
			 	$('#countriesDisplay').append(li);
		 	}
		 })
	})

})
