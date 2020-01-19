/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//var cards = document.querySelectorAll('.card');
//
//var checkboxes = document.querySelectorAll('input[type="checkbox"]');
////var leukeArray = []
////
////checkboxes.each(function(leukeArray){
////    leukeArray.push(checkboxes.value())
////});
////
////console.log(checkboxes)
//
////var array = []
////var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
////
////for (var i = 0; i < checkboxes.length; i++) {
////  array.push(checkboxes[i].value)
////}
////
////if (checkboxes[i].checked) {
////    console.log('test');
////}
//function toggleVerberg(boxNr) {
//    cards[boxNr].classList.toggle('verbergCard');
//}
//
//for (var i = 0; i < checkboxes.length; i++) {
//    checkboxes[i].addEventListener("click", function () {
//        toggleVerberg(i);
//    })}



//hier begint het script dat alle hiphop-artiesten 
//uit de lijst filtert na een klik op de knop
//of checkbox 'hiphop'. 

//identificeer de elementen met de class 'hiphop' en stop in var 
var cardsHiphop = document.querySelectorAll('.hiphop');

//identificeer het element met de id 'hiphCheck' en stop in var
var checkboxHiphop = document.querySelector('#hiphCheck');

//maak functie 
function checkboxChecker() {
        
        //maak loop die telt hoe veel hiphop-artiesten er zijn
        for (let i = 0; i < cardsHiphop.length; i++) {
            //pakt de artiesten en geeft (of neemt) ze een nieuwe css class
            cardsHiphop[i].classList.toggle('toonCard');
        }

}

//roep de functie checkboxChecker aan wanneer op de checkbox geklikt wordt
checkboxHiphop.addEventListener('change', function () {
    checkboxChecker();
});



//hier begint het script dat alle muziek-artiesten 
//uit de lijst filtert na een klik op de knop
//of checkbox 'muziek'. 

//identificeer de elementen met de class 'hiphop' en stop in var 
var cardsMuziek = document.querySelectorAll('.muziek');

//identificeer het element met de id 'hiphCheck' en stop in var
var checkboxMuziek = document.querySelector('#muziekCheck');

//maak functie 
function verbergMuziek() {
        
        //maak loop die telt hoe veel hiphop-artiesten er zijn
        for (let i = 0; i < cardsMuziek.length; i++) {
            //pakt de artiesten en geeft (of neemt) ze een nieuwe css class
            cardsMuziek[i].classList.toggle('verbergCards');
        }

}

//roep de functie checkboxChecker aan wanneer op de checkbox geklikt wordt
checkboxMuziek.addEventListener('change', function () {
    verbergMuziek();
});


//hier begint het script dat de genres verbergt na een klik
//op de knop/checkbox 'muziek'

//identificeer het element met de class 'genres' en stop in var
var genres = document.querySelector('.genres');

//identificeer het element met de id 'muziekCheck' en stop in var
var checkboxMuziek = document.querySelector('#muziekCheck');

//maak functie
function verbergGenres() {
    
    genres.classList.toggle('verbergGenres');
    console.log('aa');
}

checkboxMuziek.addEventListener('change', function () {
   verbergGenres();                          
});



//hier begint het script dat de filter toont en verbergt na een klik
//op de knop 'filter' in de mobiele breedte/mediaquery



//identificeer het element met de id 'lineUp' en stop in var
var lineUp = document.querySelector('.lineUp');

//identificeer het element van de filter en stop in var
var filter = document.querySelector('.filterGrid section:nth-child(1)');

var filterKnop = document.querySelector('#filterKnop');

//maak functie
function klikFilterKnop() {
    
    lineUp.classList.toggle('verbergLineUp');
    console.log('aa');

    filter.classList.toggle('verbergFilter');
}

filterKnop.addEventListener('click', function () {
   klikFilterKnop();                          
});












