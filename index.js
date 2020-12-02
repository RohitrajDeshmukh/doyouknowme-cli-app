var readlinelineSync=require("readline-sync")
var username = readlinelineSync.question("Whats your name ? ");
console.log("Wellcome " + username + " to DO YOU KNOW ROHTIRAJ!");
score=0;

function play(question,answer)
{
  var userans = readlinelineSync.question(question);

  if(userans===answer){
      console.log("you are right :) ");
      score=score+1;
  }
  else{
      console.log("you are wrong :( ");
      score=score-1;
  }
  console.log("your current scor is :",score);
  console.log("----------------------------");
}

var questions =[{
    question:"Who is your favourite superhero ?",
    answer:"superman"
},
{
    question:"which is your favaurite sad song ?",
    answer:"woh lamhe"
}]

for(var i=0; i<questions.length;i++)
{
    var currentquestion = questions[i];
    play(currentquestion.question,currentquestion.answer);
}

console.log("YAY! YOUR SCORE IS : ", score);