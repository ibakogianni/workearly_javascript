const addMovieModal = document.querySelector('#add-modal');
const startAddMovieButton = document.querySelector('header button');

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
};

startAddMovieButton.addEventListener('click', toggleMovieModal );