"use strict";

let userName = prompt("Hi, please enter your name if you wanna play a game");
console.log(userName);

alert(`Hi ${userName}, wanna take a quiz about me?`)

let fullName = "Paolo Armentano";

let myFullName = prompt("What's my full name? (first and last name)");

if(myFullName === fullName){
    alert("You are correct");
} else{
    alert("Come on bro that was an easy one and you still got it wrong");
}



let myFavouritePet = "Cats";

let myPets = prompt("What's my favourite pet? (plural noun)");

if(myFavouritePet === myPets){
    alert("You are correct");
} else{
    alert(`No, ${myPets} are nice, but I prefer cats`);
}



let myMainInstrument = "Guitar";

let guitarAnswer = prompt("What's the main instrument I play?");

if(myMainInstrument === guitarAnswer){
    alert("You are correct");
} else{
    alert("Mate you can literally see the guitars behind me, how did you get that wrong");
}



let placeOfBirth = "Italy";

let coutryBirth = prompt("Which country was I born in?");

if(placeOfBirth === coutryBirth){
    alert("You are correct");
} else{
    alert("How did you get that wrong? Look at my name");
}

// let age = 28;

// let ageGuess = prompt("How old am I? (You have 4 guesses)");

// if(placeOfBirth === coutryBirth){
//     alert("You are correct");
// } else{
//     alert("How did you get that wrong? Look at my name");
// }