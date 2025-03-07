//crea un juego donde adivinas si la palabra es andronima o no

let myName = "Leo"

if (myName.toLowerCase().split("").reverse().join("") == myName.toLowerCase()){
    console.log("es la cosa esa")
} else{
    console.log('es normal')
}