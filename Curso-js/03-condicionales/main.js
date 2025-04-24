//para verificar condiciones usamos el if, que nos permite verificar si un dato hace lo que queremos, sino pasamos a la siguiente condicion

let edad = 17
let esMayorDeEdad = false
let fuma = true


//si es mayor de edad y fuma, pasa, si es menor y fuma no pasa

if (edad >= 18 && fuma == true){
    console.log("Puede pasar")
}
else if (edad > 18 && fuma == false){
    console.log("Puede pasar")
} else{
    console.log("No puede pasar")
}


/* 
if (si) ("aqui dentro van las condicones" edad >= 18 && fuma == true)  "Si es devuelve true ejecuta lo que hay dentro de las llaves"
{console.log("Puede pasar")}
else if (si no) ("aqui dentro van las condicones" edad > 18 && fuma == false)  "Si es devuelve true ejecuta lo que hay dentro de las llaves"
{console.log("Puede pasar")}
else (sino depues de todo lo anterior){ 
    console.log("No puede pasar")
}
*/


//aparte del if tenemos el switch y los operadores ternarios
//el switch es una manera de hacer un if pero mas ordenado, es decir que si tenemos muchas condiciones, es mejor usar el switch

let dia = 1

switch (dia){
    case 1:
        console.log("Lunes")
        break
    case 2:
        console.log("Martes")
        break
    case 3:
        console.log("Miercoles")
        break
    case 4:
        console.log("Jueves")
        break
    case 5:
        console.log("Viernes")
        break
    case 6:
        console.log("Sabado")
        break
    case 7:
        console.log("Domingo")
        break
    default:
        console.log("No es un dia valido")
        break
}


/*creamos la variable del dia que es, y abrimos un switch, despues un parentesis y dentro la condicion, que en este caso es el dia,
abrimos llaves y le decimos que el case 1: es igual a lunes y al final un break para que si eso buscamos no siga y se rompa el switch
sino pues, case2, case3, y los que hagan falta, importantisimo el break, y al final del todo por si el usuario se equivoca o nos quiere romper todo
ponemos un default, es decir que si no ocurre nada de lo anterior, nos devuelva eso, importantisimo el break, ya que si no lo ponemos, se ejecuta todo lo que hay dentro del switch
y no queremos eso, ya que si el dia es 1, no queremos que nos devuelva lunes y martes y miercoles y jueves y viernes y sabado y domingo
*/



//El operador ternario es una manera de hacer un if pero mas corto, es decir que si tenemos una condicion y queremos devolver un valor, podemos usar el operador ternario
let edad2 = 21;

let resultado = (edad2 >= 21)  // primera condicion
    ? "tome un coctel" //si se cumple la condicion
    : (edad2 <= 18)  //si la primera condicion no se cumple, se evalua la segunda condicion
        ? "Es menor de edad" //si se cumple la segunda condicion 
        : "No tome un coctel"; //si no se cumple ninguna de las dos condiciones

console.log(resultado); // tome un coctel