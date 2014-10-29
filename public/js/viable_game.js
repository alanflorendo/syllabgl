function GameScenario(faces) {
	this.faces = faces;
	this.faceString = "";
	this.viableWords = [];
	this.maxScore = 0;

	this.storeFaces = function() {
		var len = this.faces.len;
		for (var i=0; i<len; i++) {
			this.faceString = this.faceString.concat("," + this.faces[i]);
		}
	}

	this.scoreGame = function() {
		numWords = this.viableWords.length;
		for (var i=0; i<numWords; i++) {
			if (this.viableWords[i].length === 3)
				this.maxScore += 1;
			if (this.viableWords[i].length === 4)
				this.maxScore += 2;
			if (this.viableWords[i].length >= 5)
				this.maxScore += 3;
		}
	}

	this.saveGame = function() {
		$.ajaxSetup({
		headers: {
			'X-CSRF-Token':$('meta[name="csrf-token"]').attr("content")
			}
		});
		$.ajax({
			url: '/game_scenarios',
			type: 'POST',
			dataType: 'json',
			data: {game_scenario: { faces: this.faces.toString(), viable_words: this.viableWords, max_score: parseInt(this.maxScore, 10) } }
		})
		.done(function(response) {
			console.log("success");
			console.log(response)
		})
		.fail(function() {
			console.log("error");
		})
	}
}


function GameCollector() {
	this.scenarios = [];
	var dict = new Dictionary;

	this.checkAndStoreGame = function() {
		bd = new Board;
		bd.generateDice();
		bd.putBoardInDOM();
		bd.generateDiesNeighbors();
		gs = new GameScenario(bd.faces);
		dc = new DictChecker(dict, bd);
		dc.checkAllPossibleWords();
		gs.viableWords = dc.viableWords;
		gs.maxScore = gs.scoreGame();
		this.scenarios.push(gs);
		console.log(gs);
	}

	this.checkAndStoreGames = function(numTimes) {
		for (var i=0; i<20; i++) {
			this.checkAndStoreGame();  // add to database of games, to be created
		}
	}

}