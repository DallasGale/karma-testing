//////////// numbers: example 1 ////////////

function evenNumbers(array) {
  var newNumbers = [];
  for ( var i = 0; i < array.length; i++ ) {
    var number = array[i];
    if( number % 2 == 0 ) {
      newNumbers.push(number);
    }
  }
  return newNumbers;
}

describe("evenNumbers", function() {
  it("should only return even numbers", function() {
    const numbers = evenNumbers([1,2,3,4,5]);
    expect(numbers).toEqual([2,4]);
    expect(evenNumbers([])).toEqual([]);
  });
});


//////////// numbers: example 2 ////////////

function addTwoNumbers(no1, no2) {
  return no1 + no2;
}

describe('JS addition operator', function() {
  it('adds two numbers together', function() {
    const numbers = addTwoNumbers(2, 3);
    expect(numbers).toEqual(5);
  })
});


//////////// measurement converter: example 1 ////////////

function convertInchToCm(inch) {
  var cm = inch * 2.54;
  return cm;
}

describe("distance converter", function() {
  it("converts inches to centimeters", function() {
    // expect(Convert(12, "in").to("cm")).toEqual(30.48);
    const inch = convertInchToCm(12);
    expect(inch).toEqual(30.48);
  });
});


//////////// measurement converter: example 2 ////////////


function convertLitreToGallon(litre) {
  var gallon = litre * 0.26417;
  return gallon;
}

describe("volume converter", function() {
  it("converts litres to gallons", function() {
    // expect(Convert(3, "litres").to("gallons")).toEqual(0.79251);
    const litre = convertLitreToGallon(3);
    expect(litre).toEqual(0.79251);
  })
});


//////////// currency formater: example 1 ////////////

function currencyFormat(price) {
   const uniquePrice = new Intl.NumberFormat().format(price);
   return uniquePrice;
}

describe("currency formater", function() {
  it("converts raw number to US currency format", function() {
    const number = currencyFormat(328567);
    expect(number).toEqual("328,567");
  });
});


//////////// currency formater: example 2 ////////////

function addDollarSign(number) {
   const rawNumber = number.toString();
   const dollarSignedNumber = "$" + rawNumber;
   return dollarSignedNumber;
}

describe("dollar sign", function() {
  it("adds a dollar sign to the start of currency formatted number", function() {
     const number = addDollarSign(currencyFormat(345325));
     console.log(number);
     expect(number).toEqual("$345,325");
  });
});


//////////// calc width of array: example 1 ////////////

// 1. round to nearest 0
function getSum(total, num) {
  var rounded = total + Math.round(num);
  return rounded;
}

describe("round number", function() {
  it("takes a total number and rounds to nearest 0", function() {
    const total = getSum([1093], 0);
    expect(total).toEqual('10930');
  })
});

// 2. calc getSum total
function getTotal(numbers) {
  return numbers.reduce(getSum);
}

describe("calculate widths", function() {
  it("totals the width of all sibling elements", function() {
    const total = getTotal([324, 531, 433, 532]);
    console.log('total: ' + total);
    expect(total).toEqual(1820);
  });
});
