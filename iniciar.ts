
// Dos variables lógicas
let existeEnLaBaseDeDatos: boolean = false;
let tieneActivaLaLicencia: boolean = true;

// Dos variables numéricas
let precio: number = 150.000;
let nivel: number = 81;

//Dos variables any
let edad: any = 18;

if (edad >= 18){
  console.log("En Colombia usted es mayor de edad");
}else{
  console.log("En Colombia usted es menor de edad");
}

let respuesta: any = "ok";

//Dos variables string
let nombres: string = "Kevin";
let apellidos: string = "Burgos Gaviria";


/*Cree una plantilla de strings para mostrar un mensaje de bienvenida al usuario luego de
registrarse en nuestro sitio, por ejemplo. “Bienvenida Paula Pérez a nuestro sitio web, gracias por
registrarte”. Este template debe usar dos variables, nombres y apellidos*/ 

let mensajeBienvenida: string = `Bienvenido ${nombres} ${apellidos} a nuestro sitio web, gracias por registrarte`;

console.log(mensajeBienvenida);