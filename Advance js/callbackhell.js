
h1=document.createElement('h1');
h1.innerText="CallBack Hell";
document.querySelector('body').appendChild(h1);
function changeColor(color,delay,callback){
setTimeout(()=>{
   h1.style.color=color;
   if(callback) callback();
},delay);
}


changeColor("red",1000,()=>{
    changeColor("green",1000,()=>{
        changeColor("blue",1000,()=>{
            changeColor("orange",1000)
        });
    });
});
