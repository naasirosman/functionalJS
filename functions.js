const sayHello = (name) => console.log(`hello ${name}`)
sayHello("Jamie")
// jamie is an argument, name is a parameter

//spread operator

const premierLeagueTable = (a, b, ...c) => {
    console.log(arguments)
    return [a, b, c]
}

console.log(premierLeagueTable(mancity, arsenal, liverpool, united))
//output for console.log(arguments) = [mancity, arsenal, liverpool, united]
// output = [mancity, arsenal, [liverpool, united]]