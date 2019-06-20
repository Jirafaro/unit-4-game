// Define Variables 
let GoalScore = 0;
let gem1 = 0;
let gem2 = 0;
let gem3 = 0;
let gem4 = 0;
let currentscore = 0;
let wins = 0;
let losses = 0;
// Start the game with random objective score 
console.log(GoalScore);
function randomgoal() {
    GoalScore = Math.floor(Math.random()* 100)+19 ;
    gem1 = Math.floor(Math.random()*11)+1;
    gem2 = Math.floor(Math.random()*11)+1;
    gem3 = Math.floor(Math.random()*11)+1;
    gem4 = Math.floor(Math.random()*11)+1;
}
randomgoal();
console.log(GoalScore);
// dom Manipulation 
    //display random objective score in score
    $('#GoalScore').html('Goal Score: '+ GoalScore);
// Set random values for each button
$('#b1').on('click', function(){
    // add to current points block
    currentscore = currentscore + gem1;
    $('#pointsblock').html(' '+ currentscore);
    if (currentscore === GoalScore){
        alert('You Win!');
        wins ++;
        $('#Wins').html('Wins: '+ wins + '<br>'+'<hr>'+'Losses: '+ losses)
        randomgoal();
        currentscore = 0;
        $('#GoalScore').html('Goal Score: '+GoalScore);
        $('#pointsblock').html(currentscore);
    } else if(currentscore > GoalScore){
        alert('You Lose!');
        losses ++;
        $('#Wins').html('Wins: '+ wins + '<br>'+'<hr>'+'Losses: '+ losses);
        randomgoal();
        currentscore = 0;
        $('#GoalScore').html('Goal Score: '+GoalScore);
        $('#pointsblock').html(currentscore);
    }
})
$('#b2').on('click', function(){
    // add to current points block
    currentscore = currentscore + gem2;
    $('#pointsblock').html(' '+ currentscore);
    if (currentscore === GoalScore){
        alert('You Win!');
        wins ++;
        $('#Wins').html('Wins: '+ wins + '<br>'+'<hr>'+'Losses: '+ losses);
        randomgoal();
        currentscore = 0;
        $('#GoalScore').html('Goal Score: '+GoalScore);
        $('#pointsblock').html(currentscore);
    } else if(currentscore > GoalScore){
        alert('You Lose!');
        losses ++;
        $('#Wins').html('Wins: '+ wins + '<br>'+'<hr>'+'Losses: '+ losses);
        randomgoal();
        currentscore = 0;
        $('#GoalScore').html('Goal Score: '+GoalScore);
        $('#pointsblock').html(currentscore);
    }
})
$('#b3').on('click', function(){
    // add to current points block
    currentscore = currentscore + gem3;
    $('#pointsblock').html(' '+ currentscore);
    if (currentscore === GoalScore){
        alert('You Win!');
        wins ++;
        $('#Wins').html('Wins: '+ wins + '<br>'+'<hr>'+'Losses: '+ losses);
        randomgoal();
        currentscore = 0;
        $('#GoalScore').html('Goal Score: '+GoalScore);
        $('#pointsblock').html(currentscore);
    } else if(currentscore > GoalScore){
        alert('You Lose!');
        losses ++;
        $('#Wins').html('Wins: '+ wins + '<br>'+'<hr>'+'Losses: '+ losses);
        randomgoal();
        currentscore = 0;
        $('#GoalScore').html('Goal Score: '+GoalScore);
        $('#pointsblock').html(currentscore);
    }
})
$('#b4').on('click', function(){
    // add to current points block
    currentscore = currentscore + gem4;
    $('#pointsblock').html(' '+ currentscore);
    if (currentscore === GoalScore){
        alert('You Win!');
        wins ++;
        $('#Wins').html('Wins: '+ wins + '<br>'+'<hr>'+'Losses: '+ losses);
        randomgoal();
        currentscore = 0;
        $('#GoalScore').html('Goal Score: '+GoalScore);
        $('#pointsblock').html(currentscore);
    } else if(currentscore > GoalScore){
        alert('You Lose!');
        losses ++;
        $('#Wins').html('Wins: '+ wins + '<br>'+'<hr>'+'Losses: '+ losses);
        randomgoal();
        currentscore = 0;
        $('#GoalScore').html('Goal Score: '+GoalScore);
        $('#pointsblock').html(currentscore);
    }
})





 
