$(document).ready(function() {
	b = new Board;
	b.putBoardInDOM();
	b.generateDiesNeighbors();

	var doWord = function() {
		var word = $("#boggle_word").val().toUpperCase();
		console.log(word);
		$("#boggle_word").val("");
	}

	$(document).keydown(function(event){
			k = event.keyCode
			if(k==13)
				doWord()
			else
				$('#boggle_word').focus();
	})


});
