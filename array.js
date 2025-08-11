"use strict";
/*Una variable array de números que contenga cinco elementos e imprima cada uno de sus
elementos.*/
// Declaramos e inicializamos un array de números con cinco elementos
let numeros = [10, 20, 30, 40, 50];
console.log("Elementos del array de números:");
// for-each para que recorra cada elemento en orden 
for (let numero of numeros) {
    console.log(numero);
}
/*Forma Larga de imprimir
console.log(numeros[0]);// (índice 0)
console.log(numeros[1]);//(índice 1)
console.log(numeros[2]);//(índice 2)
console.log(numeros[3]);//(índice 3)
console.log(numeros[4]);*/
/*Una variable array de strings que contenga cinco elementos e imprima cada uno de sus
elementos.*/
let lista = ["Kevin", "Diana", "Luis", "Sofia", "Camila"];
console.log("\nElementos del array de strings:");
for (let nombre of lista) {
    console.log(nombre);
}
/* Imprimir cada elemento usando su índice
console.log(nombre[0]);
console.log(nombre[1]);
console.log(nombre[2]);
console.log(nombre[3]);
console.log(nombre[4]);*/
