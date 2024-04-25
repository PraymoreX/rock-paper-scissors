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
   

   let btn = document.querySelectorAll("button");

   let rockbtn = document.querySelector("#rockbtn");
   let paperbtn = document.querySelector("#paperbtn");
   let scissorsbtn = document.querySelector("#scissorsbtn");
   let newgame = document.querySelector("#newgamebtn");

   let playerScoreText = document.querySelector("#playerscore");
   let computerScoreText = document.querySelector("#computerscore");

   let results = document.querySelector("h4");
   let declaration = document.querySelector("h5");


   //loop scores until either reaches 5

   let playerScore = 0;
   let computerScore = 0;

   if (playerScore === 5) {
    declaration.textContent = 'Congrats !! You are the winner !';
  } else if (computerScore === 5) {
    declaration.textContent = 'Oh no you lost...'
  };



    
   getComputerChoice();
   rockbtn.addEventListener("click", ifRock);

   function ifRock() {
    
    if(computerChoice === "rock"){
      playerScoreText.textContent = `Player Score: ${playerScore}`;
      computerScoreText.textContent = `Computer Score: ${computerScore}`;
      results.textContent = "Computer chose Rock,  It's a tie!";
        

    }
    else if(computerChoice === 'paper'){
        computerScore++;
        playerScoreText.textContent = `Player Score: ${playerScore}`;
        computerScoreText.textContent = `Computer Score: ${computerScore}`;
        results.textContent = "Computer chose Paper,  You lost!";
    }

    else if(computerChoice === 'scissors'){
      playerScore++;
      playerScoreText.textContent = `Player Score: ${playerScore}`;
      computerScoreText.textContent = `Computer Score: ${computerScore}`;
      results.textContent = "Computer chose Scissors,  You won!";
      
      
    }
    
   };

   getComputerChoice();
   

   paperbtn.addEventListener("click", ifPaper);
   function ifPaper() {
    
    if(computerChoice === "rock"){
      playerScore++;
      playerScoreText.textContent = `Player Score: ${playerScore}`;
      computerScoreText.textContent = `Computer Score: ${computerScore}`;
      results.textContent = "Computer chose Rock,  You win!";
    }

    else if(computerChoice === 'paper'){
      playerScoreText.textContent = `Player Score: ${playerScore}`;
      computerScoreText.textContent = `Computer Score: ${computerScore}`;
      results.textContent = "Computer chose Paper,  It's a tie!";

    }

    else if (computerChoice === 'scissors'){
      computerScore++;
      playerScoreText.textContent = `Player Score: ${playerScore}`;
      computerScoreText.textContent = `Computer Score: ${computerScore}`;
      results.textContent  ="Computer chose Scissors,  You lost!";
      
      
    }
    
   };

   getComputerChoice();
   


  scissorsbtn.addEventListener("click", ifScissors);
   function ifScissors() {
    
    if(computerChoice === "rock"){
      computerScore++;
      playerScoreText.textContent = `Player Score: ${playerScore}`;
      computerScoreText.textContent = `Computer Score: ${computerScore}`;
      results.textContent = "Computer chose Rock,  You lose!";

      }

    else if(computerChoice === 'paper'){
      playerScore++;
      playerScoreText.textContent = `Player Score: ${playerScore}`;
      computerScoreText.textContent = `Computer Score: ${computerScore}`;
      results.textContent = "Computer chose Paper,  You win!";
      
      }

    else if (computerChoice === 'scissors'){
      playerScoreText.textContent = `Player Score: ${playerScore}`;
      computerScoreText.textContent = `Computer Score: ${computerScore}`;
      results.textContent =  "Computer chose Scissors,  It's a tie!";
      
    }
    
  };
   newgame.addEventListener("click", () => {
    location.reload();
   })

   
   /* Game Results
if (playerScore === 5) {
  alert('Congrats !! You are the winner !')
} else if (computerScore === 5) {
  alert('Oh no you lost...')
// }*/
   
   


