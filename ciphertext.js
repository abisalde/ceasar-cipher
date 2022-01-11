// Illustration of Cesar Cipher Techniques


// Check if Character is a letter
const isLetter = (str) => {
  return str.length === 1 && str.match(/[a-z]/i);
};

// Check Uppercase and Lowercase character
const isUpperCase = (char) => {
  if (char === char.toUpperCase()) {
    return true;
  }
  if (char === char.toLowerCase()) {
    return false;
  }
};

// Define the Key Globally

let key = 'DnRsH2w91'

// Encrypt and Decrypt functions
const encrypt = (text) => {
  let result = '';

  for (let i = 0, j = 0; i < text.length; i++) {
    const c = text.charAt(i);
    if (isLetter(c)) {
      if (isUpperCase(c)) {
        result += String.fromCharCode(
          ((c.charCodeAt(0) + key.toUpperCase().charCodeAt(j) - 2 * 65) % 26) +
            65
        );
      } else {
        result += String.fromCharCode(
          ((c.charCodeAt(0) + key.toLowerCase().charCodeAt(j) - 2 * 97) % 26) +
            97
        );
      }
    } else {
      result += c;
    }
    j = ++j % key.length;
  }
  return result;
};

const decrypt = (text) => {
  let result = '';
  for (let i = 0, j = 0; i < text.length; i++) {
    const c = text.charAt(i);
    if (isLetter(c)) {
      if (isUpperCase(c)) {
        result += String.fromCharCode(
          90 - ((25 - (c.charCodeAt(0) - key.toUpperCase().charCodeAt(j))) % 26)
        );
      } else {
        result += String.fromCharCode(
          122 -
            ((25 - (c.charCodeAt(0) - key.toLowerCase().charCodeAt(j))) % 26)
        );
      }
    } else {
      result += c;
    }
    j = ++j % key.length;
  }
  return result;
};
