(function(){
    'use strict'
    let linkEls = document.querySelectorAll('.navigation__item');
    linkEls.forEach((el)=>{
        el.addEventListener('click',(e)=>{
            e.preventDefault();
            let target = e.target.getAttribute('href'),
                distance = document.querySelector(target).offsetTop;
            window.scrollTo({
                top: distance,
                behavior: 'smooth'
            })    
        })
    })
})()