const commands = require('./commands.js');

// Prompt the user for input
process.stdout.write('prompt > ');

// The stdin 'data' event triggers after a user types in a line
process.stdin.on('data', (userInput) => {
   userInput = userInput.toString().trim();

   // EvaluateCmd is a function which will be implemented in command.js
   commands.evaluateCmd(userInput);
});
