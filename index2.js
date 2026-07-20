"use strict"
const consultar = async () => {
    console.log("1. Consultando...")
    await new Promise(resolve => setTimeout(resolve, 300))
    console.log("2. Respuesta recibida...")
}

console.log("Iniciando")
consultar()
console.log("Terminando")