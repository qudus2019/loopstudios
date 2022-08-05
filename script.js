let toggle = document.querySelector('.toggle');
let burger = document.querySelector('.burger');
let close = document.querySelector('.close');
let nav = document.querySelector('nav');

toggle.addEventListener('click',(e)=>{
    nav.classList.toggle('open');

    if(nav.classList.contains('open')){
        burger.style.opacity = 0;
        close.style.opacity = 1;
    }else{
        burger.style.opacity = 1;
        close.style.opacity = 0;
    }
})