const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';
let gameIsRunning = false;
// const start = function (){
// console.log('Game is Starting....');
// }

// const person ={
//     name: 'Max',
//     greet: function greet(){
//         console.log('hello there!');
//     }
// }
// console.dir(startGame);

const getPlayerChoice = function(){
    const selection = prompt(`${ROCK} , ${PAPER} or ${SCISSORS}`, ' ').toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS){
        alert(`Invalid Choice! We Chose ${DEFAULT_USER_CHOICE} for you!`);
        // return DEFAULT_USER_CHOICE;
        return;
    }
    return selection;
}

const getComputerChoice =  ()=> {
    const randomValue = Math.random();
    if(randomValue < 0.34){
        return ROCK;
    }else if (randomValue < 0.67 ) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

const getWinner =  (pcChoice, playerChoice= DEFAULT_USER_CHOICE) => {
    if(pcChoice === playerChoice){
        return RESULT_DRAW;
    } else if (pcChoice === ROCK && playerChoice === PAPER || pcChoice === PAPER && playerChoice === SCISSORS || pcChoice === SCISSORS && playerChoice === ROCK  ){
        return RESULT_PLAYER_WINS;
    } else {
        return RESULT_COMPUTER_WINS;
    }
    
    
}
startGameBtn.addEventListener('click',() =>{
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log('Game is Starting....');
    const playerSelection = getPlayerChoice();
    const computerChoice = getComputerChoice();
    let winner;
    if(playerSelection){
        winner = getWinner(computerChoice, playerSelection);
    }else{
        winner =getWinner(computerChoice);
    }
    let message =`You picked ${playerSelection || DEFAULT_USER_CHOICE }, computer picked ${computerChoice}, therefore `;
   if(winner === RESULT_DRAW){
        message = message + 'you had a draw'; 
   }else if (winner === RESULT_PLAYER_WINS){
    message = message + 'you won!';
   } else {
    message = message + 'computer won!'
   }
   alert(message);
   gameIsRunning=false;
});

//not relate to the game
const combine = (resulthandler,operation, ...numbers)=>{
    const validateNumber =(number)=>{
        return isNaN(number) ? 0 : number;
           
    };
 let sum =0;
 for (const num of numbers){
    if(operation === 'SUM'){
        sum +=validateNumber(num);
    }else {
        sum -= validateNumber(num);
    }
   
 }
resulthandler(sum, 'The result after adding all numbers is:');
};

// const substractUp = function(resulthandler){
//     let sum =0;
//     for (const num of numbers){
//         sum-=num;
//     }
//     resulthandler(sum), 'The result after adding all numbers is:';
// }
const showResult= (  messageText, result) => {
    alert(messageText+ " "  + result)
}


combine(showResult.bind(this, 'The result after adding all numbers is'),'ADD', 1, 5, 10, -3,6,10);
combine(showResult.bind(this, 'The result after adding all numbers is'), 'ADD',5,10,-3,6,10,25,88);
combine(showResult.bind(this, 'The result after subtracting all numbers is'),'SUBTRACT' ,1, 10, 15,20);
console.log (showResult(1,10,15,20));