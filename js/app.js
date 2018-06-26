

// create classes for hunger, sleepiness, boredom

// Have a setInterval for age

// time increases how quickly they die
  // if hunger, sleepiness, or boredom hits 10
  // pet dies 

// looks left or right depending on happiness

class Tamagotchi {
  constructor(name, age, hunger, boredom, sleepiness) {
    this.name = prompt("Name this thing", this.name); //use a form
    this.age = 0;
    this.hunger = 0;
    this.boredom = 0;
    this.sleepiness = 0;
  }
  feed(){
    console.log("nom nom nom" + reduceHunger);

  }
  play(){
    console.log("I love you, human" + reduceBoredom);

  }
  sleep(){
    console.log("ZZZZZZZZZ" + reduceSleepiness);
  }
}

const stanley = new Tamagotchi();



















