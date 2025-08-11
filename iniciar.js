"use strict";
// Dos variables lógicas
let existeEnLaBaseDeDatos = false;
let tieneActivaLaLicencia = true;
// Dos variables numéricas
let precio = 150.000;
let nivel = 81;
//Dos variables any
let edad = 18;
if (edad >= 18) {
    console.log("En Colombia usted es mayor de edad");
}
else {
    console.log("En Colombia usted es menor de edad");
}
let respuesta = "ok";
//Dos variables string
let nombres = "Kevin";
let apellidos = "Burgos Gaviria";
/*Cree una plantilla de strings para mostrar un mensaje de bienvenida al usuario luego de
registrarse en nuestro sitio, por ejemplo. “Bienvenida Paula Pérez a nuestro sitio web, gracias por
registrarte”. Este template debe usar dos variables, nombres y apellidos*/
let mensajeBienvenida = `Bienvenido ${nombres} ${apellidos} a nuestro sitio web, gracias por registrarte`;
console.log(mensajeBienvenida);
