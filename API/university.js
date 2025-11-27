
let btn=document.querySelector('button');
btn.addEventListener('click',async ()=>{
   let country=document.querySelector('input').value;
    let colleges=await getcolleges(country);
  Show(colleges);
});
function Show(colleges){
    for(col of colleges){
        let list=document.createElement('li');
        list.innerText="";
        list.innerText=col.name;
        let u=document.querySelector('ul');
        u.appendChild(list);
    }
}
let url='http://universities.hipolabs.com/search?name=';
async function getcolleges(country){
    try{
 let res=await axios.get(url+country);
 return res.data;
    }
   catch(e){
       return [];
   }
}

