"use strict"
/*function init(){

}*/
$(document).ready(function(){  //per stretchare l'elemento su tutto lo schermo
    $('.header').height($(window).height());
})


function generaNumero(min,max) {
    let n = Math.floor((max - min + 1) * Math.random() + min); /*FORMULA PER GENERARE TRA MIN E MAX ESTREMI INCLUSI E NEL NOSTRO CASO SIA 1 CHE 0*/
    return n;
}