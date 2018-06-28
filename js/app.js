

// animate eyes to follow cursor

class Tamagotchi {
  constructor(petName) {
    this.name = petName;
    this.age = 0;
    this.hunger = 0;
    this.boredom = 0;
    this.sleepiness = 0;
    // if >= 7, flash red

      // if(this.hunger >= 7, this.boredom >= 7, this.sleepiness >= 7,).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  }

  feed(){
    if(stanley.hunger > 0){
    this.hunger--;
    console.log(this.hunger);
    this.updateStats();
    } else {

    }
  }

  play(){
    if(stanley.boredom > 0){
    this.boredom--;
    console.log(this.boredom);
    this.updateStats();
    } else {
      
    }
  }

  sleep(){
    if(stanley.sleepiness > 0){
    this.sleepiness--;
    console.log(this.sleepiness);
    this.updateStats();
    } else {
      
    }
  }

  die(timerId){
    console.log("I thought you loved me");

      // animation & message to user
  }

  updateStats(){
    $('.hunger').text("Hunger: " + this.hunger);
    console.log(this.hunger);
    $('.boredom').text("Boredom: " + this.boredom);
    console.log(this.boredom);
    $('.sleepiness').text("Sleepiness: " + this.sleepiness);
    console.log(this.sleepiness);
  }
}

let stanley;
$('#petName').on('submit', (e) => {
  e.preventDefault();
  startTimer();
  const userInput = $('#input-box').val(); //goes to constructor
  console.log(userInput);
  $('.name').text("Name: " + userInput);
  $('.sprite').css('opacity', '1');

  stanley = new Tamagotchi(userInput, 0, 0, 0, 0);
  $('#petName').remove();
});


// looks left or right depending on happiness
  // makes sound?


$('.feed').on('click', (e) => {
  console.log("nom nom nom");
  $('#messages').text("NOM NOM NOM");
  // $('.food img').attr('src', 'https://stickeroid.com/uploads/pic/full/43e5edd74f04b97370b64137564705dea027d0a8.png');
  // change opacity
  stanley.feed(); 
});

$('.play').on('click', (e) => {
  console.log("I love you, hooman");
  $('#messages').text("I love you, hooman <3");
  // $('.tennis img').attr('src', 'http://www.stickpng.com/assets/images/580b585b2edbce24c47b2b90.png');
  // change opacity of ".tennis img" to 1
  // setTimer(()=>{
    // change opacity back to 0
  // }, 2000)
  stanley.play(); 
});

$('.sleep').on('click', (e) => {
  console.log("ZZZZZZZZZ");
  $('#messages').text("ZZZZZZZZZ");
  stanley.sleep();       
});



let time = 0;

const startTimer = () => {

const statArray = ['hunger', 'boredom', 'sleepiness'];

  const intervalId = setInterval(() => {
    time++;
      let randStat = Math.floor(Math.random() *3);
      if(time % 5 == 0){
        const stat = statArray[randStat];
          console.log(stanley);
      
      if(stat === 'hunger'){
        stanley.hunger++;
        $('.hunger').text("Hunger: " + stanley.hunger);
      } else if (stat === 'boredom'){
        stanley.boredom++;
        $('.boredom').text("Boredom: " + stanley.boredom);
      } else if(stat === 'sleepiness'){ 
        stanley.sleepiness++;
        $('.sleepiness').text("Sleepiness: " + stanley.sleepiness);
      } 
    }
      if(stanley.hunger === 10 || stanley.boredom === 10 || stanley.sleepiness === 10){
          clearInterval(intervalId);
          stanley.die();
          // death image - src="https://i.imgur.com/OLvZdPi.jpg"
          alert("I thought you loved me");
      }
      if(time % 15 == 0){
        stanley.age++
        $('.age').text("Age: " + stanley.age);
      }
      if (stanley.age < 5){
          $('.sprite').attr('src', 'http://neeshdental.com/wp-content/uploads/2017/04/1-1.png');
          $('body').css('background-color', '#c6c5c0');

        } else if (stanley.age >= 15){
          stanley.die();
          alert("I am old, and now must die");
          clearInterval(intervalId);

        } else if (stanley.age >= 10){
          $('.sprite').attr('class', 'adult');
            $('.adult').attr('src', 'https://pbs.twimg.com/media/Cht2-DwW0AEonx2.jpg');
            $('body').css('background-color', '#ffffff');

        } else if (stanley.age >= 5){
          $('.sprite').attr('src', 'https://media.giphy.com/media/3o7ZerYeefOIXGl1Xq/giphy.gif');
          $('body').css('background-color', '#d763ae');
        } 

        console.log(time);
    $('#timer').text('timer: ' + time + 's');

  }, 250); // milliseconds
}









