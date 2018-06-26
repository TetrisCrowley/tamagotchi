
let time = 0;

class Tamagotchi {
  constructor(name, age, hunger, boredom, sleepiness) {
    this.name = prompt("Name this thing", this.name);
    this.age = 0;
    this.hunger = 0;
    this.boredom = 0;
    this.sleepiness = 0;
  }
  feed(){
    $('.feed').on('click', (e) => {
    console.log("nom nom nom" + reduceHunger);

    });
  }

  play(){
    $('.play').on('click', (e) => {
    console.log("I love you, human" + reduceBoredom);

    });
  }

  sleep(){
    $('.sleep').on('click', (e) => {
    console.log("ZZZZZZZZZ" + reduceSleepiness);

    });
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










