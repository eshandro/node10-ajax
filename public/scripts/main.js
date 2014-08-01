$(document).ready(function() {
	$('#load').on('click', function(e) {
		 $.get('/countries', function(countriesList) {		 	
		 	$('#countriesDisplay').empty();
		 	var li = $('<li>');
		 	li.append('<h4>Mark the countries you visited</h3>')
		 	$('#countriesDisplay').append(li);
		 	for(var i=0; i < countriesList.length; i++) {
			 	var li2 = $('<li>');
			 	var span = $('<span>');
			 	li2.append(countriesList[i].name);
			 	span.addClass('glyphicon glyphicon-thumbs-up thumbs');
			 	li2.append(span);
			 	$('#countriesDisplay').append(li2);
			 	if(countriesList[i].hasTraveled) {
			 		$('li:contains("' + countriesList[i].name + '")').children().css('color', 'green');
			 		// console.log('Thumb stays green');	
			 	}
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

	$(document).on('click', '.thumbs', function() {
		if($(this).css('color') === 'rgb(51, 51, 51)') {
			$(this).css('color', 'green');
			$.post('/countries', { updateCountry: $(this).closest('li').text() }, function(countryUpdate) {
				// console.log(countryUpdate);
			})
		}	
	});

})
