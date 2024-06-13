function reverseString(str) {
  characters = str.split('')
  characterArray = []
  characters.map(letter => characterArray.unshift(letter))
  const reversed = characterArray.join('')
  return reversed
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

// function takes in string as an argument
// splits that strings into single characters and puts into an array
// takes that array and iterates over it and .pushes into a new array
// merges that new array into a string
