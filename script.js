"use strict";

let points = 0;

let userName = prompt("Hi, please enter your name if you wanna enter my website:");
console.log(userName);


  

function questionOne(){
  let fullName = "Paolo Armentano";
  console.log("hi");
  let myFullName = prompt("What's my full name? (first and last name)");

if(myFullName.toLowerCase() === fullName.toLowerCase()){
    alert("You are correct!");
    points ++;
} else{
    alert("Come on bro that was an easy one and you still got it wrong");
}
}


function questionTwo(){
  let myFavouritePet = "Cats";

let myPets = prompt("What's my favourite pet? (plural noun)");

if (myPets.toLowerCase().includes("cat")) {
    alert("You are correct!");
    points ++;
  } else {
    alert(`No, ${myPets} are nice, but I prefer cats.`);
  }
}


function questionThree(){

  let myMainInstrument = "Guitar";
  
  let guitarAnswer = prompt("What's the main instrument I play?");
  
  if(myMainInstrument.toLowerCase() === guitarAnswer.toLowerCase()){
      alert("You are correct!");
      points ++;
  } else{
      alert("Mate you can literally see the guitars behind me, how did you get that wrong.");
  }
}

function questionFour(){

  let placeOfBirth = "Italy";
  
  let coutryBirth = prompt("Which country was I born in?");
  
  if(placeOfBirth.toLowerCase() === coutryBirth.toLowerCase()){
      alert("You are correct!");
      points ++;
  } else{
      alert("How did you get that wrong? Look at my name. Anyway, I'm italian.");
  }
};

function questionFive(){

  let carColour = "Black";
  
  let carGuess = prompt("What colour is my car?");
  
  if(carGuess.toLowerCase() === carColour.toLowerCase()){
      alert("You are correct!");
      points ++;
  } else{
      alert("Try again!");
  }
};

function questionSix(){

  let age = 28;
  let attempts = 4;
  
  while (attempts > 0) {
    let ageGuess = parseInt(prompt("How old am I? (You have " + attempts + " guesses)"));
  
    if (ageGuess === age) {
      alert("You are correct!");
      points ++;
      break; // Exit the loop if the guess is correct
    } else if (ageGuess >= 29) {
      alert("Wrong! Do I really look that old? That's borderline offensive. Try again.");
    } else if (ageGuess <= 27) {
      alert("Wrong! Do I really look that young? Try again.");
    }
  
    attempts--;
  }
  // If all attempts are used and the age is not guessed correctly
  if (attempts === 0) {
    alert("Sorry, you've used all your attempts. My actual age is " + age + ".");
  }
};

function questionSeven(){

  let myFavouriteSport = ["Football"," MMA"," Basketball"," Boxing"," Skiing"," Rugby", " Swimming", " Tennis", " Volleyball", " Cricket", " Golf", " Running", " Cycling"];
  let attemptsSport = 6;
  
  while (attemptsSport > 0) {
    let sportGuess = prompt("What's my favourite sport? These are your options: " + myFavouriteSport +  " (You have " + attemptsSport + " guesses)".toLowerCase());
  
    if (sportGuess === "mma") {
      alert("You are correct!");
      points ++;
      break; // Exit the loop if the guess is correct
    } else {
      alert("Wrong! Try again.");
    }
  
    attemptsSport--;
  }
  
  // If all attempts are used and the age is not guessed correctly
  if (attemptsSport === 0) {
    alert("Sorry, you've used all your attempts. My actual favourite sport is MMA.");
  }
};



function quiz() {
  alert(`Hi ${userName}, wanna take a quiz about me?`);

  questionOne();
  questionTwo();
  questionThree();
  questionFour();
  questionFive();
  questionSix();
  questionSeven();

  alert(`You scored ${points} points`);
}