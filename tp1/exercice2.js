function countWords(articles) {
  //split the string
  var words = articles.replace(/[\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|<|\.|\>|\/|\?\d]/g, " ").toLowerCase().trim();
  var words = words.split(/[\ ]+/g).sort();
  //operation
  var dict = {};
  for (var i = 0; i < words.length ; i ++) {
    var word = words[i];
    if (word in dict) {
      dict[word] ++ ;
    } else {
      dict[word] = 1;
    }
  }
  return dict;
}

function WordList(string){
  var dict = countWords(string);
  this.maxCountWord = function() {
    var wordsList = this.getWords();
    var max = Math.max.apply(Math, wordsList.map(function(o){ return dict[o]}));
    var word = wordsList.find(function(o){return dict[o] === max});
    return word;
  }

  this.minCountWord = function() {
    var wordsList = this.getWords();
    var max = Math.min.apply(Math, wordsList.map(function(o){ return dict[o]}));
    var word = wordsList.find(function(o){return dict[o] === max});
    return word;
  }

  this.getWords = function() {
    var result = [ ];
    for( var key in dict) {
      result.push(key);
    }
    return result;
  }

  this.getCount = function(word) {
    return dict[word];
  }

  this.applyWordFunc = function(func) {
    var wordsList = this.getWords();
    return wordsList.map(func);
  }
}

// var a = 'hello, i am am mike';
// var o = new WordList(a);
// console.log(o.maxCountWord())
// console.log(o.getCount('hello'))

exports.countWords = countWords;
exports.WordList = WordList;
