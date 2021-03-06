  var prompt = require('sync-prompt').prompt;
  var colors = require('colors');
  var shouldExit = function(command) {
    if(command == 'exit') process.exit();
  }

  var commandGetter = function(msg) {
    msg = prompt(msg)
    shouldExit(msg)
    return msg
  }


  BettingGame = {
    money: 100, 
    start: function(){
      if(this.money > 1 ){
       var number = Math.floor((Math.random() * 10) + 1);
       var bet = commandGetter("What is your bet? ".magenta);
       var guess = commandGetter("What is your guess? ");

       if(guess !== number) {
        if (guess == (number + 1) || guess == (number - 1)) {
          console.log("So close! You were off by one! Keep your bet... this time.");
          console.log("Current Balance: " + this.money);
          BettingGame.start();
        } else {
         console.log("Oops! The number was ".red + number + "! You lose your bet!".red);
         this.money -= bet
         console.log("Current Balance: " + this.money);
         BettingGame.start();
       };

     } else {
      console.log("Jackpot! You got it! You've doubled your money!".green);
      this.money = this.money * 2
      console.log("Current Balance: " + this.money);
      BettingGame.start();
    }
  } else {
    console.log("Uh-oh. Looks like you're out of cash. Game over.".red)
  }
},
}

BettingGame.start();




