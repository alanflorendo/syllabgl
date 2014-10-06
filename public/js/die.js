function Die(face) {
  this.face = face;
  this.highlight = false;
  this.tr = 0;
  this.td = 0;
  this.dom = "";
  this.neighbors = [];
}


function LetterGenerator() {
  this.LETTERS = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "F", "G", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "L", "M", "M", "N", "N", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "O", "O", "P", "P", "R", "R", "R", "R", "R", "R", "S", "S", "S", "S", "T", "T", "T", "T", "T", "T", "U", "U", "U", "U", "V", "V", "W", "W", "X", "Y", "Y", "Z"];
  this.SYLLABLES = ["Qu", "ing", "er", "a", "ly", "ed", "i", "es", "re", "tion", "in", "e", "con", "y", "ter", "ex", "al", "de", "com", "o", "di", "en", "an", "ty", "ry", "u", "ti", "ri", "be", "per", "to", "pro", "ac", "ad", "ar", "ers", "ment", "or", "tions", "ble", "der", "ma", "na", "si", "un", "at", "dis", "ca", "cal", "man", "ap", "po", "sion", "vi", "el", "est", "la", "lar", "pa", "ture", "for", "is", "mer", "pe", "ra", "so", "ta", "as", "col", "fi", "ful", "get", "low", "ni", "par", "son", "tle", "day", "ny", "pen", "pre", "tive", "car", "ci", "mo", "an", "aus", "pi", "se", "ten", "tor", "ver", "ber", "can", "dy", "et", "it", "mu", "no", "ple", "cu", "fac", "fer", "gen", "ic", "land", "light", "ob", "of", "pos", "tain", "den", "ings", "mag", "ments", "set", "some", "sub", "sur", "ters", "tu", "af", "au", "cy", "fa", "im", "li", "lo", "men", "min", "mon", "op", "out", "rec", "ro", "sen", "side", "tal", "tic", "ties", "ward", "age", "ba", "but", "cit", "cle", "co", "cov", "daq", "dif", "ence", "ern", "eve", "ies", "ket", "lec", "main", "mar", "mis", "my", "nal", "ness", "ning", "n’t", "nu", "oc", "pres", "sup", "te", "ted", "tem", "tin", "tri", "tro", "up"]
  this.FACES = this.LETTERS.concat(this.SYLLABLES); // ie, the face of a die
  this.randomFaces = clone(shuffle(this.FACES));

  this.getRandomFace = function() {
    this.randomFace = this.randomFaces.shift();
    return this.randomFace;
  }
}
