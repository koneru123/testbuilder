// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // look for first two digits
  /*
Visa always has a prefix of 4 and a length of 13, 16, or 19.
MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  */

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  const len = cardNumber.length;
  const substring2 = cardNumber.substring(0, 2);
  const substring3 = cardNumber.substring(0, 3);
  const substring4 = cardNumber.substring(0, 4);
  const substring6 = cardNumber.substring(0, 6);
  const substring1 = parseInt(cardNumber.substring(0, 1));

  var chinaUnionPreGen = function(start, end) {
    var chinaUnionPreGenArr = [];
    for(let i = start; i <= end; i++) {
      chinaUnionPreGenArr.push(i.toString());
    }
    return chinaUnionPreGenArr;
  }

  if (len === 14 && ['38', '39'].indexOf(substring2) > -1) {
    return "Diner's Club";
  } else if (len === 15 && ['34', '37'].indexOf(substring2) > -1) {
    return "American Express";
  }  else if (len === 16 && ['51','52','53','54','55'].indexOf(substring2) > -1) {
    return "MasterCard";
  } else if ((len === 16 || len === 19) && (['6011'].indexOf(substring4) > -1 || ['644', '645', '646', '647', '648', '649'].indexOf(substring3) > -1 || ['65'].indexOf(substring2) > -1)) {
    return "Discover";
  }  else if ((len >= 12 || len <= 19) && ['5018' , '5020' , '5038' , '6304'].indexOf(substring4) > -1) {
    return 'Maestro';
  } else if ((len >= 16 || len <= 19) && (chinaUnionPreGen(622126,622925).indexOf(substring6) > -1 || chinaUnionPreGen(624,626).indexOf(substring3) > -1 || chinaUnionPreGen(6282,6288).indexOf(substring4) > -1)){
    return 'China UnionPay';
  } else if ((len === 16 || len === 18 || len ===19) && (['4903', '4905', '4911', '4936', '6333', '6759'].indexOf(substring4) > -1 || ['564182', '633110'].indexOf(substring6) > -1)) {
    return 'Switch';
  } else if ((len === 13 || len === 16 || len === 19) && substring1 === 4) {
    return 'Visa';
  } else {
    return 'Invalid Credit Card';
  }
};