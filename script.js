'use strict';

//console.log( document.querySelector('.message').textContent);//* used to get document from the dom like classes or ids

//document.querySelector('.message').textContent = 'correct number!🎉'//* used to add text to the element we got from the dom

//console.log( document.querySelector('.message').textContent);


//document.querySelector('.guess').value = 25; //* used to insert value inside input element
//console.log(document.querySelector('.guess').value);


//! clicks event and adding event listenner

let secretNumber = Math.trunc(Math.random()* 20) + 1; // we created a variables number which inside we used Math.random to gives a random number and multiplied by 20 to gives us a random number from 0 to 20 and Math.trunc to remove decimals and added plus one to say we wnat it to include number 20 as well 
let score = 20
let highscore = 0

document.querySelector('.check').addEventListener('click', function(){ // we added an event on the check button and this event is a function that shows us what value is inside the input field and we added this value to a variable called guess

   const guess = Number (document.querySelector('.guess').value);
   

   if(!guess){
       document.querySelector('.message').textContent ='No number'; //* when there is no number in the input field
   }else if(guess=== secretNumber){
    
    document.querySelector('.message').textContent = 'correct number!🎉'; 
    
    document.querySelector('body').style.backgroundColor = '#60b347'; //* we are changing the backgroundColor
    
    document.querySelector('.number').style.width = '30rem';
    
    document.querySelector('.number').textContent= secretNumber;

    if (score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }

   }else if(guess > secretNumber){ // if the guess number is greater than secret number  and score is greater than 1 we want the message to read too high! and the score to be decreasing and if score is less than 1 we want the message to show you lost and score to show 0
       if(score > 1){
        document.querySelector('.message').textContent = 'too high!';
        score--;
        document.querySelector('.score').textContent = score;
    
       }else{
        document.querySelector('.message').textContent = 'you lost the game!';
        
        document.querySelector('.score').textContent = 0;
    

       }
    
   }else if(guess < secretNumber){// if the guess number is less than secretNumber and score is greater than 1 we want the message to show too low! and the to be be decreasing and if the score is less than one we want the message to read you lost and score show 0
       if (score > 1){
        document.querySelector('.message').textContent = 'too low!';
        score--;
        document.querySelector('.score').textContent = score;
    
       }else{
        document.querySelector('.message').textContent = 'you lost the game!';
        
        document.querySelector('.score').textContent = 0;
    
       }
    
   }
    
})

document.querySelector('.again').addEventListener('click', function(){
       
       score = 20
       secretNumber = Math.trunc(Math.random()* 20) + 1;
    
        document.querySelector('.score').textContent = score;
        
        document.querySelector('.number').textContent = '?';

        document.querySelector('.message').textContent = 'Start guessing...';

        document.querySelector('body').style.backgroundColor = '#222';

        document.querySelector('.number').style.width = '15rem'
        document.querySelector('.guess').value = ''; 
    
});


