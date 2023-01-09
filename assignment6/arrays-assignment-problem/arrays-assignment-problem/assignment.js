const numberList = [1,2,3,4,5,6,7,8,9,10];
function greaterThanFive(num){
  
        if(num >= 5){
            console.log(num);
        }
}

console.log(numberList.filter(greaterThanFive));
const map = numberList.map((num)=>{
 return   num + 1;
});
console.log(map);
function multiply(total, num){
    return total * num;

}


console.log(numberList.reduce(multiply));

newlist = array.of(numberList[]);
console.log(newlist);
function findMax(){

}
