function soham(){//global Scope
    console.log("Soham Mandal");
}
for(let i=0;i<100;i++){
soham();//functional Scope..
}


function dice(){
    console.log(Math.floor(Math.random()*6+1));
}
dice();