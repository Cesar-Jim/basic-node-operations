var input = "I'm learning to program algorithms!";

// 1) split the input string
var reverseString = str => {
   var splittedString = str.split(" ");

   reverseWords(splittedString);
};


// 2) reverse words and push each reversed word in a new array
var reverseWords = wordArray => {
   var arrayWithReversedWords = [];

   for (let i = 0; i < wordArray.length; i++) {
      var str = [...wordArray[i]];
      var reversed = str.reverse();
      var joined = reversed.join('');

      arrayWithReversedWords.push(joined);
   }

   joinWords(arrayWithReversedWords);
};


// 3) join words inside the array to form the output sentence with reversed words and console.log it
var joinWords = wordArray => {
   var output = wordArray.join(' ');

   console.log(output);
}


reverseString(input);