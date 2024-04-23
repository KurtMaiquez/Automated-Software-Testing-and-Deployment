// basenumberConverter.js

function decimalToBinary(decimal) {
    return (decimal >>> 0).toString(2);
  }
  
  function binaryToDecimal(binary) {
    return parseInt(binary, 2).toString(10);
  }
  
  function decimalToHexadecimal(decimal) {
    return decimal.toString(16);
  }
  
  function hexadecimalToDecimal(hexadecimal) {
    return parseInt(hexadecimal, 16).toString(10);
  }
  
  function decimalToOctal(decimal) {
    return decimal.toString(8);
  }
  
  function octalToDecimal(octal) {
    return parseInt(octal, 8).toString(10);
  }
  
  module.exports = {
    decimalToBinary,
    binaryToDecimal,
    decimalToHexadecimal,
    hexadecimalToDecimal,
    decimalToOctal,
    octalToDecimal,
  };