$(document).ready(function() {
	b = new Board;
	b.putBoardInDOM();

	var doWord = function() {
		var word = $("#boggle_word").val();
		console.log(word);
	}

	$(document).keydown(function(event){
			k = event.keyCode
			if(k==13)
				doWord()
			else
				$('#boggle_word').focus();
	})


});
