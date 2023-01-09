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

//ewlist = array.of(numberList[]);
//console.log(newlist);
// function findMax(){

// }
//Instructor solution
console.log('instractor solution');
const numbers = numberList.filter(val=>val >5);
console.log(numbers);

const mappedNumbers = numberList.map(val => ({num: val}));
console.log(mappedNumbers);

const multiplication =numberList.reduce((cuResult, curValue)=>{
    return cuResult * curValue;
},1);

console.log(multiplication);
function findMax(...nums){
    let curmax = nums[0];
    for(const num of nums){
        if (num > curmax){
            curmax = num;
        }
    }
    return curmax;
}
function findMinMax(...nums){
    let curmax = nums[0];
    let curmin = nums[0];
    for(const num of nums){
        if (num > curmax){
            curmax = num;
        }
        if(num < curmax){
            curmin = num;
        }
        
    }
    return [curmin, curmax];
}
console.log(findMax(...numberList));
console.log(findMinMax(...numberList));
const [min, max] = findMinMax(...numberList);
console.log(min, max);
const userid = new Set();
userid.add(10);
userid.add(-5);
userid.add(-5);
console.log(userid);