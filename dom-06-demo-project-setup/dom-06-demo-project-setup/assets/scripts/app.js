const addMovieModal = document.querySelector('#add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.querySelector('#backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const movies =[];
const entryTextSection = document.querySelector('#entry-text');
const deleteMovieModal = document.querySelector('#delete-modal');
const updateUI = ()=>{
    if(movies.length === 0 ){
        entryTextSection.style.display = 'block';
    }else {
        entryTextSection.style.display = 'none';
    }
}

const deleteMovie = (movieId) => {
    let movieIndex =0;
    for (const movie of movies){
        
        if(movie.id === movieId){
                break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot =document.querySelector('#movie-list');
    listRoot.children[movieIndex].remove();
};

const closeMovieDeletionModal =()=>{
    toggleBackdrop();
    deleteMovieModal.classList.remove('visible');
};
const deleteMovieHandler =(movieId)=> {
    
    deleteMovieModal.classList.add('visible');
    toggleBackdrop();
   const cancelDeletionButton= deleteMovieModal.querySelector('.btn--passive');
    const confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');
    cancelDeletionButton.addEventListener('click', closeMovieDeletionModal);
    confirmDeletionButton.addEventListener('click', deleteMovie.bind(null, movieId));
 
}
const renderNewMovieElement = (id, title, imageUrl, rating)=> {
    const newMovieElement = document.createElement('li');
    newMovieElement.className='movie-element';
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
        <img src="${imageUrl}" alt="${title}">
        </div>
        <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5</p>
        </div>
    `;
    newMovieElement.addEventListener('click',deleteMovieHandler.bind(null, id) );
    const listRoot =document.querySelector('#movie-list');
    listRoot.append(newMovieElement);
}
const showMovieModal = () => {
    addMovieModal.classList.add('visible');
    toggleBackdrop();
};

const toggleBackdrop = ()=>{
    backdrop.classList.toggle('visible');
}

const closeMovieModal = () =>{
addMovieModal.classList.remove('visible');
};
const backdropClickHandler = ()=>{
    closeMovieModal();
    closeMovieDeletionModal();
}
const cancelAddMovie = ()=>{
    showMovieModal();
    clearMovieInputs();
}
const clearMovieInputs = ()=>{
for(const usrInput of userInputs){
    usrInput.value='';
}
};
const AddMovieHandler = ()=>{

    const titleValue = userInputs[0].value;
    const imgUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if(titleValue.trim()==='' || imgUrlValue.trim==='' || ratingValue.trim()=== '' || +ratingValue < 1 ||  +ratingValue > 5){
        alert('Please enter Valid values (rating between 1 and 5');
            return;
    }
    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        img: imgUrlValue,
        rating: ratingValue
    };
    movies.push(newMovie);
    console.log(movies);
    closeMovieModal();
    toggleBackdrop();
    clearMovieInputs();
    renderNewMovieElement( newMovie.id ,newMovie.title, newMovie.img, newMovie.rating);
    updateUI();
};
startAddMovieButton.addEventListener('click', showMovieModal );
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovie);
confirmAddMovieButton.addEventListener('click', AddMovieHandler);