// let numero = 23;
// let stringceano= "stringceano";
// let verdad=true;
// let decimal=10.2;
// //constantes
// const variable2=0;
// numero= numero+1;
// numero++;

// console.log(verdad);
// console.log(decimal);
// // console.log("hola mundo");

// // document.write(stringceano+numero);
// let datos=document.getElementById("capoide");
// datos.innerHTML= stringceano+numero;
// // datos.innerHTML=`
// // <h1>sos un capo<h1>
// // `;
// // alert(numero);
// // alert(stringceano);
// // let insert= prompt("Ingrese CBU");
// let etiqueta = prompt("Cambiar etiqueta:");
// let newValor = prompt("Nuevo valor");
// const damevalor= document.getElementById("uno");
// damevalor.innerText= ("Algo nuevo");
//------------------------------CLASE ARRAYS-----------------//

let arrayCorreoPendientes= [];
let arrayCorreoAdmitidos = [];
let arrayCorreoDescartados = [];

function verificacion(arr) {
    let arrayCorreoAdmitidos = [];
    let arrayCorreoDescartados = [];
    let regx = new RegExp(
    "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/"
    );
    for (let emails of arr) {
        if (regx.test(emails)) {
            arrayCorreoAdmitidos.push(emails);
        } else {
            arrayCorreoDescartados.push(emails);
        }
    }
    alert(arrayCorreoAdmitidos.length);
    alert(arrayCorreoDescartados.length);
    return;

    // const inputname= document.querySelector(".inputname");
// const inputplata= document.querySelector(".inputplata")

// var nombres=[];
// var plata=[];


// function agregarPersona(names,money,inname,inmoney){
//     console.log(inname);
//     console.log(inmoney);
//     names.push(inname);
//     money.push(inmoney);
// }

// function formulario(){
//     agregarPersona(nombres,plata,inputname.value,inputplata.value);
// }


// for(let x in nombres){
//     nombres[0]
// }

}

function checkAllEmails(emails){
    return emails.filter(chequear);
}
 
function chequear(mail){
    if(mail.includes('@') && mail.indexOf('@')!=0){
        return true;
    }else{
        return false;
    }
}

arrayCorreoAdmitidos= [...checkAllEmails(arrayCorreoPendientes)]


function reverseArr(arr){
    let finalarr = [];
    for (let i = arr.length; i > 0; i--) {
        finalarr.push(arr[i - 1]);
    }
    console.log(finalarr);
    return finalarr;
}

// function reverseArr (arr){
//     let finalarr;
//     let j=0;
//     for (let i=arr.length; i=0; i--,j++){
//         finalarr[j]=arr[i];
//     }
//     return finalarr;
// // }
// let arr1 = ["22","24","25","29",244];
// console.log(arr1);
// let NewArr[]=reverseArr(arr1)
