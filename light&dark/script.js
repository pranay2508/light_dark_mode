const toggleSwitch = document.querySelector('input[type="checkbox"]');

const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3e');
const textBox = document.getElementById('text-box');

//for light or dark image 
function imageMode(color){
    image1.src =`img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    // image3.src=`img/undraw_conceptual_idea_${color}.svg`;
}

//dark mode styles
function darkMode(){
    nav.style.backgroundColor ='rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor='rgb(255 255 255 / 50%)';
    // console.log(toggleIcon.children);
    toggleIcon.children[0].textContent ='Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    // toggleIcon.children[1].classList.add('fa-moon');
    imageMode('dark');
}

//light mode styles 
function lightMode(){
    nav.style.backgroundColor ='rgb(255 255 255/ 50%)';
    textBox.style.backgroundColor='rgb(0 0 0 / 50%)';
    // console.log(toggleIcon.children);
    toggleIcon.children[0].textContent ='Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    // toggleIcon.children[1].classList.add('fa-sun');
   imageMode('light');
}




//Switch theme dyanmaically

function switchTheme(event){
    // console.log(event.target.checked);
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme' , 'dark');
        localStorage.setItem('theme' , 'dark');
        darkMode();
    }
    else{
        document.documentElement.setAttribute('data-theme' , 'light');
        localStorage.setItem('theme' , 'light');
        lightMode();
    
    }
}


// event listern
toggleSwitch.addEventListener('change', switchTheme);


// check local storage for theme 
const currentTheme = localStorage.getItem('theme');
// console.log(currentTheme);
if (currentTheme){
    document.documentElement.setAttribute('data-theme' , currentTheme);

    if(currentTheme==='dark'){
        toggleSwitch.checked = true;
        darkMode();
    }
}