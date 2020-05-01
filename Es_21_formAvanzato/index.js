"use strict"
let _nominativo;
let _optSesso;
let _lstAteneo;
let _cap;
let _chkLavoratore;
let _descr;
let _datiUtenti;
function init(){
    _nominativo=document.getElementById("nominativo");
    _optSesso=document.getElementsByName("sesso");
    _lstAteneo=document.getElementById("ateneo");
    _cap=document.getElementsByName("cap")[0];
    _chkLavoratore=document.getElementsByName("lavoratore");
    _descr=document.getElementsByName("descr")[0];
    _descr.disabled=true;
}
function validaForm() {
    //verifico nominativo
    if(_nominativo.value=="")
    {
        _nominativo.style.borderBottom="1px solid red";
        return false;
    }
    else
    {
        _nominativo.style.borderBottom="1px solid gray";
    }
    //verifico i radio button
    if((_optSesso[0].checked==false)&&(_optSesso[1].checked==false))
    {
        alert("Seleziona il tuo sesso");
        return false;
    }
    //verifico che un lst sia selezionato
    if(_lstAteneo.value=="nessuno")
    {
        _lstAteneo.style.borderBottom="1px solid red";
        return false;
    }
    else
    {
        _lstAteneo.style.borderBottom="1px solid gray";
    }
    //verifico la descrizione
    if((_chkLavoratore[0].checked==true)&&(_descr.value==""))
    {
        _descr.style.borderBottom="1px solid red";
        return false;
    }
    else
    {
        _descr.style.borderBottom="1px solid red";
    }
}
function validaNome() {
    let nome=_nominativo.value;
    if((/[1-9]/.test(nome)))
    {
        alert("Non puoi mettere dei numeri");
    }
}
function validaCAP() {
    let i = 0;
    let capTemp = _cap.value;
    do {
        i++;
    }
    while (i < capTemp.length);
    if (i != 5) {
        alert("Non hai inserito il cap giusto,deve essere di 5 cifre");
    }
}
function abilitaDescr(){
    if(_chkLavoratore[0].checked==false)
    {
        _descr.disabled=true;
    }else
    {
        _descr.disabled=false;
    }
}

function generaNumero(min,max) {
    let n = Math.floor((max - min + 1) * Math.random() + min); /*FORMULA PER GENERARE TRA MIN E MAX ESTREMI INCLUSI E NEL NOSTRO CASO SIA 1 CHE 0*/
    return n;
}