$(document).ready(function () {

    // funzione che permette il dropdown del menu a tendina;
    // SE il dropdown menu è NON visibile:
    // allora lo rende visibile al click con uno slide di 300 ms
    // in questo modo se clicco un altro menu-item,
    //chiude il dropdown-menu aperto in precedenza e apre il nuovo menu cliccato
    // per prima cosa chiude tutti i menu a tendina che sono aperti

    $('.menu-item').click(function () {
        
        $('.menu-item').children('.dropdown-menu').slideUp(300);

        if(!$(this).children('.dropdown-menu').is(':visible')) {
            $(this).children('.dropdown-menu').slideToggle(300);
        }
    });

    $('main').click(function () {
        $('.menu-item').children('.dropdown-menu').slideUp(300);

    });






});
