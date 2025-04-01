// if y else

let edad = 18


/*si (edad es mayor o igual que 18) {imprime que puede pasar} 
sino {imprime eres menor}*/
if (edad >= 18){
    console.log("eres adulto")
} else if (edad >= 50) {
    console.log("eres mayor")
} else{
    console.log("eres menor")
}

//switch
let day = 4 //dia = 4
let dayName //dejamos la variable indefinida para que la definamos despues

switch(day){ //verificamos (day)
    case 0: //si day es 0
        dayName = "Lunes" //dayName es Lunes
        break //para y verifica la siguente si es necesario
    case 1:  //si day es 1
        dayName = "Martes" //dayName es Martes
        break //para y verifica la siguente si es necesario
    case 2:
        dayName = "Miercoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
         dayName = "Sabado"
         break
    case 6:
        dayName = "Domingo"
        break
    default: //si no es ninguno 
        dayName = "Numero de dia no existe" //dayName = "Numero de dia no existe"
}

console.log(dayName)



