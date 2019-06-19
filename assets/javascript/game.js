// Define Variables 
let GoalScore;
let randomscore = [];
let currentscore = [];
let wins = [];
let losses = [];
// Start the game with random objective score 
function randomgoal() {
    let randomgoal = Math.floor(Math.random()*120);
    GoalScore = randomscore[randomgoal];
}
randomgoal();
console.log(randomgoal);
// dom Manipulation 
let docGoalScore = document.getElementById('GoalScore');
let docwins = document.getElementById('Wins'); // Will need to seperate out Losses later 
let doccurrentscore = document.getElementById('pointsblock');
    //display random objective score in score
// Set random values for each button
    // reset random value at start of game
    // set onclick to call randomvalue set @ start of game
    // add to current points block 
    // random score for buttons is hidden
// add win and loss tracker 
    // win if current score = random objective score
        // display alert you win
            // add +1 to win 
                //reset game
    // else lose if current score > random objective score
        // display alert you lost 
            // add +1 to losses
                //reset game