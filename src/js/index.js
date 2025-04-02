'use strict'

const switcher = document.querySelector(".btn");
const ibG = document.querySelector(".ibg");

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;

    
    if(className == "light-theme") {
        ibG.classList.remove('act')
        this.textContent = "Dark";
    }
    else {
        ibG.classList.add('act')
        this.textContent = "Light"
    }
});