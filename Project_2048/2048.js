function Set_Cookie(elements){
    let string=[];
    for (let i=0; i<16;i++){
        if (elements[i].innerHTML!=""){
            string.push(elements[i].innerHTML);
        }
        else{
            string.push("0");  
        }
    }
    document.cookie=string.join();
}

function start(){
    let Starting_S = document.getElementById("Starting_S");
    let Game = document.getElementById("Game");
    let Control = document.getElementById("Control")
    let matches = document.querySelectorAll("div.element");

    Starting_S.style.display="none";
    Game.style.display="block";
    Control.style.display="block";

    random();
    for(let i=0; i<16; i+=1){
        if(parseInt(matches[i].innerHTML)>=2){
            matches[i].style.backgroundColor="#808080";
        }
    }
    Score.innerHTML=0;   
}

function congrat(){
    con = document.getElementById("Congrats");

    for(let i=0;i<16;i++){
        if (parseInt(arr[i].innerHTML)>=2048){
            con.style.display="block";
        }
    }
}

window.onload = restart();
let arr = document.getElementsByClassName("element");

function right(){
    let can=false;
    let access = false;
    let k;
    let score = document.getElementById("Score");
    for(let i=14; i>0; i-=4){
        access = false;
        for(let j=i; j>=i-2; j--){
            if(arr[j].innerHTML!==""){
                k=j;
                while(k<(i+1) && (parseInt(arr[k+1].innerHTML)===parseInt(arr[k].innerHTML) || arr[k+1].innerHTML==="") ){
                    if(parseInt(arr[k+1].innerHTML)===parseInt(arr[k].innerHTML) && access===false){
                        arr[k+1].innerHTML=parseInt(arr[k+1].innerHTML)+parseInt(arr[k].innerHTML);
                        score.innerHTML=parseInt(arr[k+1].innerHTML)+parseInt(score.innerHTML);
                        arr[k].innerHTML=""; can=true;access=true;
                    }
                    else if( parseInt(arr[k+1].innerHTML)===parseInt(arr[k].innerHTML) && access===true ){
                        access===false;
                    }
                    else if(arr[k+1].innerHTML===""){
                        arr[k+1].innerHTML=parseInt(arr[k].innerHTML);
                        arr[k].innerHTML=""; can=true;
                    }
                    k+=1;
                }
            }
        }
        
    }
    if(can){av();}
}
function left(){
    let can=false;
    let access = false;
    let k;
    let score = document.getElementById("Score");
    for(let i=13; i>0; i-=4){
        access = false;
        for(let j=i; j<=i+2; j++){
            if(arr[j].innerHTML!==""){
                k=j;
                while( k>(i-(i%4)) && (parseInt(arr[k-1].innerHTML)===parseInt(arr[k].innerHTML) || arr[k-1].innerHTML==="") ){
                    if( parseInt(arr[k-1].innerHTML)===parseInt(arr[k].innerHTML) && access===false ){
                        arr[k-1].innerHTML=parseInt(arr[k-1].innerHTML)+parseInt(arr[k].innerHTML);
                        arr[k].innerHTML=""; can=true;access=true;
                        score.innerHTML=parseInt(arr[k-1].innerHTML)+parseInt(score.innerHTML);
                    }
                    else if( parseInt(arr[k-1].innerHTML)===parseInt(arr[k].innerHTML) && access===true ){
                        access===false ;
                    }
                    else if(arr[k-1].innerHTML===""){
                        arr[k-1].innerHTML=parseInt(arr[k].innerHTML);
                        arr[k].innerHTML=""; can=true;
                    }
                    k-=1;
                }
            }
        }
        
    }
    if(can){av();}
}
function down(){
    let can=false;
    let access = false;
    let k;
    let score = document.getElementById("Score");
    for(let i=11; i>7; i-=1){
        access = false;
        for(let j=i; j>=0; j=j-4){
            if(arr[j].innerHTML!==""){
                k=j;
                while( k<12 && (parseInt(arr[k+4].innerHTML)===parseInt(arr[k].innerHTML) || arr[k+4].innerHTML==="") ){
                    if( parseInt(arr[k+4].innerHTML)===parseInt(arr[k].innerHTML) && access===false ){
                        arr[k+4].innerHTML=parseInt(arr[k+4].innerHTML)+parseInt(arr[k].innerHTML);
                        arr[k].innerHTML=""; can=true;access=true;
                        score.innerHTML=parseInt(arr[k+4].innerHTML)+parseInt(score.innerHTML);
                    }
                    else if( parseInt(arr[k+4].innerHTML)===parseInt(arr[k].innerHTML) && access===true ){
                        access===false;
                    }
                    else if(arr[k+4].innerHTML===""){
                        arr[k+4].innerHTML=parseInt(arr[k].innerHTML);
                        arr[k].innerHTML=""; can=true;
                    }
                    k+=4;
                }
            }
        }
    }
    if(can){av();}
}

