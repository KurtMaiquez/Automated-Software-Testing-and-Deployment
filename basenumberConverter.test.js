// basenumberConverter.test.js

const {
    decimalToBinary,
    binaryToDecimal,
    decimalToHexadecimal,
    hexadecimalToDecimal,
    decimalToOctal,
    octalToDecimal,
  } = require('./basenumberConverter');
  
  describe('Binary Converter', () => {
    test('Decimal to Binary', () => {
      expect(decimalToBinary(10)).toBe('1010');
    });
  
    test('Binary to Decimal', () => {
      expect(binaryToDecimal('1010')).toBe('10');
    });
  
    test('Decimal to Hexadecimal', () => {
      expect(decimalToHexadecimal(255)).toBe('ff');
    });
  
    test('Hexadecimal to Decimal', () => {
      expect(hexadecimalToDecimal('ff')).toBe('255');
    });
  
    test('Decimal to Octal', () => {
      expect(decimalToOctal(63)).toBe('77');
    });
  
    test('Octal to Decimal', () => {
      expect(octalToDecimal('77')).toBe('63');
    });
  });