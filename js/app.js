
let time = 0;

// use one picture until age 5, use that one until age 10, maybe another at 15?

class Tamagotchi {
  constructor(name, age, hunger, boredom, sleepiness) {
    // this.name = prompt("Name this thing", this.name);
    this.age = 0;
    // go up a year every 15 seconds
    this.hunger = 0;
    this.boredom = 0;
    this.sleepiness = 0;
    // one of three randomly goes up every 5 seconds
  }
  feed(){
  }

  play(){
  }

  sleep(){
  }

  die(){
    // if hunger, sleepiness, or boredom hits 10
    console.log("I thought you loved me")
  }
}

const birth = new Tamagotchi();


// Have a setInterval for time, age, stats

// looks left or right depending on happiness
  // makes sound?

$('.feed').on('click', (e) => {
  console.log("nom nom nom"); 
              //+ reduceHunger function by 1

});

$('.play').on('click', (e) => {
  console.log("I love you, human"); 
              //+ reduceBoredom function by 1

});

$('.sleep').on('click', (e) => {
  console.log("ZZZZZZZZZ"); 
              //+ reduceSleepiness function by 1

});


// const setTimer = () => {

//   const intervalId = setInterval(() => {
//     time--;
//     if(time === 0){
//       clearInterval(intervalId); // stops timer
//       round++
//     }
//     $('#timer').text('timer: ' + time + 's');

//   }, 1000); // milliseconds
// }










