function guessANumber(input){
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let computerGuess = Math.floor(Math.random() * 100);

    let guess = input;
    let recursiveAsyncReadLine = function (){
        readline.question('Guess the number(0-100): ' , number =>{
        guess = Number(number);
        });

    }
    recursiveAsyncReadLine();
       
    
    if(guess <= 100 && guess >= 0 ){
        if(guess == computerGuess){
            console.log(' \x1b[32m You guess it! \x1b[0m');
            return readline.close();
        }else if(guess < computerGuess){
            console.log('\x1b[31m Too low! \x1b[0m');
            recursiveAsyncReadLine();
        }else if(guess > computerGuess){
            console.log(' \x1b[31mToo High! \x1b[0m');
            recursiveAsyncReadLine();
        }
    }else{
        console.log(' \x1b[33m Invalid input! Try again... \x1b[0m');
        recursiveAsyncReadLine();
    }
}

guessANumber(14)