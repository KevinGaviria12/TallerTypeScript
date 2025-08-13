"use strict";
/*Una variable tipo objeto cuyos valores sean los días de la semana*/
let diasSemana = {
    lunes: "Lunes",
    martes: "Martes",
    miercoles: "Miércoles",
    jueves: "Jueves",
    viernes: "Viernes",
    sabado: "Sábado",
    domingo: "Domingo"
};
// Recorrer e imprimir los valores del objeto diasSemana
for (let dia in diasSemana) {
    console.log(diasSemana[dia]);
}
// Eliminar un elemento clave-valor del objeto diasSemana
delete diasSemana.sabado;
console.log('Después de eliminar sabado:', diasSemana);
// Leer un valor específico
console.log('El valor de viernes es:', diasSemana.viernes);
// Actualizar un valor
diasSemana.domingo = "Día de descanso";
console.log('Después de actualizar domingo:', diasSemana);
/*Una variable tipo objeto cuyos valores sean los números del 0 al 9*/
let num = {
    0: "Cero",
    1: "Uno",
    2: "Dos",
    3: "Tres",
    4: "Cuatro",
    5: "Cinco",
    6: "Seis",
    7: "Siete",
    8: "Ocho",
    9: "Nueve"
};
// Recorrer e imprimir los valores del objeto num
for (let n in num) {
    console.log(num[n]);
}
// Eliminar un elemento clave-valor del objeto num
delete num[5];
console.log('Después de eliminar 5:', num);
// Leer un valor específico
console.log('El valor de 2 es:', num[2]);
// Actualizar un valor
num[7] = "Siete (actualizado)";
console.log('Después de actualizar 7:', num);
