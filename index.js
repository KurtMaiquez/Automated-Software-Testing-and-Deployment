// index.js

const readline = require('readline');
const {
  decimalToBinary,
  binaryToDecimal,
  decimalToHexadecimal,
  hexadecimalToDecimal,
  decimalToOctal,
  octalToDecimal,
} = require('./basenumberConverter');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Base Number Converter Tool');
console.log('1. Decimal to Binary');
console.log('2. Binary to Decimal');
console.log('3. Decimal to Hexadecimal');
console.log('4. Hexadecimal to Decimal');
console.log('5. Decimal to Octal');
console.log('6. Octal to Decimal');
console.log('Enter your choice (1-6): ');

rl.on('line', (input) => {
  switch (parseInt(input)) {
    case 1:
      rl.question('Enter decimal number: ', (decimal) => {
        console.log(`Binary: ${decimalToBinary(parseInt(decimal))}`);
        rl.close();
      });
      break;
    case 2:
      rl.question('Enter binary number: ', (binary) => {
        console.log(`Decimal: ${binaryToDecimal(binary)}`);
        rl.close();
      });
      break;
    case 3:
      rl.question('Enter decimal number: ', (decimal) => {
        console.log(`Hexadecimal: ${decimalToHexadecimal(parseInt(decimal))}`);
        rl.close();
      });
      break;
    case 4:
      rl.question('Enter hexadecimal number: ', (hexadecimal) => {
        console.log(`Decimal: ${hexadecimalToDecimal(hexadecimal)}`);
        rl.close();
      });
      break;
    case 5:
      rl.question('Enter decimal number: ', (decimal) => {
        console.log(`Octal: ${decimalToOctal(parseInt(decimal))}`);
        rl.close();
      });
      break;
    case 6:
      rl.question('Enter octal number: ', (octal) => {
        console.log(`Decimal: ${octalToDecimal(octal)}`);
        rl.close();
      });
      break;
    default:
      console.log('Invalid choice. Please enter a number between 1 and 6.');
      rl.close();
      break;
  }
});
