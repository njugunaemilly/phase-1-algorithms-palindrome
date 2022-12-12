function isPalindrome(word) {
  const reversedWord = reverseStringWord(word);
  return word === reversedWord;

  function reverseStringWord(word){
    return word.split("").reverse().join("");
  }
}
  

/* 
  Add your pseudocode here
  make a isPalindrome fucntion
  flip input string
  if flipped string is the same as the input string
    return true
  else
    return false
*/

/*
  Add written explanation of your solution here
  should return true if the input string is the same forward and backeard, words like kayak,rotator, racecar, radar
  if the input string is not the same when flipped, function should return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
