//if-else
    let age=23;
if(age>=18){
    console.log("Elligible for vote");
}
else{
    console.log("Not Elligible for vote");
}

let size='S';
if(size=='XL'){
    console.log( "RS",250);
}
else if(size=='L'){
   console.log("RS",200);
}
else if(size=='M'){
    console.log("RS",100);
}
else{
    console.log("RS",50);
}


//nested if-else

    let marks=45;
if(marks>=33){
    console.log("pass");
    if(marks>=80)
        console.log("Garde is=A");

    else if(marks>=50 && marks<80)
        console.log("Garde is=B");
    else if(marks>=40 && marks<50)
        console.log("Grade is=C");
}
else{
  console.log("Better Luck Next Time!");
}