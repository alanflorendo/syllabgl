function DictChecker(dictionary, board) {
	this.dictionary = dictionary;
	this.board = board;
	this.viableWords = [];

	this.checkAllPossibleWords = function() {
		for (var i=0, dictLen = this.dictionary.words.length; i<dictLen; i++) {
			var wc = new WordChecker(this.dictionary.words[i], this.board);
			if (wc.checkWord() != false) {
				this.viableWords.push(this.dictionary.words[i]);
			}
		}
	}
}