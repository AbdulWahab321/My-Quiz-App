var canvas
var gameState=0;
var contestantCount
var form,contestants,game,player,allContestants;
var database,greeting,answer,input1,input;
function setup(){
  canvas = createCanvas(850,400);
  database=firebase.database();
  game=new Quiz();
  game.getState();
  game.start();
  


}
function draw(){
  background("pink");

  if(contestantCount===4){
    gameState=1
  }
  if(gameState===1){
    contestantCount=0
    game.play()
  }
}

  

