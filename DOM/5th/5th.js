const result=document.getElementById('result');
setInterval(()=>{
const curr=Date.now();
const olympic=new Date(2028,6,14).getTime();
let timer=(olympic-curr);
const days=Math.floor((timer)/(1000*60*24*1));
timer%=(1000*60*24*1);

const hours=Math.floor((timer)/(1000*60*60));
timer%=(1000*60*60);

const minuit=Math.floor((timer)/(1000*60));
timer%=(1000*60);

const second=Math.floor((timer)/(1000));
timer%=(1000);

result.textContent=`Days: ${days} Hours: ${hours} Minuit: ${minuit} second:${second}`;

},1000);
