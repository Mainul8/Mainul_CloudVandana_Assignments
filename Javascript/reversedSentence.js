const readline = require('readline');

const re = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function reverseWords(sentence) {
  const words = sentence.split(' ');
  const reversedWords = words.map(word => word.split('').reverse().join(''));
  return reversedWords.join(' ');
}

re.question('Enter a sentence: ', (sentence) => {
  const reversedSentence = reverseWords(sentence);
  console.log('Reversed sentence:', reversedSentence);
  re.close();
});