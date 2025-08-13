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
/*Investigue: cómo eliminar elementos de un array, agregar elementos, leer y actualizar elementos.
Implemente ejemplos prácticos.*/
let numero = [10, 20, 30, 40];
// Agregar elementos
numero.push(50); // Agrega al final
numero.unshift(5); // Agrega al inicio
// Leer elementos
console.log(numero[0]); // Lee el primer elemento
console.log(numero[2]); // Lee el tercer elemento
// Actualizar elementos
numero[1] = 15; // Cambia el segundo elemento a 15
// Eliminar elementos
numero.pop(); // Elimina el último elemento
numero.shift(); // Elimina el primer elemento
numero.splice(1, 1); // Elimina un elemento en la posición 1
console.log(numero); // Muestra el array final
