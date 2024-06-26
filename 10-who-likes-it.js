
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/

function likes(names) { 
    switch (names.length) {
        case 0:
            return 'no one likes this';
            break;
        case 1:
            return names[0] + ' likes this';
            break;
        case 2:
            return names[0] + ' and ' + names[1] + ' like this';
            break;
        case 3:
            return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
            break;
        default:
            return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
            break;
    }
}

console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));

// Sample Tests
/*describe('example tests', function() {
    it('should return correct text', function() {
      assert.strictEqual(likes([]), 'no one likes this');
      assert.strictEqual(likes(['Peter']), 'Peter likes this');
      assert.strictEqual(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
      assert.strictEqual(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
      assert.strictEqual(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
    });
  });
  */