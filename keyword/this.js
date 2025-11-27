const Student={
    Name:"Soham",
   math:98,
   english:97,
   Physics:99,
    age:20,
  getAvg(){
    let avg=(this.math+this.english+this.Physics)/3;
    console.log(avg);
  }
}
Student.getAvg();