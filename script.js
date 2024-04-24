function getComputerChoice() {
    let ComputerNum = Math.floor(Math.random() * 3); 
    if (ComputerNum === 0) {
      return 'rock'
    } 
    else if (ComputerNum === 1) {
      return 'paper'
    }
    else if (ComputerNum === 2) {
      return 'scissors'
    }
   };
   let computerChoice = getComputerChoice();
   console.log(computerChoice);

   let btn = document.querySelectorAll("button");

   let rockbtn = document.querySelector("#rockbtn");
   let paperbtn = document.querySelector("#paperbtn");
   let scissorsbtn = document.querySelector("#scissorsbtn");

   let playerScore = document.querySelector("#playerscore");
   let computerScore = document.querySelector("#computerscore");

   //loop scores until either reaches 5
   /*for(playerScore = 0; playerScore < 5; playerScore++) {
    do{
      playRound();
    } while(playerScore <= 5);


   }

   for(computerScore = 0; computerScore < 5; computerScore++) {
    do{
      playRound();
    } while(computerScore <= 5);


   }
   */


  

   

   rockbtn.addEventListener("click", ifRock);

   

   function ifRock() {
    
    if(computerChoice === "rock"){
        alert( "Computer chose Rock,  It's a tie!");
        location.reload();

    }
    else if(computerChoice === 'paper'){
        alert("Computer chose Paper,  You lost!");
        
      location.reload();
    }
    else if(computerChoice === 'scissors'){
      alert("Computer chose Scissors,  You won!");
      
    location.reload();
  }
   };

   paperbtn.addEventListener("click", ifPaper);
   function ifPaper() {
    
    if(computerChoice === "rock"){
        alert( "Computer chose Rock,  You win!");
       
        location.reload();

    }
    else if(computerChoice === 'paper'){
        alert("Computer chose Paper,  It's a tie!");
        location.reload();

    }
    else if (computerChoice === 'scissors'){
      alert("Computer chose Scissors,  You lose!");
      
      location.reload();
    }
   };


  scissorsbtn.addEventListener("click", ifScissors);
   function ifScissors() {
    
    if(computerChoice === "rock"){
        alert("Computer chose Rock,  You lose!");
        
        location.reload();
        

    }
    else if(computerChoice === 'paper'){
        alert("Computer chose Paper,  You win!");
      
        location.reload();

    }
    else if (computerChoice === 'scissors'){
      alert("Computer chose Scissors,  It's a tie!");
      location.reload();
    }
   

   // Game Results
if (playerScore === 5) {
  alert('Congrats !! You are the winner !')
} else if (computerScore === 5) {
  alert('Oh no you lost...')
}
   };
   


