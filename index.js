var randomNumber1 = Math.floor(Math.random()*6) + 1;
var newSrc1 = "./images/dice"+randomNumber1+".png";
var leftImg = document.querySelectorAll("img")[0];
leftImg.setAttribute("src", newSrc1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var newSrc2="./images/dice"+ randomNumber2+".png";
var rightImg = document.querySelectorAll("img")[1];
rightImg.setAttribute("src", newSrc2);

if (randomNumber1>randomNumber2){
    var  newH1Tag = document.querySelector("h1");
    newH1Tag.innerHTML="Sherry wins!"
} else if(randomNumber2>randomNumber1){
     var newH1Tag= document.querySelector("h1");
    newH1Tag.innerHTML="Kishita wins!"
} else {
    var newH1Tag = document.querySelector("h1");
    newH1Tag.innerHTML="It's a draw";


}

