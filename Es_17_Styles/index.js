"use strict"
let _ref;
let _txtSize;
let _btn;
let _titolo;
let _body;
let _btnImg1;
let _btnImg2;
let _btnImg3;
let _imgBox;
function init(){
    _txtSize=document.getElementById("txtSize");
    _titolo=document.getElementById("titolo");
    _body=document.getElementById("body");
    _btn=document.getElementById("btnColore");
    _btnImg1=document.getElementById("btnImg1");
    _btnImg2=document.getElementById("btnImg2");
    _btnImg3=document.getElementById("btnImg3");
    _imgBox=document.getElementById("imgBox");
   // _btn.setAttribute("onclick","Cambia colore");

    /*_btn=document.getElementById("btnDimensione");
    _btn.setAttribute("onclick","Cambia dimensione");*/
}
function Colore(){
    if(getComputedStyle(_titolo).color=="rgb(255, 255, 0)")
    {

        _titolo.style.color="blue";
        _titolo.style.backgroundColor="yellow";
    }
    else
    {

        _titolo.style.color="yellow";
        _titolo.style.backgroundColor="blue";
    }
}
function cambiaDimensione(){
    let dim=_txtSize.value;
    _titolo.style.fontSize=dim+"pt";
}
function cambiaSfondo() {
   // _body.style.backgroundImage="none";

    if(getComputedStyle(_body).backgroundImage=="none")
    {
        _body.style.background="#eaeaea url(sfondo.gif) center repeat-y";
    }
    else
    {
        _body.style.backgroundColor="dodgerblue";
        _body.style.backgroundImage="none";
    }
}
function cambiaBordo() {

    if(getComputedStyle(_titolo).borderWidth=='0px')
    {

        _titolo.style.border="2px solid red";
    }
    else
    {
        _titolo.style.border="hidden";
    }
}
function caricaImg1() {
    if(getComputedStyle(_imgBox).backgroundImage!="url(sfondo.gif)")
    {
        _imgBox.style.visibility="visible";
        _imgBox.style.backgroundImage="url(sfondo.gif)";
    }
}
function caricaImg2() {
    if(getComputedStyle(_imgBox).backgroundImage!="url(img2.jpg)")
    {
        _imgBox.style.visibility="visible";
        _imgBox.style.backgroundImage="url(img2.jpg)";
    }
}
function caricaImg3() {
    if(getComputedStyle(_imgBox).backgroundImage!="url(img3.jpg)")
    {
        _imgBox.style.visibility="visible";
        _imgBox.style.backgroundImage="url(img3.jpg)";
    }
}
function pulisci(){
    _imgBox.style.visibility="hidden";
}
function generaNumero(min,max) {
    let n = Math.floor((max - min + 1) * Math.random() + min); /*FORMULA PER GENERARE TRA MIN E MAX ESTREMI INCLUSI E NEL NOSTRO CASO SIA 1 CHE 0*/
    return n;
}