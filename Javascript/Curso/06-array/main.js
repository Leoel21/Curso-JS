
//creamos una lista de objetos/diccionario
let frutas = ["Sandia","Melon","Manzana"]
console.log(frutas)


//agregamos en la posicon 3 del diccionario frutas la banana
// y en la 4 el pomelo
frutas[3] = "Banana"
frutas[4] = "Pomenlo"
console.log(frutas)


frutas.push("manzanaRoja") //agrega manzanasRoja al final
frutas.push("ManzanaVerde") //agrega ManzanaVerde al final
console.log(frutas)


frutas.unshift("fresa") //agrega elementos en primer lugar 
console.log(frutas) 

//eliminar cosas del array
frutas.pop() //elimina el ultimo elemento
console.log(frutas)


frutas.shift()
console.log(frutas) //elimna el primer elemento


//nos dice la cantidad de cosas dentro del array
console.log(frutas.length)

//eliminamos el array
//frutas = []
console.log(frutas)

//eliminamos varios elementos
frutas.splice(0, 3)
console.log(frutas) //eliminamos el elemento 0 y 3
