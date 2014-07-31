$(document).ready(function() {
	$('#load').on('click', function(e) {
		 $.get('/countries', function(countriesList) {
		 	for(var i=0; i < countriesList.length; i++) {
			 	var li = $('<li>');
			 	li.append(countriesList[i].name)
			 	$('#countriesDisplay').append(li);
		 	}
		 })
	})
	$('#search-submit').on('click', function(e) {
		e.preventDefault();
		$.post('/search', { searchCountry: $('input[name="search-countries"]').val() },function(countryInfo) {
			$('#searchDisplay').html('');
			$('h3').html('');
			$('#searchDisplay').before('<h3>Search Results');
			$('#searchDisplay').append('<li> Country name: ' + countryInfo[0].name);
			$('#searchDisplay').append('<li> Local name: ' + countryInfo[0].localName);
			$('#searchDisplay').append('<li> French name: ' + countryInfo[0].frenchName);
			$('#searchDisplay').append('<li> Region: '  + countryInfo[0].region);

		})

	})

})
