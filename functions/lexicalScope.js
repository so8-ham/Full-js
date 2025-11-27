function outer(){
    let a=10;      
    let b=30;//lexical scope its specaly working on hoisting...
    function inner(){
        let sum=a+b;
        console.log(sum);
    }
    inner();
    outer();
}
