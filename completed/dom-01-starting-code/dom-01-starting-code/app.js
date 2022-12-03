const ul = document.body.firstElementChild.nextElementSibling;
const firstListItem = ul.firstElementChild;
const section = document.querySelector('section');
console.log(firstListItem);

//section.style.backgroundColor="blue";
//section.className = '';
const button = document.querySelector('button');
button.addEventListener('click', ()=>{
    // if(section.className ==='red-bg visible'){
    //     section.className = 'red-bg invisible';
    // }else{
    //     section.className = 'red-bg visible';
    // }
   section.classList.toggle('visible');
   section.classList.toggle('invisible');

})
