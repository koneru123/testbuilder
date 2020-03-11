/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail.
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out.
  // You will not be able to proceed with a failing test.

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  // it('Doesn\'t throw an error, so it doesn\'t fail', function() {
  //   // This test doesn't really test anything at all! It will pass no matter what.
  //   var even = function(num){
  //     return num/2 === 0;
  //   }
  //   return even(10) === true;
  // });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    // throw new Error('Delete me!');

    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }

  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }

  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  var assert = chai.assert;


  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  var should = chai.should();

  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });



  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.
  var should = chai.should();

  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })

});

describe('Discover', function() {

  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var should = chai.should();
  // var expect = chai.expect;
  it('has a prefix of 6011 and a length of 16', function(){
    detectNetwork('6011786542315895').should.equal('Discover');
    //expect(detectNetwork('6011786542315895')).to.equal('Discover')
  });
  it('has a prefix of 6011 and a length of 19', function(){
    detectNetwork('6011786542315895213').should.equal('Discover');
  });

  it('has a prefix of 644 and a length of 19', function(){
    detectNetwork('6444652314789564326').should.equal('Discover');
  });

  it('has a prefix of 645 and a length of 19', function(){
    detectNetwork('6454652314789564326').should.equal('Discover');
  });

  it('has a prefix of 646 and a length of 19', function(){
    detectNetwork('6464652314789564326').should.equal('Discover');
  });

  it('has a prefix of 647 and a length of 19', function(){
    detectNetwork('6474652314789564326').should.equal('Discover');
  });

  it('has a prefix of 648 and a length of 19', function(){
    detectNetwork('6484652314789564326').should.equal('Discover');
  });

  it('has a prefix of 649 and a length of 19', function(){
    detectNetwork('6494652314789564326').should.equal('Discover');
  });

  //=======================================================

  it('has a prefix of 644 and a length of 16', function(){
    detectNetwork('6444652314789564').should.equal('Discover');
  });

  it('has a prefix of 645 and a length of 16', function(){
    detectNetwork('6454652314789564').should.equal('Discover');
  });

  it('has a prefix of 646 and a length of 16', function(){
    detectNetwork('6464652314789564').should.equal('Discover');
  });

  it('has a prefix of 647 and a length of 16', function(){
    detectNetwork('6474652314789564').should.equal('Discover');
  });

  it('has a prefix of 648 and a length of 16', function(){
    detectNetwork('6484652314789564').should.equal('Discover');
  });

  it('has a prefix of 649 and a length of 16', function(){
    detectNetwork('6494652314789564').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 16', function(){
    detectNetwork('6546523147895646').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function(){
    detectNetwork('6546523147895644896').should.equal('Discover');
  });

});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  //Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  var should = chai.should();
  var randomLengthGen = function(length){
    var string = '';
    for (var i = length-4; i > 0; i--) {
      string = string + '2';
    }
    return string
  };

  for (var length = 12; length <= 19; length++) {
    (function (length) {
      it('has a prefix of 5018 and a length of ' + length, function () {
        detectNetwork('5018' + randomLengthGen(length)).should.equal('Maestro');
      });

      it('has a prefix of 5020 and a length of ' + length, function () {
        detectNetwork('5020' + randomLengthGen(length)).should.equal('Maestro');
      });

      it('has a prefix of 5038 and a length of ' + length, function () {
        detectNetwork('5038' + randomLengthGen(length)).should.equal('Maestro');
      });

      it('has a prefix of 6304 and a length of ' + length, function () {
        detectNetwork('6304' + randomLengthGen(length)).should.equal('Maestro');
      });
    })(length)
  }
});


