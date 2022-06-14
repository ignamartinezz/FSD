let contenido = document.querySelector("#hora");
let alarmahtml = document.querySelector("#alarma");

let intervalo;
let alarmaHora=[];
let alarmaMins=[];



function setalarma(){
    alarmaHora.push(document.getElementById("horaalarma").value);
    alarmaMins.push(document.getElementById("minsalarma").value);
    for (let iterator of alarmaHora) {
        alarmahtml.innerHTML+= alarmaHora[iterator]+": "+alarmaMins[iterator]
    }
}

function checkAlarma(){
    let fecha=new Date();
    for (let i of alarmaHora){
        if((alarmaHora[i]==fecha.getHours()) && (alarmaMins[i]==fecha.getMinutes())){
            alert("ALARMA");
        }
    }
}

function play(){
    intervalo = setInterval(() => {
        let fecha=new Date();
        let hora=fecha.getHours();
        let minutos=fecha.getMinutes();
        let segundos=fecha.getSeconds();
        contenido.innerHTML=`
            ${hora}:${minutos}:${segundos}
        `
        checkAlarma();
    }, 1000);
}

function stop(){
    clearInterval(intervalo);
}

//Tarea: configurar para alarma