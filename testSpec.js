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
    var numbers = evenNumbers([1,2,3,4,5]);

    expect(numbers).toEqual([2,4]);
    expect(evenNumbers([])).toEqual([]);
  });
});
