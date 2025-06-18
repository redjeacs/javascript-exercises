const palindromes = function (string) {
  const cleanedString = string
    .replaceAll(/\p{P}/gu, '')
    .replaceAll(' ', '')
    .toLowerCase();
  const reversedString = cleanedString
    .split('')
    .toReversed()
    .join('');
  return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
