// Declaración De Variables

// Utilizada para variables de alcance de función o global.
var edad = 30; 
console.log(edad);

// Introducida en ECMAScript 6, utilizada para variables de alcance de bloque.
let nombre = "Toji Fushiguro";
console.log(nombre);

// Introducida en ECMAScript 6, utilizada para declarar constantes cuyo valor no puede ser reasignado.
const PI = 3.1416;
console.log(PI);

// Estas variables tendrán el valor undefined hasta que se les asigne un valor.
let reunion;
console.log(reunion);

// Variables en una sola línea
let x = 10, y = 20, z = 30;
console.log(x,y,z);

// Valores de un array o de un objeto a variables individuales utilizando la sintaxis de destructuring.
let [a, b] = [1, 2];
console.log([a,b]);

// Boolean se utiliza para declarar variables de tipos booleanos (true,false, null)
let estadoActivo = true
console.log(estadoActivo);

// Destructuring con objetos
let { persona, edadPersona } = { persona: "Askelad", edadPersona: 46 };
console.log(persona, edadPersona);