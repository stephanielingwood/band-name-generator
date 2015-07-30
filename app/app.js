$(function(){

// Start with the string hidden
function hideString(){
	$('p').hide();
	}

hideString();

//Create an event for when the button is clicked the string appears.
$('#stringButton').on('click', function(){
	$('p').fadeIn(2000);
	$.get('adjective', function(response) {
		var adjective = response.word;
		$('#adjective').text(adjective);
	});
	$.get('verb', function(response) {
		var verb = response.word;
		$('#verb').text(verb)
	});
	$.get('noun', function(response) {
		var noun = response.word;
		$('#noun').text(noun)
});

});
})

// make an event handler that, when the button is clicked sends a POST request
$('#submitWords').on('submit', function(e) {
	e.preventDefault();

	// get the text entered in the text box and save to variable
	var adjective = $('input[name=adjective]').val();
	var adjectivePost;

	if (adjective) {
		adjectivePost = {word: adjective};
		$.post('adjective', adjectivePost, function(){
			console.log(response);
			var adjectiveRes = response.message;
			$('#adjectiveResponse').text(adjectiveRes);
		});
	}
});
