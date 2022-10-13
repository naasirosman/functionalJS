//objects and arrays

const person = {
    name : "Beverly",
};
console.log(person);

var who = person.name
console.log(who) // should print "beverly"

person.name = "Jessica"
console.log(who) // still prints "beverly"
// person.name is update but who isnt
// objects and arrays don't behave like functions, strings etc.
// they just reference

// whatever is inside [] is not assumed to be a string but whatever after . is
// if you want to push a unusual attribute name e.g. - use [] and ""

// ?? Array.isArray([]) = true?
// ?? Object.keys(obj)[0] ??