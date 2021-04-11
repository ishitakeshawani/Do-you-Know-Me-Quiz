var readlinesync = require("readline-sync");

var score = 0;
var username = readlinesync.question("what's your name?   \n");
console.log("\n");
console.log("welcome "+ username + " to DO YOU KNOW Ishita? \n");


function play(question,answer,option){
  var userAnswer = readlinesync.question(question);
 
  if(userAnswer == answer){
    console.log("right!");
    score = score + 1;
  }else{
    console.log("wrong;(");
  }
  console.log("current score: ",score);
  console.log("-------------------");
}

var questions = [
  {
  question: "where do I live?  \n",
  answer:"sihor",
  
  },
{
  question: "what is my favourite color?  \n",
  answer: "blue"
},
{
  question: "My favourite outdoor game?  \n",
  answer: "badminton"
},

];

for(var i=0;i<questions.length;i++){
  var cQues = questions[i];
  play(cQues.question,cQues.answer,cQues.option); 
}

console.log("yehh! You Scored:  ",score);
