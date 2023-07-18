

const namesList = document.getElementById('myUL');
const names = namesList.getElementsByTagName('li');
const searchButton = document.getElementById('searchButton');
const startsWithButton = document.getElementById('startButton');
const searchInput = document.getElementById('searchInput');


searchButton.addEventListener('click', ()=>{
    const searchTerm = searchInput.value.toLowerCase();
    for(let i = 0; i<names.length; i++){
        const name = names[i].textContent.toLowerCase();
        if(name.includes(searchTerm)){
            names[i].style.display = 'block';
        }else{
            names[i].style.display = 'none';
        }
    }
});


startsWithButton.addEventListener('click', ()=>{
    const searchTerm = searchInput.value.toLowerCase();
    for(let i = 0; i<names.length; i++){
        const name = names[i].textContent.toLowerCase();
        if(name.startsWith(searchTerm)){
            names[i].style.display = 'block';
        }else{
            names[i].style.display = 'none';
        }
    }
});