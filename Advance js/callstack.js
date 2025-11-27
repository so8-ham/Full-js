// function hello(){
//     console.log("hello");
// }

// function greet(){
//     hello(); //calling hello function inside the greet function....
// }
// greet();        //calling greet functions..
function one(){
    return 1;
}
function two(){
    return one()+one();
}
function three(){
    let ans=two()+one();
  console.log(ans);
}
three();
