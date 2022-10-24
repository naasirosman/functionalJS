const football = {
    "premier league": [
        {
            name: "man city",
            location: "north"
        }, 
        {
            name: "arsenal",
            location: "south"
        },
        {
            name: "liverpool",
            location: "north"
        }

    ]
}

// exericse 1: looping through this array

const getLocations = () => {
    for (let i = 0; i < football["premier league"].length; i++) {
        console.log(football["premier league"][i].location);
      }
}
getLocations()

// exercise 2: loop to find
const whoIsSouth = () => {
    for (let i = 0; i < football["premier league"].length; i++) {
        console.log("outer loop")
        for (let key in football["premier league"][i]) {
            console.log("inner loop")
            if (football["premier league"][i][key] === "south") {
                console.log('found south')
            } else {
                console.log("not south")
            }
        };
      }
}
whoIsSouth()

//exercise 3: getting values


const [color1, color2] = [football["premier league"][0].name, football["premier league"][1].name]; 
console.log(color1, color2)

// exercise 4 looping with .each

const CreateCandyObjects = (name) => { 
    return { 
      name: name,   
      color: name.split(' ')[1],   
      speak() {log(`this candy is ${name}`);}
    }; 
  }; 
  
  const candy = ['Bubble Gum', 'Mars Bar', 'Fizzy Fangs']; 
  
  const candyList = [];
  
//   _.each(candy, (name) => {
//   candyList.push(CreateSuspectObjects(name)); 
//   });

//   The _.each() function is an inbuilt function in Underscore.js library of JavaScript which is used to return the each element of the given list. 

//difference between each and foreach - found on another file