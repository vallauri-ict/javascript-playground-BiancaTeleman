"use strict"
const DIM=10;
function init(){
    let _body=document.getElementsByTagName("body")[0];
    let _table=document.createElement("table");
    _table.style.textAlign="center";
    _table.style.margin="0 auto";
    _body.appendChild(_table);

    //creazione celle
    for(let i=0;i<DIM;i++)
    {
        let _tr=document.createElement("tr");
        _table.appendChild(_tr);
        for(let j=0;j<DIM;j++)
        {
            let _td=document.createElement("td");
            _tr.appendChild(_td);
            let _btn=document.createElement("button");
            _btn.classList.add("btnStyle");
            _btn.setAttribute("id","btn-"+i+"-"+j);
            _btn.addEventListener("click",visualizza);
            _td.appendChild(_btn);
        }
    }
    function visualizza(){ //this sarebbe l'oggetto corrente e quindi btn(?)
        //lettura coordinate
        let id=this.getAttribute("id");
        id=id.split("-");
        let i=id[1];
        let j=id[2];
        //visualizzazione
        this.innerHTML=i+"-"+j;
        this.style.backgroundColor="red";
        this.disabled=true;
    }
}



function generaNumero(min,max) {
    let n = Math.floor((max - min + 1) * Math.random() + min); /*FORMULA PER GENERARE TRA MIN E MAX ESTREMI INCLUSI E NEL NOSTRO CASO SIA 1 CHE 0*/
    return n;
}