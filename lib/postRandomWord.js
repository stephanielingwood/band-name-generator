'use strict';

module.exports = function postRandomWord (word, wordObject) {
  if (!wordObject.hasOwnProperty(word)) {
    wordObject[word] = true;
    return {message: 'Thanks for the new word: ' + word + '!'};
  }
  return {message: 'We already have ' + word + ', please try agian!'}
}
