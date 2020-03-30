"use strict"
let _imgBox;
let _lstImmagini;
let _imgRoll;
let _opt;
function init(){
    _imgBox=document.getElementById("imgBox");
    _imgRoll=document.getElementById("imgRoll");
    _lstImmagini=document.getElementById("lstImmagini");
    _opt=document.getElementsByName("opt");
    //_lstImmagini.selectedIndex=-1;
    _imgBox.style.backgroundImage="url(img1.jpg)";
    _imgRoll.style.backgroundImage="url(img1.jpg)";
    for(let i=0;i<_opt.length;i++)
    {
        _opt[i].addEventListener("click",function(){cambiaImmagine(this)});
    }
}
function cambiaImmagine(img) {
    if(_lstImmagini[parseInt(img.value)].selected==true)
    {
        let contImg=parseInt(img.value)+1;
        let stringImg="url(img"+contImg+".jpg)";
        _imgBox.style.backgroundImage=stringImg;
        _opt[img.value].checked=true;
    }
    if(_opt[img.value].checked==true) {
        let contImg = parseInt(img.value) + 1;
        let stringImg = "url(img" + contImg + ".jpg)";
        _imgBox.style.backgroundImage = stringImg;
        _lstImmagini[img.value].selected=true;
    }
}
function roll_on(){
    let vetImg=["img1.jpg","img2.jpg","img3.jpg","img4.jpg"];
    let n=generaNumero(2,4);
    _imgRoll.style.backgroundImage = "url("+vetImg[n-1]+")";
}
function roll_off(){
    _imgRoll.style.backgroundImage="url(img1.jpg)";
}

function generaNumero(min,max) {
    let n = Math.floor((max - min + 1) * Math.random() + min); /*FORMULA PER GENERARE TRA MIN E MAX ESTREMI INCLUSI E NEL NOSTRO CASO SIA 1 CHE 0*/
    return n;
}