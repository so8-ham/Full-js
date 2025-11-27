let quot=[1234,2345,5671,8765,4322,6758,1678,4076,1357];
const buton=document.querySelector('button');
const hed=document.querySelector('h1');
buton.addEventListener('click',()=>{
    let random=Math.floor(Math.random()*10+1);
      hed.textContent=quot[random];
});