function up(){
    let can=false;
    let access = false;
    let k;
    let score = document.getElementById("Score");
    for(let i=7; i>3; i-=1){
        access = false;
        for(let j=i; j<(i+9); j+=4){
            if(arr[j].innerHTML!==""){
                k=j;
                while( k>=i && (parseInt(arr[k-4].innerHTML)===parseInt(arr[k].innerHTML) || arr[k-4].innerHTML==="") ){
                    if( parseInt(arr[k-4].innerHTML)===parseInt(arr[k].innerHTML) && access===false ){
                        arr[k-4].innerHTML=parseInt(arr[k-4].innerHTML)+parseInt(arr[k].innerHTML);
                        arr[k].innerHTML=""; can=true;access=true;
                        score.innerHTML=parseInt(arr[k-4].innerHTML)+parseInt(score.innerHTML);
                    }
                    else if( parseInt(arr[k-4].innerHTML)===parseInt(arr[k].innerHTML) && access===true ){
                        access===false;
                    }
                    else if(arr[k-4].innerHTML===""){
                        arr[k-4].innerHTML=parseInt(arr[k].innerHTML);
                        arr[k].innerHTML=""; can=true;
                    }
                    k-=4;
                }
            }
        }
    }
    if(can){av();}
}
function random(){
    let done=false;
    while(done===false){
        let num = Math.floor(Math.random()*16);
        if(arr[num].innerHTML===""){
            arr[num].innerHTML=2;
            done=true;
        }
    }
}
function av(){
    let x = false;
    let count=0;
    for(let i=0; i<16;i++){
        if(arr[i].innerHTML===""){
            x=true;count++;
        }
    }
    if(x){random();}
    if(count===1){check()};
    Set_Cookie(arr);
    color();
    congrat();
}
function check(){
    let x = false;
    for(let i =0 ;i<16;i++){
        switch(i){
            case (0):
                if(arr[1].innerHTML===arr[0].innerHTML||arr[4].innerHTML===arr[0].innerHTML){
                    x=true;    
                };
                break;
            case (1):
                if(arr[1].innerHTML===arr[0].innerHTML||arr[2].innerHTML===arr[1].innerHTML||arr[1].innerHTML===arr[5].innerHTML){
                    x=true;    
                };
                break;
            case (2):
                if(arr[2].innerHTML===arr[1].innerHTML||arr[3].innerHTML===arr[2].innerHTML||arr[2].innerHTML===arr[6].innerHTML){
                    x=true; 
                };
                break;
            case (3):
                if(arr[3].innerHTML===arr[2].innerHTML||arr[3].innerHTML===arr[7].innerHTML){
                    x=true; 
                };
                break;
            case (4):
                if(arr[4].innerHTML===arr[0].innerHTML||arr[4].innerHTML===arr[8].innerHTML||arr[4].innerHTML===arr[5].innerHTML){
                  x=true;   
                };
                break;
            case (5):
                if(arr[5].innerHTML===arr[1].innerHTML||arr[5].innerHTML===arr[6].innerHTML||arr[4].innerHTML===arr[5].innerHTML||arr[5].innerHTML===arr[9].innerHTML){
                    x=true; 
                };
                break;
            case (6):
                if(arr[6].innerHTML===arr[5].innerHTML||arr[6].innerHTML===arr[2].innerHTML||arr[6].innerHTML===arr[7].innerHTML||arr[6].innerHTML===arr[10].innerHTML){
                    x=true; 
                };
                break;
            case (7):
                if(arr[7].innerHTML===arr[3].innerHTML||arr[7].innerHTML===arr[11].innerHTML||arr[7].innerHTML===arr[6].innerHTML){
                    x=true; 
                };
                break;
            case (8):
                if(arr[8].innerHTML===arr[4].innerHTML||arr[8].innerHTML===arr[12].innerHTML||arr[8].innerHTML===arr[9].innerHTML){
                    x=true; 
                };
                break;
            case (9):
                if(arr[9].innerHTML===arr[8].innerHTML||arr[9].innerHTML===arr[5].innerHTML||arr[9].innerHTML===arr[10].innerHTML||arr[9].innerHTML===arr[13].innerHTML){
                    x=true; 
                };
                break;
            case (10):
                if(arr[10].innerHTML===arr[9].innerHTML||arr[10].innerHTML===arr[11].innerHTML||arr[10].innerHTML===arr[6].innerHTML||arr[10].innerHTML===arr[14].innerHTML){
                    x=true; 
                };
                break;
            case (11):
                if(arr[11].innerHTML===arr[7].innerHTML||arr[11].innerHTML===arr[15].innerHTML||arr[11].innerHTML===arr[10].innerHTML){
                    x=true; 
                };
                break;
            case (12):
                if(arr[12].innerHTML===arr[8].innerHTML||arr[12].innerHTML===arr[13].innerHTML){
                    x=true; 
                };
                break;
            case (13):
                if(arr[13].innerHTML===arr[12].innerHTML||arr[13].innerHTML===arr[9].innerHTML||arr[13].innerHTML===arr[14].innerHTML){
                    x=true; 
                };
                break;
            case (14):
                if(arr[14].innerHTML===arr[13].innerHTML||arr[14].innerHTML===arr[10].innerHTML||arr[14].innerHTML===arr[15].innerHTML){
                    x=true; 
                };
                break;
            case (15):
                if(arr[15].innerHTML===arr[11].innerHTML||arr[15].innerHTML===arr[14].innerHTML){
                    x=true; 
                };
                break;
        }
    }
    if(!x){end();}
}
function color(){
    let matches = document.querySelectorAll("div.element");
    
    for(let i=0;i<16;i++){
        if(parseInt(matches[i].innerHTML)<=8 && parseInt(matches[i].innerHTML)>=2){
            matches[i].style.backgroundColor="#808080";
        }
        else if(parseInt(matches[i].innerHTML)<=16 && parseInt(matches[i].innerHTML)>8){
            matches[i].style.backgroundColor="#606060";
        }
        else if(parseInt(matches[i].innerHTML)<=32 && parseInt(matches[i].innerHTML)>16){
            matches[i].style.backgroundColor="#404040";
        }
        else if(parseInt(matches[i].innerHTML)<=64 && parseInt(matches[i].innerHTML)>32){
            matches[i].style.backgroundColor="#202020";
        }
        else if(parseInt(matches[i].innerHTML)>64){
            matches[i].style.backgroundColor="#000000";
        }
        else{
            matches[i].style.backgroundColor="#A0A0A0";
        }
    }
}
function pause(){
    let Pause = document.getElementById("Pause");
    let Control = document.getElementById("Control");
    
    Pause.style.display="block";
    Control.style.display="none";
}
function resume(){
    let Pause = document.getElementById("Pause");
    let Control = document.getElementById("Control");

    Pause.style.display="none";
    Control.style.display="block";
}
function restart(){
    let Pause = document.getElementById("Pause");
    let Starting_S = document.getElementById("Starting_S");
    let element = document.getElementsByClassName("element");
    let Score = document.getElementById("Score");
    let GameOver = document.getElementById("GameOver");
    let matches = document.querySelectorAll("div.element");
    let con = document.getElementById("Congrats");

    Pause.style.display="none";
    Starting_S.style.display="block";
    GameOver.style.display="none";
    con.style.display="none";

    for(let i=0; i<16; i+=1){
        element[i].innerHTML="";
        matches[i].style.backgroundColor="#A0A0A0";
    }
    Score.innerHTML=0;
}
function end(){
    let GameOver = document.getElementById("GameOver");
    let Control = document.getElementById("Control");

    GameOver.style.display="block";
    Control.style.display="none";
}
window.addEventListener("keydown", function(e)
{
    if(e.code=="ArrowLeft"){left();}
    else if(e.code=="ArrowRight"){right();}
    else if(e.code=="ArrowUp"){up();}
    else if(e.code=="ArrowDown"){down();}
}
)
