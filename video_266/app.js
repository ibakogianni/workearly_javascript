class AgedPerson{
    constructor() {
        console.log(this.name);
    }
    printAge(){
        console.log(this.age);
    }
}

class Person {
    name='Max';
    constructor() {
        // super();
        this.age = 30;
    }
    greet(){
        console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old');
    }
    // greet=  ()=>{
    //     console.log('Hi, I am ' + this.name + ' and i am ' + this.age + ' years old.' );
    // }
}

// function Person(){
//     this.age = 30;
//     this.name = 'Max';
//     this.greet = function(){
//         console.log('Hi, I am ' + this.name + ' and i am ' + this.age + ' years old.' );
//     }
// }
// Person.prototype.greet = function(){
//     console.log('Hi, I am ' + this.name + ' and i am ' + this.age + ' years old.' );
// }
// Person.prototype ={
//     printAge(){
//         console.log(this.age);
//     }
// };
// Person.prototype.printAge = function () {
//     console.log(this.age);
// }
// Person.describe = function (){
//     console.log('Creating Persons....');
// }
// console.dir(Person);
//
// const p = new Person();
// // p.greet();
// // Person.toString();
// // console.log('line break');
// p.greet();
// p.printAge();
// // console.log('line break');
// // console.log(p.toString());
// // console.log(p);
// console.log(p.__proto__);
// console.log(p.toString());
// console.log(p.length);
// const p2 = new p.__proto__.constructor();
// console.log(p2);
// console.log(Object);
// console.dir(Object);
// console.dir(Object.prototype.__proto__);

// console.log(p.__proto__ === Person.prototype);
// const p = new Person();
// const p2 = new Person();
// p.greet();
// console.log(p);
// console.log(p.__proto__ === p2.__proto__);
// const button = document.getElementById('btn');
// button.addEventListener('click', p.greet.bind(p));

const course = {
    //new Object();
    title: 'Javascript - The complete Guide',
    rating: 5
};
//console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {
    ...Object.getPrototypeOf(course),
    printRating: function(){
        console.log(`${this.rating}/5`);
    }
});
const student = Object.create({
    printProgress: function(){
        console.log(this.progress);
    }
}, {
    name:{  configurable: true,
            enumerable: true,
            value: 'Irida',
            writable: false}
});
//student.name = "Max";
Object.defineProperty(student, 'progress',{
    configurable: true,
    enumerable: true,
    value: 0.8,
    writable: false
    }
);

student.printProgress();

console.log(student);
console.log(course.__proto__);
course.printRating();

