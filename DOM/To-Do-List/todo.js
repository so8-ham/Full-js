let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let input=document.querySelector("input");
btn.addEventListener("click",()=>{
    let li=document.createElement("li");
    li.innerText=input.value;
    let delBtn=document.createElement("button");
    delBtn.innerText="Delete";
    delBtn.classList.add("Delete");
    li.appendChild(delBtn);
    ul.appendChild(li);
    input.value="";
});
ul.addEventListener("click",function(event){
    if(event.target.classList.contains("Delete")){
        let par=event.target.parentElement;
        par.remove();
    }
});

// let btns=document.querySelectorAll(".Delete");
// for(let btn of btns){
//     btn.addEventListener("click",()=>{
//       let par=btn.parentElement;
//       par.remove();
//     });
// }