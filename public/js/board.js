
function Board() {
	var dice = [];

	this.generateDice = function() {
	  var lg = new LetterGenerator;
	  var dice = [];

	  for (var i=0; i<16; i++){
	    newDie = new Die(lg.getRandomFace());
	    dice.push(newDie);
	  }

	  return dice;
	}

	this.putBoardInDOM = function() {
		this.dice = this.generateDice();
		var i = 0;
		SYLLABLES = ["ing", "er", "a", "ly", "ed", "i", "es", "re", "tion", "in", "e", "con", "y", "ter", "ex", "al", "de", "com", "o", "di", "en", "an", "ty", "ry", "u", "ti", "ri", "be", "per", "to", "pro", "ac", "ad", "ar", "ers", "ment", "or", "tions", "ble", "der", "ma", "na", "si", "un", "at", "dis", "ca", "cal", "man", "ap", "po", "sion", "vi", "el", "est", "la", "lar", "pa", "ture", "for", "is", "mer", "pe", "ra", "so", "ta", "as", "col", "fi", "ful", "get", "low", "ni", "par", "son", "tle", "day", "ny", "pen", "pre", "tive", "car", "ci", "mo", "an", "aus", "pi", "se", "ten", "tor", "ver", "ber", "can", "dy", "et", "it", "mu", "no", "ple", "cu", "fac", "fer", "gen", "ic", "land", "light", "ob", "of", "pos", "tain", "den", "ings", "mag", "ments", "set", "some", "sub", "sur", "ters", "tu", "af", "au", "cy", "fa", "im", "li", "lo", "men", "min", "mon", "op", "out", "rec", "ro", "sen", "side", "tal", "tic", "ties", "ward", "age", "ba", "but", "cit", "cle", "co", "cov", "daq", "dif", "ence", "ern", "eve", "ies", "ket", "lec", "main", "mar", "mis", "my", "nal", "ness", "ning", "n’t", "nu", "oc", "pres", "sup", "te", "ted", "tem", "tin", "tri", "tro", "up"]
		for (var tr=1; tr<=4; tr++){ // go thru each row
			for (var td=1; td<=4; td++){ // go thru each col
				var selector = '#board tr:nth-child(' + tr + ') td:nth-child(' + td +')'
				console.log(selector);
				$(selector).html(SYLLABLES[i]);
				i += 1;
			}
		}
	}

}