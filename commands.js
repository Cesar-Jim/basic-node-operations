const fs = require('fs');

// Write out data
function done(output) {
   process.stdout.write(output);
   process.stdout.write('\nprompt > ');
}

// Where we will store our commands
function evaluateCmd(userInput) {
   // Parses the user input to understand which command was typed
   const userInputArray = userInput.split(" ");
   const command = userInputArray[0];

   switch (command) {
      case "echo":
         commandLibrary.echo(userInputArray.slice(1).join(" "));
         break;
      case "cat":
         commandLibrary.cat(userInputArray.slice(1));
         break;
      case "head":
         commandLibrary.head(userInputArray.slice(1));
         break;
      case "tail":
         commandLibrary.tail(userInputArray.slice(1));
         break;
      default:
         process.stdout.write("Command not recognized...");

   }
}

// Where we will store the logic of our commands
const commandLibrary = {

   // The echo command
   "echo": function (userInput) {
      done(userInput);
   },

   // The cat command
   "cat": function (fullPath) {
      const fileName = fullPath[0];

      fs.readFile(fileName, (err, data) => {
         if (err) throw err;
         done(data);
      });
   },

   // The head command
   "head": function (fullPath) {
      const fileName = fullPath[0];

      fs.readFile(fileName, (err, data) => {
         if (err) throw err;

         var str = data.toString('utf8'); // Data needs to be converted into UTF-8 code text first
         var slicedStr = str.split('\n').slice(0, 8).join('\n'); // slicedStr is an array containing only the first 8 lines of the file
         var reEncodedStr = Buffer.from(slicedStr); // re-encoding data chunk into byte form (using UTF-8 as default)

         done(reEncodedStr);
      });
   },

   // The tail command
   "tail": function (fullPath) {
      const fileName = fullPath[0];

      fs.readFile(fileName, (err, data) => {
         if (err) throw err;

         var str = data.toString('utf8');
         var slicedStr = str.split('\n').slice(-8).join('\n');
         var reEncodedStr = Buffer.from(slicedStr);

         done(reEncodedStr);
      });
   }
};

module.exports.commandLibrary = commandLibrary;
module.exports.evaluateCmd = evaluateCmd;

