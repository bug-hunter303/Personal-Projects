
        const score = JSON.parse(localStorage.getItem('score')) || {
                Win: 0,
                Loss: 0,
                Tie: 0,
            };
        
        updateScoreElement(); 

       /* if (score === null){ we're using truthy , falsy mathi ma , simplificcation of code 
            score = {
                Win: 0,
                Loss: 0,
                Tie: 0,
            };        
        } */ 

        function playGame(playerMove){
        const computerMove=pickComputerMove();
        let result ='';

        if (playerMove === 'PAPER'){
            if (computerMove === 'ROCK'){
                result ='Win';
                
            }else if (computerMove === 'PAPER '){
                result='Tie';
            }else if (computerMove === 'SCISSORS'){
                result='Lose';
            }

        } else  if (playerMove === 'SCISSORS '){
            if (computerMove === 'ROCK'){
                result ='Lose';
            }else if (computerMove === 'PAPER '){
                result='Win';
            }else if (computerMove === 'SCISSORS'){
                result='Tie';
            }
 
        } else if (playerMove ==='ROCK'){
            if (computerMove === 'ROCK'){
                result ='Tie';
            }
            else if (computerMove === 'PAPER'){
                result ='Lose';
            }
            else if (computerMove === 'SCISSORS'){
                result ='Win';
            }
        }

        if ( result === 'Win') {
            score.Win++;
        }else if(result === 'Lose'){
            score.Loss++;
        }else{
            score.Tie++;
        }
        localStorage.setItem('score', JSON.stringify(score));

        updateScoreElement();
        
        document.querySelector('.js-Result').innerHTML = 
        result;

        document.querySelector('.js-Moves').innerHTML = `You <img src = "images/${playerMove}-emoji.png" 
        class="move-icon"> 
        <img src="images/${computerMove}-emoji.png" class="move-icon">Computer` ;
        
        
       
        }
        

        function updateScoreElement(){
            document.querySelector('.js-Score').innerHTML = 
            `Wins:${score.Win} Loss:${score.Loss} Tie:${score.Tie}`;

        }
        
        function pickComputerMove() {
            const randomNumber = Math.random();
            let computerMove = '';

            if (randomNumber >=0 && randomNumber < 1/3) {
            computerMove ='ROCK';
            } else if ( randomNumber >= 1/3 && randomNumber <2/3){
            computerMove = 'PAPER';
            } else if (randomNumber >=2/3 && randomNumber <1){
            computerMove ='SCISSORS';
            }
            
            return computerMove;
        
           
            }
       
  