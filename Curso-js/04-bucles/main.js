/*bucle sirve para repetir una accion, es decir que si por ejemplo queremos 
que un usuario compre fruta y le decimos que compre 10 frutas, pues ahi 
podemos usar un bucle, ya que si no, tendriamos que escribir 10 veces lo mismo
es decir que si el usuario quiere comprar 10 frutas, pues le decimos que compre 10 frutas,
esto se puede mezcalr tambien dandole la posibilidad al usuario de que elija la cantidad de frutas*/

//para pedirselo al usuario lo hacemos con un prompt,


//BUCLE FOR 

let cantidadDeFrutas = parseInt(prompt("Cuantas frutas quieres comprar?")) //esto nos devuelve un number ya que parseInt convierte el string a number

//y lo guardamos en una variable, y luego le decimos que si la cantidad de frutas es menor o igual a 0, le decimos que no puede comprar frutas
if (cantidadDeFrutas <= 0){
    alert("Porfavor elige una cantidad mayor a 0"
    )
}

//y si no, le decimos que compre la cantidad de frutas que elija
else{
    alert("Has elegido comprar " + cantidadDeFrutas + " frutas" + " Porfavor digame cuales desea comprar")
    let frutas = [] //creamos un array que es un conjunto de datos, es decir como si fuera una tabla de info, donde para acceder a los datos tenemos que hacer frutas[0] frutas[1] frutas[2] etc
    for (let i = 0; i < cantidadDeFrutas; i++){ //el bucle for nos dice que i empieza en 0, y mientras i sea menor a la cantidad de frutas, i va a ir sumando 1
        let fruta = prompt("Que fruta quieres comprar?") //le decimos que le pida al usuario que fruta quiere comprar
        frutas.push(fruta) //le decimos que agregue la fruta al array frutas, es decir que lo empuje al array
    }
    alert("Has comprado " + cantidadDeFrutas + " frutas: " + frutas.join(", ")) 
    //join es un metodo que une los elementos de un array y les pone una coma entre ellos
    //y el + es para concatenar, es decir unir dos strings
    //y el , es para separar los elementos del array
    //y el i es para que el bucle se repita la cantidad de veces que el usuario elija
}



//BUCLE WHILE
//el bucle while nos dice que mientras la condicion sea true, se va a ejecutar el bucle
let cantidadDeFrutas2 = parseInt(prompt("Cuantas frutas quieres comprar?")) //esto nos devuelve un number ya que parseInt convierte el string a number
//y lo guardamos en una variable, y luego le decimos que si la cantidad de frutas es menor o igual a 0, le decimos que no puede comprar frutas
if (cantidadDeFrutas2 <= 0){
    alert("Porfavor elige una cantidad mayor a 0"
    )
}

else{
    alert("Has elegido comprar " + cantidadDeFrutas2 + " frutas" + " Porfavor digame cuales desea comprar")
    let frutas2 = [] //creamos un array que es un conjunto de datos, es decir como si fuera una tabla de info, donde para acceder a los datos tenemos que hacer frutas[0] frutas[1] frutas[2] etc
    let i = 0 //inicializamos la variable i en 0
    while (i < cantidadDeFrutas2){ //el bucle while nos dice que mientras i sea menor a la cantidad de frutas, se va a ejecutar el bucle
        let fruta = prompt("Que fruta quieres comprar?") //le decimos que le pida al usuario que fruta quiere comprar
        frutas2.push(fruta) //le decimos que agregue la fruta al array frutas, es decir que lo empuje al array
        i++ //le decimos que sume 1 a i
    }
    alert("Has comprado " + cantidadDeFrutas2 + " frutas: " + frutas2.join(", ")) 
    //join es un metodo que une los elementos de un array y les pone una coma entre ellos
    //y el + es para concatenar, es decir unir dos strings
    //y el , es para separar los elementos del array
    //y el i es para que el bucle se repita la cantidad de veces que el usuario elija
    //y el i++ es para que el bucle se repita la cantidad de veces que el usuario elija
}


//BUCLE DO WHILE
//el bucle do while nos dice que primero se ejecuta el bucle y luego se comprueba la condicion
let cantidadDeFrutas3 = parseInt(prompt("Cuantas frutas quieres comprar?")) //esto nos devuelve un number ya que parseInt convierte el string a number
//y lo guardamos en una variable, y luego le decimos que si la cantidad de frutas es menor o igual a 0, le decimos que no puede comprar frutas

if (cantidadDeFrutas3 <= 0){
    alert("Porfavor elige una cantidad mayor a 0"
    )
}

else{
    alert("Has elegido comprar " + cantidadDeFrutas3 + " frutas" + " Porfavor digame cuales desea comprar")
    let frutas3 = [] //creamos un array que es un conjunto de datos, es decir como si fuera una tabla de info, donde para acceder a los datos tenemos que hacer frutas[0] frutas[1] frutas[2] etc
    let i = 0 //inicializamos la variable i en 0
    do { //el bucle do while nos dice que primero se ejecuta el bucle y luego se comprueba la condicion
        let fruta = prompt("Que fruta quieres comprar?") //le decimos que le pida al usuario que fruta quiere comprar
        frutas3.push(fruta) //le decimos que agregue la fruta al array frutas, es decir que lo empuje al array
        i++ //le decimos que sume 1 a i
    } while (i < cantidadDeFrutas3); //el bucle while nos dice que mientras i sea menor a la cantidad de frutas, se va a ejecutar el bucle
    alert("Has comprado " + cantidadDeFrutas3 + " frutas: " + frutas3.join(", ")) 
    //join es un metodo que une los elementos de un array y les pone una coma entre ellos
    //y el + es para concatenar, es decir unir dos strings
    //y el , es para separar los elementos del array
    //y el i es para que el bucle se repita la cantidad de veces que el usuario elija
    //y el i++ es para que el bucle se repita la cantidad de veces que el usuario elija
}


//Existen otros tipos de bucles como el for of y el for in, pero esos son para objetos y arrays
//el for of nos dice que para cada elemento del array, se va a ejecutar el bucle
//el for in nos dice que para cada propiedad del objeto, se va a ejecutar el bucle