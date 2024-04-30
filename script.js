/*function getComputerChoice() {
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
   */
   

   let btn = document.querySelectorAll("button");

   let rockbtn = document.querySelector("#rockbtn");
   let paperbtn = document.querySelector("#paperbtn");
   let scissorsbtn = document.querySelector("#scissorsbtn");
   let newgame = document.querySelector("#newgamebtn");
   

   


   let playerScoreText = document.querySelector("#playerscore");
   let computerScoreText = document.querySelector("#computerscore");

   let results = document.querySelector("h4");
   let declaration = document.querySelector("h5");

   let resultstext = document.querySelector("h3");
 

   let playerScore = 0;
   let computerScore = 0;

   newgame.style.display = "none";

   

   
   rockbtn.addEventListener("click", ifRock);
   
   

   function ifRock() {

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

    
    if(computerChoice === "rock"){
      playerScoreText.textContent = `Player Score: ${playerScore}`;
      computerScoreText.textContent = `Computer Score: ${computerScore}`;
      results.textContent = "Computer chose Rock,  It's a tie!";
      if (playerScore === 5) {
        declaration.textContent = 'Congrats !! You are the winner !';
      } else if (computerScore === 5) {
        declaration.textContent = 'Oh no you lost...'
      };
      if (playerScore === 5 || computerScore === 5) {
        playerScoreText.style.display = "none";
        computerScoreText.style.display = "none";
        rockbtn.style.display = "none";
        paperbtn.style.display = "none";
        scissorsbtn.style.display = "none";
        newgame.style.display = "block";
        resultstext.textContent = "Final Results:";
        
      
    }
        

    }
    else if(computerChoice === 'paper'){
        computerScore++;
        playerScoreText.textContent = `Player Score: ${playerScore}`;
        computerScoreText.textContent = `Computer Score: ${computerScore}`;
        results.textContent = "Computer chose Paper,  You lost!";
        if (playerScore === 5) {
          declaration.textContent = 'Congrats !! You are the winner !';
        } else if (computerScore === 5) {
          declaration.textContent = 'Oh no you lost...'
        };
        if (playerScore === 5 || computerScore === 5) {
          playerScoreText.style.display = "none";
          computerScoreText.style.display = "none";
          rockbtn.style.display = "none";
          paperbtn.style.display = "none";
          scissorsbtn.style.display = "none";
          newgame.style.display = "block";
          resultstext.textContent = "Final Results:";
        
      }
    }

    else if(computerChoice === 'scissors'){
      playerScore++;
      playerScoreText.textContent = `Player Score: ${playerScore}`;
      computerScoreText.textContent = `Computer Score: ${computerScore}`;
      results.textContent = "Computer chose Scissors,  You won!";
      if (playerScore === 5) {
        declaration.textContent = 'Congrats !! You are the winner !';
      } else if (computerScore === 5) {
        declaration.textContent = 'Oh no you lost...'
      };
      if (playerScore === 5 || computerScore === 5) {
        playerScoreText.style.display = "none";
        computerScoreText.style.display = "none";
        rockbtn.style.display = "none";
        paperbtn.style.display = "none";
        scissorsbtn.style.display = "none";
        newgame.style.display = "block";
        resultstext.textContent = "Final Results:";
      
    }
  }
      
    };

   
   

  paperbtn.addEventListener("click", ifPaper);
   
   function ifPaper() {

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
    
    if(computerChoice === "rock"){
      playerScore++;
      playerScoreText.textContent = `Player Score: ${playerScore}`;
      computerScoreText.textContent = `Computer Score: ${computerScore}`;
      results.textContent = "Computer chose Rock,  You win!";
      if (playerScore === 5) {
        declaration.textContent = 'Congrats !! You are the winner !';
      } else if (computerScore === 5) {
        declaration.textContent = 'Oh no you lost...'
      };
      if (playerScore === 5 || computerScore === 5) {
        playerScoreText.style.display = "none";
        computerScoreText.style.display = "none";
        rockbtn.style.display = "none";
        paperbtn.style.display = "none";
        scissorsbtn.style.display = "none";
        newgame.style.display = "block";
        resultstext.textContent = "Final Results:";
      
    }
    }

    else if(computerChoice === 'paper'){
      playerScoreText.textContent = `Player Score: ${playerScore}`;
      computerScoreText.textContent = `Computer Score: ${computerScore}`;
      results.textContent = "Computer chose Paper,  It's a tie!";
      if (playerScore === 5) {
        declaration.textContent = 'Congrats !! You are the winner !';
      } else if (computerScore === 5) {
        declaration.textContent = 'Oh no you lost...'
      };
      if (playerScore === 5 || computerScore === 5) {
        playerScoreText.style.display = "none";
        computerScoreText.style.display = "none";
        rockbtn.style.display = "none";
        paperbtn.style.display = "none";
        scissorsbtn.style.display = "none";
        newgame.style.display = "block";
        resultstext.textContent = "Final Results:";
      
    }

    }
  

    else if (computerChoice === 'scissors'){
      computerScore++;
      playerScoreText.textContent = `Player Score: ${playerScore}`;
      computerScoreText.textContent = `Computer Score: ${computerScore}`;
      results.textContent  ="Computer chose Scissors,  You lost!";
      if (playerScore === 5) {
        declaration.textContent = 'Congrats !! You are the winner !';
      } else if (computerScore === 5) {
        declaration.textContent = 'Oh no you lost...'
      };
      if (playerScore === 5 || computerScore === 5) {
        playerScoreText.style.display = "none";
        computerScoreText.style.display = "none";
        rockbtn.style.display = "none";
        paperbtn.style.display = "none";
        scissorsbtn.style.display = "none";
        newgame.style.display = "block";
        resultstext.textContent = "Final Results:";
      
    }
      
  }
    
    
   };
   
  
  scissorsbtn.addEventListener("click", ifScissors);

   function ifScissors() {

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
    
    if(computerChoice === "rock"){
      computerScore++;
      playerScoreText.textContent = `Player Score: ${playerScore}`;
      computerScoreText.textContent = `Computer Score: ${computerScore}`;
      results.textContent = "Computer chose Rock,  You lose!";

      if (playerScore === 5) {
        declaration.textContent = 'Congrats !! You are the winner !';
      } else if (computerScore === 5) {
        declaration.textContent = 'Oh no you lost...'
      };
      if (playerScore === 5 || computerScore === 5) {
        playerScoreText.style.display = "none";
        computerScoreText.style.display = "none";
        rockbtn.style.display = "none";
        paperbtn.style.display = "none";
        scissorsbtn.style.display = "none";
        newgame.style.display = "block";
        resultstext.textContent = "Final Results:";
      
    }
  }

      

    else if(computerChoice === 'paper'){
      playerScore++;
      playerScoreText.textContent = `Player Score: ${playerScore}`;
      computerScoreText.textContent = `Computer Score: ${computerScore}`;
      results.textContent = "Computer chose Paper,  You win!";
    
      if (playerScore === 5) {
        declaration.textContent = 'Congrats !! You are the winner !';
      } else if (computerScore === 5) {
        declaration.textContent = 'Oh no you lost...'
      };
      if (playerScore === 5 || computerScore === 5) {
        playerScoreText.textContent.style.display = "none";
        computerScoreText.style.display = "none";
        rockbtn.style.display = "none";
        paperbtn.style.display = "none";
        scissorsbtn.style.display = "none";
        newgame.style.display = "block";
        resultstext.textContent = "Final Results:";
      
    }
  }
      
      

    else if (computerChoice === 'scissors'){
      playerScoreText.textContent = `Player Score: ${playerScore}`;
      computerScoreText.textContent = `Computer Score: ${computerScore}`;
      results.textContent =  "Computer chose Scissors,  It's a tie!";

      if (playerScore === 5) {
        declaration.textContent = 'Congrats !! You are the winner !';
      } else if (computerScore === 5) {
        declaration.textContent = 'Oh no you lost...'
      };
      if (playerScore === 5 || computerScore === 5) {
        playerScoreText.style.display = "none";
        computerScoreText.style.display = "none";
        rockbtn.style.display = "none";
        paperbtn.style.display = "none";
        scissorsbtn.style.display = "none";
        newgame.style.display = "block";
        resultstext.textContent = "Final Results:";
      
    }
    
  }
};
   newgame.addEventListener("click", () => {
    location.reload();
   })
