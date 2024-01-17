//Juego de apuesta de la Ruleta, donde se indica el número de la ruleta, el tipo de apuesta, y se genera un número al azar donde se verifica si ganó o no.

//Función que hace girar la ruleta y entrega un número
function NumeroRandom (cantidad, apuesta){
    let numeroRuleta = Math.floor(Math.random()*(cantidad))

    //Resultado
    if (numeroRuleta == apuesta){
        alert("GANASTE! de " + cantidad + " numeros, dijiste " + apuesta + " y el número de la ruleta fue " + numeroRuleta)
    }
    else{
        alert("Perdiste, de " + cantidad + " numeros, dijiste " + apuesta + " y el número de la ruleta fue " + numeroRuleta)
    }
}

function ColorRandom (cantidad, apuesta){
    let numeroRuleta = Math.floor(Math.random()*(cantidad))
    let colorReal="color"
    if (numeroRuleta==0){
        colorReal = "verde"
    }
    else if (numeroRuleta%2==0){
        colorReal = "rojo"
    }
    else if (numeroRuleta%2!==0){
        colorReal = "negro"
    }

    //Resultado
    if (colorReal == apuesta){
        alert("GANASTE! de " + cantidad + " numeros, dijiste " + apuesta + " y salió " + numeroRuleta + " por ende el color fue " + colorReal)
    }
    else{
        alert("Perdiste, de " + cantidad + " numeros, dijiste " + apuesta + " y salió " + numeroRuleta + " por ende el color fue " + colorReal)
    }
}

//Juego de la ruleta
let jugar = 1
let numeroReal = 0
while (jugar == 1){

    //Consultar acerca de la cantidad de números que tiene la ruleta
    let ruleta = parseInt(prompt("Cuántos números tiene la ruleta? por defecto traerá 36"))
    if (isNaN(ruleta)){
        ruleta = 36
    }
    while (ruleta < 9){
        ruleta = parseInt(prompt("La ruleta debe tener mínimo 10 números"))
    }

    //Consultar qué tipo de apuesta hará
    let tipoApuesta = parseInt(prompt("¿Apostarás a número o a color? 1 para número, 2 para color"));

    //Tipo de apuesta por número
    if (tipoApuesta == 1){

        let numeroApuesta = parseInt(prompt("Apostarás por número. Indícame el número al que le apostarás, van desde el 0 al " + ruleta)); //Consulta el número al que apostará
        while (numeroApuesta < 0 || numeroApuesta > ruleta || isNaN(numeroApuesta)){
            numeroApuesta = parseInt(prompt("El número debe ser los de la ruleta, entre 0 y " + ruleta))
        };

        numeroReal = NumeroRandom(ruleta, numeroApuesta); //Gira la ruleta
    }

    //Tipo de apuesta por color
    else {
        let colorApuesta = prompt("Apostarás por color. Dime el color al que apostarás, rojo, negro o verde") //Consulta sobre el color a apostar
        console.log("es " + colorApuesta)
        while (colorApuesta!="rojo" && colorApuesta!="negro" && colorApuesta!="verde"){
            colorApuesta = prompt("Dime entre rojo, negro o verde")
        }
        
        numeroReal = ColorRandom(ruleta, colorApuesta);//Gira la ruleta y convierte el resultado a color
    }

    jugar = parseInt(prompt("Quieres volver a jugar? 1 para volver a jugar"))
}