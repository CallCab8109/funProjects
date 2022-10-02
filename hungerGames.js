//input variables and player name here. Have them roll before the game begins
let name = "Simmons"
let d20a = "15"
let d4a = "4"

console.log(`Welcome, ${name} to the 256 annual Hunger Games!`)
console.log('It is nearly time for the gong to ring, roll the die to see how many seconds you have to prepare')

if(d20a <= 5){
    console.log(`OH NO! It looks like you only have ${d20a} seconds left.`)
} else if(d20a > 5 && d20a <= 10){
    console.log(`The odds are NEVER in your favor! You have ${d20a} seconds left.`)
} else if(d20a > 10 && d20a <= 15){
    console.log(`${name} it appears you have some fortune! You have ${d20a} seconds to prepare`)
} else{
    console.log(`Holy Mackrel! Keep an eye on this one folks! They have ${d20a} seconds to prepare!`)
}

console.log('The gong has rung! Where do you run?')

if(d4a == 1){
    console.log('You rolled a 1 and ran to the right!')
} else if(d4a == 2){
    console.log('You rolled a 2 and run to the left!')
} else if(d4a == 3){
    console.log('You have rolled a 3 and retreat behind you, into the woods!')
} else if(d4a == 4){
    console.log('You rolled a 4 and after hesitating a moment you run straight for the Cornicopia')
}

if(d4a == 1){
    console.log('You push past the person on the plate to your right and He takes a swing at you. You dodge and continue towards the ocean area')
} else if(d4a == 2){
    console.log('You run as fast as you can towards the left. As you push past the person there, He falls and twists an ankle. This could end up being a fatal injury for Him.')
} else if(d4a == 3){
    console.log('As you take the cowards way out and run towards the woods you trip, fall and ultimately die. ReRoll and try again')
} else{
    console.log('You absolutely HAUL towards the cornicopia and grab the first bag you see. What do you do next?')
}