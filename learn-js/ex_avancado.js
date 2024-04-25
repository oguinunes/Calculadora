//EX.1 manipulação de Array

const listaDeCompra = []

listaDeCompra.push("pera", "maçã", "goiaba", "melão", "biscoito")

listaDeCompra.shift()

console.log (listaDeCompra)

//Array - find() /7>10
const numeros = [3,7,14,21,29,36,42]

const numero2 = numeros.find((num) => num %7 === 0 &&num >10 )

console.log (numero2)

//Array - filter() criar novo array nº > 20
const numerosCinco = [5, 10, 15, 20, 25, 30, 35, 40]

const numerosMaior = numerosCinco.filter((num)=> num >=20)

console.log(numerosMaior)

// Manipulação str retirar " " e dividir em palavras 
const palavra = " Bom dia , mundo! "

const concerto = palavra.trim().split(" ")

console.log (concerto)

//verificar inicio e fim de frase
const frase = "O rato roeu a roupa do rei de Roma"

const verificar = frase.startsWith("O")

const final = frase.endsWith ("Roma")

console.log (verificar,final) 