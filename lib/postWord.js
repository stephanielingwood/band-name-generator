'use strict';

module.exports = function(word, wordObject) {
  if (wordObject.hasOwnProperty(word)) {
    return {msg: 'We already have your awesome word, ' + word + ', in our list.'};
  }

  wordObject[word] = true;
  console.dir(wordObject);
  return {msg: 'Thanks for submitting ' + word + '!'};
};
