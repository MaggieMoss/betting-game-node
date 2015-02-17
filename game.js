  var prompt = require('sync-prompt').prompt;

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
       var bet = commandGetter("What is your bet? ");
       var guess = commandGetter("What is your guess? ");

       if(guess !== number) {
        if (guess == (number + 1) || guess == (number - 1)) {
          console.log("So close! You were off by one! Keep your bet... this time.");
          console.log("Current Balance: " + this.money);
          BettingGame.start();
        } else {
         console.log("Oops! The number was " + number + "! You lose your bet!");
         this.money -= bet
         console.log("Current Balance: " + this.money);
         BettingGame.start();
       };

     } else {
      console.log("Jackpot! You got it! You've doubled your money!");
      this.money = this.money * 2
      console.log("Current Balance: " + this.money);
      BettingGame.start();
    }
  } else {
    console.log("Uh-oh. Looks like you're out of cash. Game over.")
  }
  console.log(this.money)
},
}

BettingGame.start();




