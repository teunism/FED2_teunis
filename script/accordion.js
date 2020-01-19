/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

console.log('script gelinkt');

var accordions = document.querySelectorAll('.answer');
var buttons = document.querySelectorAll('.accordionButton');



function schuif(subcategorie) {
    accordions[subcategorie].classList.toggle('active');
    console.log('klikko');
}

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        schuif(i)
    })
    console.log(buttons[i])
}


console.log(buttons);
