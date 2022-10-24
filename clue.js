const clue = {};
clue.characters = [ "Blue", "Green", "Yellow", "Red", "Black", "White"];
clue["weapons"] = ["Knife", "Rope", "Gun", "Spear", "Sword", "Axe"];
clue.rooms = ["Lab", "Office", "Lounge", "Dining", "Bedroom", "Kitchen"];
clue.murderer = "?"
clue.murderWeapon = "?" 
clue.murderRoom = "?"
clue.characters.push("Pink")
clue.characters[0] = "Purple"
 
console.log(clue)

// exercise


const randomCharacter = () => {
     return clue.characters[Math.floor(Math.random() * clue.characters.length)]
     };
const randomWeapon = () => { 
    return clue.weapons[Math.floor(Math.random() * clue.weapons.length)]
};
const randomRoom = () => { 
    return clue.rooms[Math.floor(Math.random() * clue.rooms.length)]
};

const answer = {}
    answer.name = randomCharacter()
    answer.weapon = randomWeapon()
    answer.room = randomRoom()

console.log(answer)
console.log() 