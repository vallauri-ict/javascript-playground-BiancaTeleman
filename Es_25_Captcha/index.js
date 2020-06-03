"use strict"
let matrice=[["0","1","2","3","4","5"],
            ["6","7","8","9","A","B"],
            ["C","D","E","F","G","H"],
            ["I","J","K","L","M","N"],
            ["O","P","Q","R","S","T"],
            ["U","V","W","X","Y","Z"]];
//Vettori dove devo salvare i 5 numeri generati
let nSegreti=new Array(5);
function init(){
   let _txtUser=document.getElementById("txtUser");
   let _txtPwd=document.getElementById("txtPwd");
   let _txtCaptcha=document.getElementById("txtCaptcha");
   let _divsCaptcha=document.getElementsByClassName("captcha");
   let _btnControllaCaptcha=document.getElementById("btnControllaCaptcha");
   let _btnGeneraCaptcha=document.getElementById("btnGeneraCaptcha");
   let _btnInvia=document.getElementById("btnInvia");
   _txtUser.ok=false;
   _txtPwd.ok=false;
   _txtCaptcha.ok=false;

   generaCaptcha();
    _txtUser.addEventListener("change",controllaUser);
    _txtPwd.addEventListener("change",controllaPassword);
    _btnControllaCaptcha.addEventListener("click",controllaCaptcha());
    _btnGeneraCaptcha.addEventListener("click",generaCaptcha);
    _txtCaptcha.addEventListener("keyup",function(){this.value=this.value.toUpperCase()});
    _btnInvia.addEventListener("click",invia);

    function generaCaptcha() {  //se scrivo solo la funzione non verrà eseguita,devo anche richiamarla
        for(let i=0;i<_divsCaptcha.length;i++)
        {
            let x=generaNumero(0,5);
            let y=generaNumero(0,5);
            nSegreti[i]=new Array(2); //dichiarazione matrice, inteso come per ogni riga del vettore
            nSegreti[i][0]=x;
            nSegreti[i][1]=y;
            //let backgroundPosition="-50px -200px";
            let backgroundPosition= "-"+(50*x)+"px "+" -"+(50*y)+"px";
            _divsCaptcha[i].style.backgroundPosition=backgroundPosition;
        }
    }

    function controllaPassword(){
        this.ok=true;
        if(this.value.length<8)
        {
            this.ok=false;
        }
        else if(this.value.search(/[0-9]/)==-1)
        {
            this.ok=false;
        }
        else if(this.value.search(/[a-z]/)==-1)
        {
            this.ok=false;
        }
        else if(this.value.search(/[A-Z]/)==-1)
        {
            this.ok=false;
        }
        if(!this.ok)
        {
            this.classList.add(bordoRosso);
        }
        else
        {
            this.classList.remove(bordoRosso);
        }
    }

    function controllaUser(){
        if(this.value.length<8)
        {
            this.style.borderColor="red";
            this.ok=false;
        }
        else
        {
            this.style.borderColor="";
            this.ok=true;
        }
    }

    function controllaCaptcha(){
        let ok=true;
        let _img=document.getElementById("imgOk");
        if(_txtCaptcha.value.length!=5)
        {
            ok=false;
        }
        else
        {
            for(let i=0;i<5;i++)
            {
                let x=nSegreti[i][0];
                let y=nSegreti[i][1];
                let valoreCaptcha=matrice[y][x];
                if(_txtCaptcha.value[i]!=valoreCaptcha)
                {
                    ok=false;
                    break;
                }
            }
        }
        if(ok)
        {
            _img.style.backgroundImage="url(img/ok.png)";
            _txtCaptcha.ok=true;
            _txtCaptcha.disabled=true;
            _btnControllaCaptcha.disabled=true;
            _btnGeneraCaptcha.disabled=true;
        }
        else
        {
            _img.style.backgroundImage="url(img/nok.png)";
            _txtCaptcha.ok=false;
        }
    }

    function invia(){
        let msg="";
        if(!_txtUser.ok)
            msg="nome utente non valido";
        else if(!_txtPwd.ok)
            msg="Password non valida";
        else if(!txtCaptcha.ok)
            msg="Non hai eseguito controlla captcha";
        if(msg=="")
            window.location.href="pagina2.html"; /*modo per indirizzare le cose via java*/
        else
            alert(msg);
    }
}


function generaNumero(min,max) {
    let n = Math.floor((max - min + 1) * Math.random() + min); /*FORMULA PER GENERARE TRA MIN E MAX ESTREMI INCLUSI E NEL NOSTRO CASO SIA 1 CHE 0*/
    return n;
}