const numbers = [1, 2, 3];
console.log(numbers);
const moreNumbers = new Array(5); //[]
console.log(moreNumbers);

const yetMoreNumbers = Array.of(1,2);
console.log(yetMoreNumbers );

const listItems = document.querySelectorAll('li');
const moreNumbers2 = Array.from(listItems);
console.log(moreNumbers2);

//const hobbies = ['Cooking', 'Sports'];
const personalData =  [30, 'Max', {Moredetail:[]}];

const analyticsData = [[1,1.6], [-5.4, 2.1]];

for(const data of analyticsData){
    for (const dataPoints of data){
        console.log(dataPoints);
    }
    console.log(data);
}
console.log(personalData[1]);
const hobbies = ['sports', 'cooking'];
hobbies.push('reading');
hobbies.unshift('coding');
const popedValue = hobbies.pop();
hobbies.shift();
console.log(hobbies);

hobbies[1]= 'Coding';
hobbies[5] = 'reading'; //rarely used
console.log(hobbies, hobbies[4]);
hobbies.splice(1,0,'good food');
console.log(hobbies);

const removedElements = hobbies.splice(0,1);
console.log(hobbies);
console.log(removedElements);
const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// const storedResults = testResults.slice(0,2);
const storedResults = testResults.concat([3.99,2]);
testResults.push(5.91);
console.log(storedResults, testResults);
console.log(testResults.indexOf(1.5));
console.log(testResults.lastIndexOf(1.5));
console.log(testResults.includes(10.99));
console.log(testResults.indexOf(10.99)!== -1);

const personData = [{name: 'max'}, {name:'manuel'}];
console.log(personData.indexOf({name:'manuel'}));
const manuel = personData.find((person, index, persons)=>{
    return person.name === 'manuel';
});
manuel.name='Anna';
console.log(manuel, personData);

const maxIndex = personData.findIndex((person, index, persons)=>{
    return person.name === 'max';
});
console.log(maxIndex);
const prices = [10.99, 5.99,3.99, 6.59];
const tax = 0.19;
//const taxAdjustedPrices = [];
// for (const price of prices){
//     taxAdjustedPrices.push(price * (1 + tax) );
// }
// prices.forEach((price, index, prices)=>{
//     const priceObj = {index: index, taxAdjPrice: price * (1+  tax) }
//     taxAdjustedPrices.push(priceObj );
// });
//console.log(taxAdjustedPrices);
const taxAdjustedPrices= prices.map((price, index, prices)=>{
    const priceObj = {index: index, taxAdjPrice: price * (1+  tax) }
    return priceObj;
});
console.log(prices, taxAdjustedPrices);
const sortedPrices = prices.sort((a, b)=>{
    if(a > b){
        return 1;
    }else if (a===b){
        return 0;
    }else{
        return -1;
    }
});
console.log(sortedPrices.reverse());
const filteredArray = prices.filter(price=>price > 6);
console.log(filteredArray);

// let sum = 0;
// prices.forEach((price)=>{
//     sum +=price;
// });
// console.log(sum);

const sum = prices.reduce((prevValue, curValue, curIndex, prices)=>{
    return prevValue + curValue;
},0 );
console.log(sum);

const data = 'new york;10.99;2000';
const transformData = data.split(';');
transformData[1]= +transformData[1];
console.log(transformData);
const nameFragments = ['Max', 'Schwartz'];
const name = nameFragments.join(' ');
console.log(name);