// var name = 'max';
// if (name ==="max"){
//     var hobbies = ['sports', 'cookies'];
//     console.log(hobbies);
// }
// function greet(){
//     var age = 30;
//     var name = 'manuel';
//     console.log(name, age);
// }
// console.log(name, hobbies);
// greet();
// "use strict";
// let userName= 'Max';
// // var userName= 'Manuel';
// console.log(userName);


function getName(){
    return prompt('Your Name: ', '');
}

function greet(){
    const userName = getName();
    console.log('hello ' + userName);
}
greet();