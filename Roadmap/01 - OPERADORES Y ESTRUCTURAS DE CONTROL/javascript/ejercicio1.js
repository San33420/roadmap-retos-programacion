//          Operadores:
//aritméticos:
let a = 10
let b = 5

console.log("suma a+b =", a + b);
console.log("resta a-b =", a - b);
console.log("multiplicar a*b =", a * b);
console.log("dividir a/b =", a / b);
console.log("exponencial a**b =", a ** b);
console.log("módulo a%b =", a % b);

let adicion = ++ a 
console.log("adicion a++ =", adicion);

let decrecion = -- a 
console.log("disminucion a-- =", decrecion);

//comparativos:
let valor1 = 1
let valor2 = 10

console.log("valor1 < valor2 =", valor1 < valor2);
console.log("valor1 <= valor2 =", valor1 <= valor2);
console.log("valor1 > valor2 =", valor1 > valor2);
console.log("valor1 >= valor2 =", valor1 >= valor2);
console.log("valor1 == valor2 =", valor1 == valor2);
console.log("valor1 != valor2 =", valor1 != valor2);

let valor3 = "1"

console.log("valor1 == valor3 =", valor1 == valor3); // si son iguales
console.log("valor1 === vlaor 3", valor1 === valor3); // no son idénticos, ya que el valor3 es un "string"

//lógicos:
let boolean1 = true
let boolean2 = false

console.log("si boolean1 && boolean2 son true =", boolean1 && boolean2);
console.log("si boolean1 || boolean2 es true =", boolean1 || boolean2);
console.log("si boolean1 ! (no) es true =", !boolean1);


//        Control De Flujo:

//condicionales:
let edad = 15

if (edad >= 17) {
    console.log("tu edad es mayor o igual a la mínima establecida");
}
else {
    console.log("tu edad está por abajo de la mínima establecida");
}

//while:
let usuariosEnLinea = 0;

while (usuariosEnLinea < 10 ) {
    console.log(usuariosEnLinea);
    usuariosEnLinea++;
}
console.log("maximo de usuarios permitidos en simultaneo");

//do while:
let usuariosRegsitrados = 0;

do {
    usuariosRegsitrados++;
    console.log(usuariosRegsitrados);
} while (usuariosRegsitrados < 10);
console.log("maximo de usuarios registrados")//con el "do while", primero se hace la accion y despues se revisa la condicion

//for:
let pacientesPorAtender = 10

for(pacientesPorAtender = 10; pacientesPorAtender > 0; pacientesPorAtender--) {
    console.log(`quedan ${pacientesPorAtender} pacientes por atender`);
}
console.log("ya no quedan pacientes por atender");

//iteraciones forOf:
let numbers = [1,2,3,4,5,6];

for(numero of numbers) {
    console.log("elemento del array", numero);
}

//iteraciones forIn:
let user = {
    id: 1,
    name: "Santiago",
    age: 36,
    country: "Argentina",
    city: "Buenos Aires",
}

for (element in user) {
    console.log(element,":", user[element]);
}

//break & continue:
let i = 0

while (i < 10) {
    i++;
    if(i===3){
        console.log("numero exeptuado con continue");
        continue;
    } else if (i===9){
        console.log("bucle cortado con break");
        break;
    }
    console.log(i);
}

//dificultad extra (opcional):
let objet = 9

while (objet >= 9 && objet< 55) {
    objet++;
    if(objet % 2 || objet === 16 || objet % 3 == 0){
        continue;
    }
    console.log(objet);
}
