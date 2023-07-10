// class Person{
//     name='Max';
//     constructor() {
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
Person.prototype ={
    printAge(){
        console.log(this.age);
    }
};


const p = new Person();
p.greet();
Person.toString();
console.log('line break');

p.printAge();
console.log('line break');
console.log(p.toString());
console.log(p);
console.log(p.__proto__);

console.dir(Person);
console.log(p.__proto__ === Person.prototype);
