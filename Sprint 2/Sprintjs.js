
let nombreArray=[];
let moneyArray=[];
let nombrehtml=document.getElementById("printArea")
let total;
let aporte;

function addNombre(){
    let nombre=document.getElementById("nombreInput").value;
    let money=document.getElementById("moneyInput")
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
    for(let nomb of nombreArray){
        let elemento= document.createElement("p");
        elemento.innerHTML= nomb;
        nombrehtml.appendChild(elemento);
    }
}