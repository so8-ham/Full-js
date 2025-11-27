const parent=document.getElementById('type');

parent.addEventListener('click',(el)=>{
       const child=el.target;
    const body=document.querySelector('body');
    body.style.backgroundColor=child.id;
});
