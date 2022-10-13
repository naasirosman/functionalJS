
const [first, second] = [true, false]

//objects dont have order, arrays do

// omit certain values
var [a, , b] = [1, 2, 3]
//  => 1, 3

// combine with spread/rest operator
var [a, ...b] = [1, 2, 3];
//  => 1 [ 2, 3 ]

// swap variables easily without temp

var a = 1, b = 2;
// to make a = 2 and b = 1
// old way
// var temporary = a
// a = b
// b = temporary

// new way
[a, b] = [b, a]

// you'd rather use objects over nested arrays (arrays inside each other)

