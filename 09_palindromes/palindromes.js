const stripNonAlphabets = function(phrase) {
  let cleanPhrase = "";
  for (let index = 0; index < phrase.length; index++) {
    if (phrase[index].match(/[a-z]/i)) cleanPhrase += phrase[index];
  }
  return cleanPhrase;
};

const palindromes = function (phrase) {
  phrase = stripNonAlphabets(phrase.toLowerCase());
  const reversedPhrase = phrase.split('').reverse().join('');

  return (phrase === reversedPhrase) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
