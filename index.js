var randomnumber = Math.floor(Math.random()*6+1);
var randomnumber2 = Math.floor(Math.random()*6+1);
var randomImag = "images/dice" + randomnumber +".png";
var randomImag2 = "images/dice" + randomnumber2 +".png";
image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImag);
image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImag2);
if(randomnumber > randomnumber2){
  document.querySelector("h1").innerHTML="player 1 Wins";
}
else if (randomnumber2 > randomnumber){
  document.querySelector("h1").innerHTML="player 2 Wins";
}
else{
  document.querySelector("h1").innerHTML="Draw The Match";
}
