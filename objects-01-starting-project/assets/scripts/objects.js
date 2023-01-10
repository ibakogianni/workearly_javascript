const movieList = document.getElementById('movie-list');
movieList.style['background-color']= 'red';
movieList.style.display='block';
let person = {
'first-name': 'Max',
age: 30,
hobbies:['sports', 'cooking'],
greet: function(){
    alert('Hi there');
},
1.5 : 'hello'
};
//person.age=31;
delete person.age;
person.isAdmin =true;
console.log(person["first-name"]);
console.log(person[1.5]);
console.log(person);
const keyName = 'first-name';
console.log(person[keyName]);
//person.greet();