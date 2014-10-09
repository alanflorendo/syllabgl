function DictChecker(dictionary, board) {
	this.dictionary = dictionary;
	this.board = board;
	this.viableWords = [];

	this.checkAllPossibleWords = function() {
		for (var i=0, len=this.dictionary.words.length; i<len; i++) {
			var wc = new WordChecker(this.dictionary.words[i], this.board);
			if (wc.checkWord() != false) {
				this.viableWords.push (this.dictionary.words[i]);
			}
		}
	}
}