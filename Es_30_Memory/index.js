"use strict"
const DIM=6;
function init(){
    let _wrapper=document.getElementById("wrapper");
    let cont=0;
    let contBtn=0;
    let btn1=0;
    let btn2=0;
    let vet=["1","1","2","2","3","3","4","4","5","5","6","6","7","7","8","8","9","9","10","10","11","11","12","12","13","13","14","14","15","15","16","16","17","17","18","18"];
    let contVit=0;
    let contMosse=0;
    let _div=document.getElementById("div");
    randomVet(vet);  //random
    /*for(let i=0;i<36;i++)  //se vuoi i risultati
    {
        console.log(vet[i]);
    }*/
    for(let i=0;i<DIM;i++)  //creazione dinamica dei bottoni
    {
        let _tr=document.createElement("tr");
        _wrapper.appendChild(_tr);
        for(let j=0;j<DIM;j++)
        {
            let _td=document.createElement("td");
            _tr.appendChild(_td);
            let _btn=document.createElement("button");
            _btn.classList.add("btnStyle");
            _btn.setAttribute("id",vet[cont]);
            _btn.value=vet[cont];
            cont++;
            _wrapper.appendChild(_btn);
            _btn.style.backgroundColor="rgb("+127+","+127+","+127+")";
            _btn.style.color="rgb("+127+","+127+","+127+")";
            _btn.innerHTML=_btn.value;
            _btn.addEventListener("click",visualizza);
            _td.appendChild(_btn);
        }
    }


    function visualizza(){ //this sarebbe l'oggetto corrente e quindi btn(?)
        contMosse++;
        let nodes=_wrapper.getElementsByTagName("button");
        let id=this.getAttribute("value");  //prendo il value del bottone schiacciato
        this.style.backgroundColor="red";
        this.style.color="rgb("+255+","+255+","+255+")";
        this.innerHTML=id;  //ci scrivo il value sul bottone
        if(contBtn==1)  //dopo il secondo click disabilita i bottoni NB nodes equivale a tutti i bottoni
        {
            btn2=id;
            for(let i=0;i<nodes.length;i++)
            {
                nodes[i].disabled=true;
            }
            setTimeout(disabilita,500);  //si disabilitano tutti
            abilita(btn1,btn2,nodes); //si abilitano i pulsanti non blu
            contBtn=0; //serve per capire se ho schiacciato una o 2 volte
        }
        else{
            btn1=id;  //assegnazione temporanea a btn1 del value del primo bottono cliccato
            contBtn++;
            this.disabled=true;  //Per evitare il doppio click sul primo bottone
        }
        _div.innerHTML=contMosse;
        if(contVit==18)
        {
            alert("Hai vinto");
        }


    }
    function abilita(btn1,btn2,nodes){
        if(btn1==btn2)
        {
           contVit++;
           console.log(contVit);
            for(let i=0;i<vet.length;i++)
            {
                if((nodes[i].getAttribute("value")==btn1)||(nodes[i].getAttribute("value")==btn2)||(nodes[i].style.backgroundColor=="blue"))
                {
                    nodes[i].style.backgroundColor="blue";
                    nodes[i].disabled=true;
                }
                else
                {
                    nodes[i].disabled=false;
                }
            }
        }
        else
        {
            setTimeout( function() { riabilita (nodes);}, 1000);
        }
    }


    function riabilita(nodes){
        for(let i=0;i<vet.length;i++)
        {
            if((nodes[i].style.backgroundColor!="blue"))  //riabilita tutti se la coppia non è uguale
            {
                nodes[i].style.backgroundColor="rgb("+127+","+127+","+127+")";
                nodes[i].style.color="rgb("+127+","+127+","+127+")";
                nodes[i].disabled=false;
            }
        }
    }
    function disabilita(){
        this.disabled=false;
    }
    function randomVet(vet){
        for(let i=vet.length-1;i>0;i--)
        {
            let j=Math.floor(Math.random()*(i+1)); //math.random genera un numero tra 0 e 1
            let tmp=vet[i];
            vet[i]=vet[j];
            vet[j]=tmp;
        }
    }
}



function generaNumero(min,max) {
    let n = Math.floor((max - min + 1) * Math.random() + min); /*FORMULA PER GENERARE TRA MIN E MAX ESTREMI INCLUSI E NEL NOSTRO CASO SIA 1 CHE 0*/
    return n;
}