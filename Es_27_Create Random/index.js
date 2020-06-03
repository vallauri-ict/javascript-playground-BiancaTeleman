"use strict"
function init(){
    let _wrapper=document.getElementById("wrapper");
    let _btnStop=document.getElementById("btnStop");
    let _btnRestart=document.getElementById("btnRestart");

    //setInterval(generaOggetti,100); faccio così se voglio farlo andare all'infinito senza stopparlo
    let timer=setInterval(generaOggetti,100);
    _btnRestart.disabled=true;

    let wrapperWidth=parseInt(getComputedStyle(_wrapper).width);
    let wrapperHeight=parseInt(getComputedStyle(_wrapper).height);

    _btnStop.addEventListener("click",function(){
        if(timer) clearInterval(timer);
        this.disabled=true;
        _btnRestart.disabled=false;
    });

    _btnRestart.addEventListener("click",function(){
        timer=setInterval(generaOggetti,100);
        this.disabled=true;
        _btnStop.disabled=false;
    });

    function generaOggetti() {
        //crea un tag div in memoria
        let _div=document.createElement("div");

        //assegno a div dei valori
        let width=generaNumero(1,100);
        let height=generaNumero(1,100);
        _div.style.width=width;
        _div.style.height=height;

        //colore di sfondo
        let red=generaNumero(0,255);
        let green=generaNumero(0,255);
        let blue=generaNumero(0,255);
        _div.style.backgroundColor="rgb("+red+", "+green+", "+blue+")";

        //assegno posizioni
        let x=generaNumero(0,wrapperWidth);
        let y=generaNumero(0,wrapperHeight);
        _div.style.position="absolute";
        _div.style.left=x+"px";
        _div.style.top=y+"px";

        //appendo div al _wrapper
        _wrapper.appendChild(_div);
    }
}



function generaNumero(min,max) {
    let n = Math.floor((max - min + 1) * Math.random() + min); /*FORMULA PER GENERARE TRA MIN E MAX ESTREMI INCLUSI E NEL NOSTRO CASO SIA 1 CHE 0*/
    return n;
}