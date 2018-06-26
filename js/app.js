
let time = 0;

// use one picture until age 5, use that one until age 10, maybe another at 15?

class Tamagotchi {
  constructor(name, age, hunger, boredom, sleepiness) {
    // this.name = prompt("Name this thing", this.name);
    // form?
    this.age = 0;
    // go up a year every 15 seconds
    this.hunger = 0;
    this.boredom = 0;
    this.sleepiness = 0;
    // How to display these?
    // if >= 7, flash red
  }
  feed(){
    this.hunger--;
    console.log(this.hunger);
    // make ceiling and floor for values
  }

  play(){
    this.boredom--;
    console.log(this.boredom);
  }

  sleep(){
    this.sleepiness--;
    console.log(this.sleepiness);
  }
   // one of three randomly goes up every 5 seconds
   // Math.floor(Math.random()); -- see poke-a-square
  die(){
    // if hunger, sleepiness, or boredom hits 10
    console.log("I thought you loved me")
  }
}

const stanley = new Tamagotchi();


// Have a setInterval for time, age, stats

// Display age and stats

// looks left or right depending on happiness
  // makes sound?

$('.feed').on('click', (e) => {
  console.log("nom nom nom");
  stanley.feed(); 
});

$('.play').on('click', (e) => {
  console.log("I love you, hu-man");
  stanley.play(); 
});

$('.sleep').on('click', (e) => {
  console.log("ZZZZZZZZZ");
  stanley.sleep(); 
              
});


// const setTimer = () => {

//   const intervalId = setInterval(() => {
//     time++;

//     if(dead){
//       clearInterval(intervalId); // stop timer
//     }
//     $('#timer').text('timer: ' + time + 's');

//   }, 1000); // milliseconds
// }










