"use strict"
let _cognome;
let _nome;
let _matricola;
let _regione;
let _email;
let _tel;
let _invia;
let _reset;
function init(){
    _cognome=document.getElementsByName("cognome")[0];
    _nome=document.getElementById("nome");
    _matricola=document.getElementsByName("matricola")[0];
    _regione=document.getElementsByName("regione")[0];
    _email=document.getElementsByName("email")[0];
    _tel=document.getElementsByName("tel")[0];
    /*_reset=document.getElementsByClassName("buttons")[1];
    _reset.addEventListener("submit",invia())*/
}
function validaForm() {
    if(_cognome.value=="")
    {
        /*alert("Inserire cognome");*/
        _cognome.style.borderBottom="1px solid red";
        return false;
    }
    else
    {
        _cognome.style.borderBottom="1px solid gray";
    }
    if(_nome.value=="")
    {
        //alert("Inserire il nome");
        _nome.style.borderBottom="1px solid red";
        return false;
    }
    else
    {
        _nome.style.borderBottom="1px solid gray";
    }

    let v=_matricola.value;
    console.log(v);
    /*Espressioni regolari(regex)*/
    if((/[a-z]/.test(v))||(/[A-Z]/.test(v))||(_matricola.value==""))/*((isNaN(v))||(v.exec))*/
    {
        alert("La matricola deve essere un numero oppure devi inserirla!");
        _matricola.style.borderBottom="1px solid red";
        return false;
    }
    else
    {
        _matricola.style.borderBottom="1px solid gray";
    }
    if(_regione.value=="nessuna")
    {
        //alert("Inserire una regione");
        _regione.style.borderBottom="1px solid red";
        return false;
    }
    else
    {
        _regione.style.borderBottom="1px solid gray";
    }
    if((_tel.value=="")&&(_email.value==""))
    {
        //alert("Inserisci almeno uno dei campi");
        _tel.style.borderBottom="1px solid red";
        _email.style.borderBottom="1px solid red";
        return false;
    }
    else
    {
        _tel.style.borderBottom="1px solid gray";
        _email.style.borderBottom="1px solid gray";
    }
    //return false;
}
/*function invia(){
    _cognome.style.borderBottom="1px solid gray";
    _nome.style.borderBottom="1px solid gray";
    _matricola.style.borderBottom="1px solid gray";
    _regione.style.borderBottom="1px solid gray";
    _tel.style.borderBottom="1px solid gray";
    _email.style.borderBottom="1px solid gray";
}*/

function generaNumero(min,max) {
    let n = Math.floor((max - min + 1) * Math.random() + min); /*FORMULA PER GENERARE TRA MIN E MAX ESTREMI INCLUSI E NEL NOSTRO CASO SIA 1 CHE 0*/
    return n;
}