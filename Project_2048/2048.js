function start(){
    var Starting_S = document.getElementById("Starting_S");
    var Game = document.getElementById("Game");
    var Control = document.getElementById("Control")

    Starting_S.style.display="none";
    Game.style.display="block";
    Control.style.display="block";   
}
function pause(){
    var Pause = document.getElementById("Pause");
    var Control = document.getElementById("Control");

    Pause.style.display="block";
    Control.style.display="none";
}
function resume(){
    var Pause = document.getElementById("Pause");
    var Control = document.getElementById("Control");

    Pause.style.display="none";
    Control.style.display="block";
}
function restart(){
    var Pause = document.getElementById("Pause");
    var Starting_S = document.getElementById("Starting_S");
    var element = document.getElementsByClassName("element");
    var Score = document.getElementById("Score");

    Pause.style.display="none";
    Starting_S.style.display="block";

    for(var i=0; i<16; i+=1){
        element[i].innerHTML="";
    }
    Score.innerHTML=0;
}
