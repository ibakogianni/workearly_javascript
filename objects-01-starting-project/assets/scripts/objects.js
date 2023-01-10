// const movieList = document.getElementById('movie-list');
// movieList.style['background-color']= 'red';
// movieList.style.display='block';

// const  userChosenKeyName = 'level';

// let person = {
// 'first-name': 'Max',
// age: 30,
// hobbies:['sports', 'cooking'],
// [userChosenKeyName]: '...',
// greet: function(){
//     alert('Hi there');
// },
// 1.5 : 'hello'
// };
//person.age=31;
// delete person.age;
// person.isAdmin =true;

// console.log(person["first-name"]);
// console.log(person[1.5]);
// console.log(person);
// const keyName = 'first-name';
// console.log(person[keyName]);
//person.greet();

const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');
const movies = [];

const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;
    if(title.trim()=== '' || extraName.trim()=== '' || extraValue.trim()=== ''){
        return;
    }
    const newMovie = {
        info: {
            title:title,
           [ extraName]: extraName
        },
        id: Math.random()
    };
    movies.push(newMovie);
    console.log(newMovie);
};
addMovieBtn.addEventListener('click', addMovieHandler);