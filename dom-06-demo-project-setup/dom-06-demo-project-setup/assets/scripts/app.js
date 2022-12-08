const addMovieModal = document.querySelector('#add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.querySelector('#backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
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
}
const AddMovieHandler = ()=>{
    const titleValue = userInputs[0].value;
    const imgUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if(titleValue.trim()==='' || imgUrlValue.trim==='' || ratingValue.trim()=== '' || +ratingValue < 1 ||  +ratingValue > 5){
        alert('Please enter Valid values (rating between 1 and 5');
            return;
    }
};
startAddMovieButton.addEventListener('click', toggleMovieModal );
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovie);
confirmAddMovieButton.addEventListener('click', AddMovieHandler);