const movieList = document.getElementById('movie-list');
movieList.style['background-color']= 'red';
movieList.style.display='block';
let person = {
'first-name': 'Max',
age: 30,
hobbies:['sports', 'cooking'],
greet: function(){
    alert('Hi there');
}
};
//person.age=31;
delete person.age;
person.isAdmin =true;
console.log(person["first-name"]);
//person.greet();