const colors = require('colors');

const fontColor = ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray', 'grey']; // array of font colors
const fontStyle = ['reset', 'bold', 'dim', 'italic', 'underline', 'inverse', 'hidden', 'strikethrough']; // array of font styles

const args = process.argv.slice(2); // get command line input and slice it

const color = args[0]; // get first element of argument
const style = args[1]; // get second element of argument 

if (!fontColor.includes(color)) { // check if color is in the fontColor array

  console.log('**Please type a valid color**'.red.inverse.italic); // if not show an error

} else if (!fontStyle.includes(style)) { // check if style is in the fontStyle array

  console.log('**Please type a valid style**'.red.inverse.italic); // if not show an error

} else { // else show results
  console.log('\n######################'.rainbow.bold)

  console.log(colors[color][style]('Hello Colorful World!')); // print results

  console.log('######################\n'.rainbow.bold)
}