//ejercicio 1
let mayor=[78,7,-3,9,10,15,53];
let maximo=mayor[0];
for (let contar = 0; contar < mayor.length ; contar++) {
    if (mayor[contar] > maximo) { //selecciona al numero mas grande
        maximo = mayor[contar];
    } 
}
console.log("Ejercicio 1\nDel arreglo: "+mayor+"\nEl número mas grande del arreglo es: " + maximo)


//ejercicio2 
let menor = [ 43, -2, 4, 58, 28, -20 ];

let minimo = menor[0];

for (let contar = 0; contar < menor.length ; contar++) {
    if (menor[contar] < minimo) { //selecciona al numero mas pequeño
        minimo = menor[contar];
    }
}
console.log("Ejercicio 2\nDel arreglo: "+menor+"\nEl número mas pequeño del arreglo es: " + minimo);

//ejercicio3
let repetido =[9,5,6,0,1,5,2,3].sort(function(a,b){});
let repitio=0;
console.log("Ejercicio 3\nDel arreglo: "+repetido);
for (let contar = 0; contar < repetido.length; contar++) {
   if (repetido[contar+1]===repetido[contar]) {
     console.log("Se repitio el numero "+repetido[contar]);
     repitio++;
   } 
}
if(repitio<1){
    console.log("No se repitio ningun numero");
   }



//ejercicio4
let ordenado=[1,2,3,4,5,6,7].sort();
let desorden=[];
console.log("Ejercicio 4:\nEl arreglo: "+ordenado);
desorden=ordenado;
desorden=desorden.sort(function (a,b) {return (Math.random()-0.5)});
console.log("Se desordeno al arreglo: "+desorden);


//ejercicios parte 2



//1

//2

//3

//4

//5

//6