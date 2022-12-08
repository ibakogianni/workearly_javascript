const addMovieModal = document.querySelector('#add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.querySelector('#backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const movies =[];
const entryTextSection = document.querySelector('#entry-text');
const updateUI = ()=>{
    if(movies.length === 0 ){
        entryTextSection.style.display = 'block';
    }else {
        entryTextSection.style.display = 'none';
    }
}

const renderNewMovieElement = (title, imageUrl, rating)=> {
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
    const listRoot =document.querySelector('#movie-list');
    listRoot.append(newMovieElement);
}
const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};

const toggleBackdrop = ()=>{
    backdrop.classList.toggle('visible');
}
const backdropClickHandler = ()=>{
    toggleMovieModal();
}
const cancelAddMovie = ()=>{
    toggleMovieModal();
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
        title: titleValue,
        img: imgUrlValue,
        rating: ratingValue
    };
    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearMovieInputs();
    renderNewMovieElement(newMovie.title, newMovie.img, newMovie.rating);
    updateUI();
};
startAddMovieButton.addEventListener('click', toggleMovieModal );
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovie);
confirmAddMovieButton.addEventListener('click', AddMovieHandler);