describe('should support China UnionPay', function(){
  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  var should = chai.should();

  var prefixGen = function(start, end) {
    var chinaUnionPreGenArr = [];
    for(let i = start; i <= end; i++) {
      chinaUnionPreGenArr.push(i.toString());
    }
    return chinaUnionPreGenArr; // return prefix array
  };

  var prefixArr1 = prefixGen(622126,622925);
  var prefixArr2 = prefixGen(624,626);
  var prefixArr3 = prefixGen(6282,6288);

  for (let i = 0; i < prefixArr1.length; i++) {
      var preArray = prefixArr1[i];
      (function (preArray) {
        it('has a prefix of ' + preArray + ' and a length of 16', function () {
          detectNetwork(preArray + '1234567894').should.equal('China UnionPay');
        });
        it('has a prefix of ' + preArray + ' and a length of 17', function () {
          detectNetwork(preArray + '12345678942').should.equal('China UnionPay');
        });
        it('has a prefix of ' + preArray + ' and a length of 18', function () {
          detectNetwork(preArray + '123456789423').should.equal('China UnionPay');
        });
        it('has a prefix of ' + preArray + ' and a length of 19', function () {
          detectNetwork(preArray + '1234567894234').should.equal('China UnionPay');
        });
      })(preArray)
  };

  for (let i = 0; i < prefixArr2.length; i++) {
    var preArray1 = prefixArr2[i];
    (function (preArray1) {
      it('has a prefix of ' + preArray1 + ' and a length of 16', function () {
        detectNetwork(preArray1 + '1234567894563').should.equal('China UnionPay');
      });
      it('has a prefix of ' + preArray1 + ' and a length of 17', function () {
        detectNetwork(preArray1 + '12345678942563').should.equal('China UnionPay');
      });
      it('has a prefix of ' + preArray1 + ' and a length of 18', function () {
        detectNetwork(preArray1 + '123456789423563').should.equal('China UnionPay');
      });
      it('has a prefix of ' + preArray1 + ' and a length of 19', function () {
        detectNetwork(preArray1 + '1234567894234563').should.equal('China UnionPay');
      });
    })(preArray1)
  };

  for (let i = 0; i < prefixArr3.length; i++) {
    var preArray2 = prefixArr3[i];
    (function (preArray2) {
      it('has a prefix of ' + preArray2 + ' and a length of 16', function () {
        detectNetwork(preArray2 + '123456789456').should.equal('China UnionPay');
      });
      it('has a prefix of ' + preArray2 + ' and a length of 17', function () {
        detectNetwork(preArray2 + '1234567894256').should.equal('China UnionPay');
      });
      it('has a prefix of ' + preArray2 + ' and a length of 18', function () {
        detectNetwork(preArray2 + '12345678942356').should.equal('China UnionPay');
      });
      it('has a prefix of ' + preArray2 + ' and a length of 19', function () {
        detectNetwork(preArray2 + '123456789423456').should.equal('China UnionPay');
      });
    })(preArray2)
};
});


describe('should support Switch', function(){
  var should = chai.should();
  var switchPrefixArr4 = ['4903', '4905', '4911', '4936', '6333', '6759'];
  var switchPrefixArr6 = ['564182', '633110']

  for (let i = 0; i < switchPrefixArr4.length; i++) {
    var individualEle = switchPrefixArr4[i];
    (function (individualEle) {
      it('has a prefix of ' + individualEle + ' and a length of 16', function () {
        detectNetwork(individualEle + '123456789423').should.equal('Switch');
      });
      it('has a prefix of ' + individualEle + ' and a length of 18', function () {
        detectNetwork(individualEle + '12345678942334').should.equal('Switch');
      });
      it('has a prefix of ' + individualEle + ' and a length of 19', function () {
        detectNetwork(individualEle + '123456789423345').should.equal('Switch');
      });
    })(individualEle)
  }

  for (let i = 0; i < switchPrefixArr6.length; i++) {
    var individualEle1 = switchPrefixArr6[i];
    (function (individualEle1) {
      it('has a prefix of ' + individualEle1 + ' and a length of 16', function () {
        detectNetwork(individualEle1 + '1234567894').should.equal('Switch');
      });
      it('has a prefix of ' + individualEle1 + ' and a length of 18', function () {
        detectNetwork(individualEle1 + '123456789423').should.equal('Switch');
      });
      it('has a prefix of ' + individualEle1 + ' and a length of 19', function () {
        detectNetwork(individualEle1 + '1234567894233').should.equal('Switch');
      });
    })(individualEle1)
  }
});

