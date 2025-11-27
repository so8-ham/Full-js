let gameSeq=[];
let userSeq=[];
let btnsColors=["yellow","red","purple","green"];

let started=false;
let level=0;
let h2=document.querySelector("h2");
 function btnFlash(btn){
     btn.classList.add("flash");
     setTimeout(function(){
        btn.classList.remove("flash");
     },500);
}



document.addEventListener("click",function(){
    if(!started){
       started=true;
       levelUp();
    }
});

function levelUp(){
   level++;
   h2.innerText=`Level ${level}`;
let randomNumber=Math.floor(Math.random()*4);
let randomChosenColor=btnsColors[randomNumber];
btnFlash(document.getElementById(randomChosenColor));
}

function btnPressed(){
 let userChosenColor=this.id;
        userSeq.push(userChosenColor);
        btnFlash(this);
        console.log(userSeq);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPressed);
}


