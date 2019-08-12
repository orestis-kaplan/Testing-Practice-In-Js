
function capitalize(string) {
  return string.replace(string[0], string[0].toUpperCase());
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add() {
    return this.a + this.b;
  }

  substract() {
    return this.a - this.b;
  }

  divide() {
    return this.a / this.b;
  }

  multiply() {
    return this.a * this.b;
  }
}

const caesarCipher = (() => {
  function translateToNums() {
    const AllChars = [];

    for (let i = 97; i < 123; i += 1) { AllChars.push(String.fromCharCode(i)); }

    return AllChars;
  }

  function normalizeString(string) {
    const result = string.replace(/[.,#!$%^&*[\]@;:{}=\-_`~/()]/g, '');
    return result;
  }

  function encrypt(string, step) {
    const result = normalizeString(string);
    let symbols = translateToNums();
    const encryptIndexes = [];
    result.split('').forEach((i) => {
      if (i === i.toLowerCase()) {
        symbols = symbols.map((letter) => letter.toLowerCase());
      } else {
        symbols = symbols.map((letter) => letter.toUpperCase());
      }
      const index = (symbols.indexOf(i) + step) % 26;
      encryptIndexes.push(symbols[index]);
    });
    return encryptIndexes.join('');
  }

  function decrypt(string, step) {
    const result = normalizeString(string);
    let symbols = translateToNums();
    const decryptIndexes = [];
    result.split('').forEach((i) => {
      if (i === i.toLowerCase()) {
        symbols = symbols.map((letter) => letter.toLowerCase());
      } else {
        symbols = symbols.map((letter) => letter.toUpperCase());
      }

      const index = (symbols.indexOf(i) - step) % 26;

      if (index < 0 && index !== -1) {
        decryptIndexes.push(symbols[symbols.length + index]);
      } else {
        decryptIndexes.push(symbols[index]);
      }
    });
    return decryptIndexes.join('');
  }

  return {
    encrypt, decrypt,
  };
})();

function analyze(array) {
  const average = array.reduce((previous, current) => previous + current) / array.length;
  const min = array.reduce((previous, current) => (previous < current ? previous : current));
  const max = array.reduce((previous, current) => (previous > current ? previous : current));
  const { length } = array;

  return {
    average, min, max, length,
  };
}

export {
  capitalize, reverseString, Calculator, caesarCipher, analyze,
};
