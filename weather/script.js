$(document).ready(function (){
console.log(1);
	$('#submitbt').click(function() {
    	
		var location = $('#city').val();
		console.log(2);
		$.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '")&format=json', function (data) {
		console.log("test")	
			/* Check that a place was found (we'll just grab the first) */
			if (data.query.results === null) {
				bootbox.alert("Location not found: " + location + "!");

			} else {
				$('#results').html('The weather in ' + data.query.results.channel.item.title  + data.query.results.channel.item.description)
				
			}

		});
	});
});