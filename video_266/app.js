// class AgedPerson{
//     printAge(){
//         console.log(this.age);
//     }
// }
//
// class Person extends AgedPerson{
//     name='Max';
//     constructor() {
//         super();
//         this.age = 30;
//     }
//     greet(){
//         console.log('Hi, I am ' + this.name + ' and I am ' + this.age + 'years old');
//     }
// }

function Person(){
    this.age = 30;
    this.name = 'Max';
    this.greet = function(){
        console.log('Hi, I am ' + this.name + ' and i am ' + this.age + ' years old.' );
    }
}
// Person.prototype ={
//     printAge(){
//         console.log(this.age);
//     }
// };
Person.prototype.printAge = function () {
    console.log(this.age);
}
Person.describe = function (){
    console.log('Creating Persons....');
}
console.dir(Person);

const p = new Person();
// p.greet();
// Person.toString();
// console.log('line break');
p.greet();
p.printAge();
// console.log('line break');
// console.log(p.toString());
// console.log(p);
console.log(p.__proto__);
console.log(p.toString());
console.log(p.length);
const p2 = new p.__proto__.constructor();
console.log(p2);
console.log(Object);
console.dir(Object);
console.dir(Object.prototype.__proto__);

// console.log(p.__proto__ === Person.prototype);
