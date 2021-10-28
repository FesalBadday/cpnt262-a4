const colors = require('colors');

const fontColor = ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray', 'grey'];
const fontStyle = ['reset', 'bold', 'dim', 'italic', 'underline', 'inverse', 'hidden', 'strikethrough'];

const args = process.argv.slice(2);

const color = args[0];
const style = args[1];

if (!fontColor.includes(args[0])) { // check if color is in the fontColor array

  console.log('**Please type a valid color**'.red.inverse); // if not show an error

} else if (!fontStyle.includes(args[1])) { // check if style is in the fontStyle array

  console.log('**Please type a valid style**'.red.inverse); // if not show an error

} else { // else show results
  console.log('\n######################'.rainbow.bold)

  console.log(colors[color][style]('Hello Colourful World!')); // print results

  console.log('######################\n'.rainbow.bold)
}