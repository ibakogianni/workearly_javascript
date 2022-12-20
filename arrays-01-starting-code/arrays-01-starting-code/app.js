const numbers = [1, 2, 3];
console.log(numbers);
const moreNumbers = new Array(5); //[]
console.log(moreNumbers);

const yetMoreNumbers = Array.of(1,2);
console.log(yetMoreNumbers );

const listItems = document.querySelectorAll('li');
const moreNumbers2 = Array.from(listItems);
console.log(moreNumbers2);