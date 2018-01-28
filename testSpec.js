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

function convertLitreToGallon(litre) {
  var gallon = litre * 0.26417;
  return gallon;
}

describe("Convert library", function() {
  describe("diistance converter", function() {
    it("converts inches to centimeters", function() {
      // expect(Convert(12, "in").to("cm")).toEqual(30.48);
      const inch = convertInchToCm(12);
      expect(inch).toEqual(30.48);
    });
  });
  describe("volume converter", function() {
    it("converts litres to gallons", function() {
      // expect(Convert(3, "litres").to("gallons")).toEqual(0.79251);
      const litre = convertLitreToGallon(3);
      expect(litre).toEqual(0.79251);
    })
  });
});
