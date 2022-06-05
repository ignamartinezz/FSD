
let nombreArray=[];
let moneyArray=[];
let nombrehtml=document.getElementById("printArea")
let total;
let aporte;

function addNombre(){
    let nombre=document.getElementById("nombreInput").value;
    let money=parseInt(document.getElementById("moneyInput").value);
    nombreArray.push(nombre);
    moneyArray.push(money);
    calculo();
    imprimirNombres();
}

function borrarNombre(){
    let nombre=document.getElementById("nombreInput").value;
    for(let nomb of nombreArray){
        if(nomb==nombre){
            nombreArray.splice(nombreArray.indexOf(nomb));
            moneyArray.splice(nombreArray.indexOf(nomb))
        }
    }
    calculo();
    imprimirNombres();
}

function calculo(){
    total=0;
    for (let i of moneyArray){
        total+=i;
    }
    aporte=total/nombreArray.length;
}

function imprimirNombres(){   
    let elemento=document.getElementById("elemento");
    let elementototal=document.getElementById("total");
    let elementoaporte=document.getElementById("aporte")
    elemento.innerHTML="";
    for(let nomb of nombreArray){
        elemento.innerHTML+=" " +nomb;
    }
    elementototal.innerHTML="Total: " + total;    
    elementoaporte.innerHTML="Aporte de cada integrante: "+ aporte;
}