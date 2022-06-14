const listEnlaces=document.getElementsByTagName("a");
console.log(listEnlaces.length);

console.log(listEnlaces[listEnlaces.length-2].href);

let sum=0;
for(let i in listEnlaces){
    if(i.href== "http://prueba"){
        sum++;
    }    
}
console.log(sum);


let list=document.querySelector("")