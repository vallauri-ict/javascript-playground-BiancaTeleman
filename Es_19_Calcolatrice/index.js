"use strict"
let _btnOperatore;
let _txtDisplay;
let _btnNum;
let _btnRis;

let n1="";
let n2="";
let aus1=false;
let aus2=false;
let ris="";
let operatore="";
function init(){
    _btnOperatore=document.getElementsByName("btnOperatore");
    _txtDisplay=document.getElementById("txtDisplay");
    _btnNum=document.getElementsByName("btnNum");
    _btnRis=document.getElementById("btnRis");
    //n1+=_btnNum.value;
    _txtDisplay.value=n1;
    aus1=true;
}
function resetta() {
    /*quando resetto faccio in modo tale che scriva su n1*/
    aus1=true;
    aus2=false;
    _txtDisplay.value="";
    n1="";
    n2="";
    ris="";
    _btnOperatore[0].disabled=false;
    _btnOperatore[1].disabled=false;
    _btnOperatore[2].disabled=false;
    _btnOperatore[3].disabled=false;
}
function aggiungi1(){
    /*incremento n1 se aus1=true e aus2=false, n1 corrisponde ad aus1*/
    if((aus1==true) && (aus2==false))
    {
        n1+=_btnNum[6].value;

        _txtDisplay.value=n1;
    }
    /*incremento n2 se aus1=false  e aus1=true,n2 corrrisponde ad aus2*/
    else if(aus1==false && aus2==true)
    {
        n2+=_btnNum[6].value;

        _txtDisplay.value=n2;
    }
}
function aggiungi2(){
    if((aus1==true) && (aus2==false))
    {
        n1+=_btnNum[7].value;

        _txtDisplay.value=n1;
    }
    else if(aus1==false && aus2==true)
    {
        n2+=_btnNum[7].value;

        _txtDisplay.value=n2;
    }
}
function aggiungi3(){
    if((aus1==true) && (aus2==false))
    {
        n1+=_btnNum[8].value;

        _txtDisplay.value=n1;
    }
    else if(aus1==false && aus2==true)
    {
        n2+=_btnNum[8].value;

        _txtDisplay.value=n2;
    }
}
function aggiungi4(){
    if((aus1==true) && (aus2==false))
    {
        n1+=_btnNum[3].value;

        _txtDisplay.value=n1;
    }
    else if(aus1==false && aus2==true)
    {
        n2+=_btnNum[3].value;

        _txtDisplay.value=n2;
    }
}
function aggiungi5(){
    if((aus1==true) && (aus2==false))
    {
        n1+=_btnNum[4].value;

        _txtDisplay.value=n1;
    }
    else if(aus1==false && aus2==true)
    {
        n2+=_btnNum[4].value;

        _txtDisplay.value=n2;
    }
}
function aggiungi6(){
    if((aus1==true) && (aus2==false))
    {
        n1+=_btnNum[5].value;

        _txtDisplay.value=n1;
    }
    else if(aus1==false && aus2==true)
    {
        n2+=_btnNum[5].value;

        _txtDisplay.value=n2;
    }
}
function aggiungi7(){
    if((aus1==true) && (aus2==false))
    {
        n1+=_btnNum[0].value;

        _txtDisplay.value=n1;
    }
    else if(aus1==false && aus2==true)
    {
        n2+=_btnNum[0].value;

        _txtDisplay.value=n2;
    }
}
function aggiungi8(){
    if((aus1==true) && (aus2==false))
    {
        n1+=_btnNum[1].value;

        _txtDisplay.value=n1;
    }
    else if(aus1==false && aus2==true)
    {
        n2+=_btnNum[1].value;

        _txtDisplay.value=n2;
    }
}
function aggiungi9(){
    if((aus1==true) && (aus2==false))
    {
        n1+=_btnNum[2].value;

        _txtDisplay.value=n1;
    }
    else if(aus1==false && aus2==true)
    {
        n2+=_btnNum[2].value;

        _txtDisplay.value=n2;
    }
}
function aggiungiP(){
    if((aus1==true) && (aus2==false))
    {
        n1+=_btnNum[10].value;

        _txtDisplay.value=n1;
    }
    else if(aus1==false && aus2==true)
    {
        n2+=_btnNum[10].value;

        _txtDisplay.value=n2;
    }
}
function aggiungi0(){
    if((aus1==true) && (aus2==false))
    {
        n1+=_btnNum[9].value;

        _txtDisplay.value=n1;
    }
    else if(aus1==false && aus2==true)
    {
        n2+=_btnNum[9].value;

        _txtDisplay.value=n2;
    }
}
function divisione() {
    operatore="/";
    _txtDisplay.value="/";
    if(aus1==true && aus2==false)
    {
        aus1=false;
        aus2=true;
    }
    /*controllo se ho già calcolato la prima volta il risultato,
     se sì assegno a n1 il valore del risultato*/
    if(ris!="")
    {
        n2="";
        n1=ris;
    }
    _btnOperatore[0].disabled=true;
    _btnOperatore[1].disabled=true;
    _btnOperatore[2].disabled=true;
    _btnOperatore[3].disabled=true;
}
function sottrazione() {
    operatore="-";
    _txtDisplay.value="-";
    if(aus1==true && aus2==false)
    {
        aus1=false;
        aus2=true;
    }
    if(ris!="")
    {
        n2="";
        n1=ris;
    }
    _btnOperatore[0].disabled=true;
    _btnOperatore[1].disabled=true;
    _btnOperatore[2].disabled=true;
    _btnOperatore[3].disabled=true;
}
function somma() {
    operatore="+";
    _txtDisplay.value="+";
    if(aus1==true && aus2==false)
    {
        aus1=false;
        aus2=true;
    }
    if(ris!="")
    {
        n2="";
        n1=ris;
    }
    _btnOperatore[0].disabled=true;
    _btnOperatore[1].disabled=true;
    _btnOperatore[2].disabled=true;
    _btnOperatore[3].disabled=true;
}
function moltiplicazione() {
    operatore="*";
    _txtDisplay.value="*";
    if(aus1==true && aus2==false)
    {
        aus1=false;
        aus2=true;
    }
    if(ris!="")
    {
        n2="";
        n1=ris;
    }
    _btnOperatore[0].disabled=true;
    _btnOperatore[1].disabled=true;
    _btnOperatore[2].disabled=true;
    _btnOperatore[3].disabled=true;
}

function calcola(){
    _btnOperatore[0].disabled=false;
    _btnOperatore[1].disabled=false;
    _btnOperatore[2].disabled=false;
    _btnOperatore[3].disabled=false;
    if(operatore=="+")
    {
        ris=(parseFloat(n1)+parseFloat(n2)).toString();
        _txtDisplay.value=ris;

    }
    else if(operatore=="-")
    {
        ris=(parseFloat(n1)-parseFloat(n2)).toString();
        _txtDisplay.value=ris;
    }
    else if(operatore=="*")
    {
        ris=(parseFloat(n1)*parseFloat(n2)).toString();
        _txtDisplay.value=ris;
    }
    else if(operatore=="/")
    {
        ris=(parseFloat(n1)/parseFloat(n2)).toString();
        _txtDisplay.value=ris;
    }
}

function generaNumero(min,max) {
    let n = Math.floor((max - min + 1) * Math.random() + min); /*FORMULA PER GENERARE TRA MIN E MAX ESTREMI INCLUSI E NEL NOSTRO CASO SIA 1 CHE 0*/
    return n;
}