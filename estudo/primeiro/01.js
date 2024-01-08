//Variaveis
const n1 = 15
const n2 = 20
const n3 = 10

const soma = n1 + n2 - n3
console.log(soma)

//Template String
let nome = 'Joao'
let sobrenome = 'da Silva'
let nomeCompleto = `Meu nome é ${nome} ${sobrenome}`
console.log('nome completo: ', nomeCompleto)

let idade = 10
let nova = `Nova idade ${idade + 5}`
console.log(nova)

// Condicional
let valor = 100
if (valor < 100) {
  console.log(`O Valor ${valor} é menor a 100`) // true
} else if (valor == 100) {
  console.log(`O Valor ${valor} é igual a 100`) // false
} else {
  console.log(`O Valor ${valor} é imaior a 100`) //false
}

let anoAtual = 2023
const anoNascimento = 1981
let minhaIdade = anoAtual - anoNascimento

console.log(minhaIdade)

const preco = 61
const primeiro = preco >= 18 && preco < 60
const segundo = preco < 18

if(primeiro){
  console.log("Otimo preço")
} else if (segundo){
  console.log ("Preço muito baixo!")
} else {
  console.log ('Preço alto!')
}

let x = 10
let y = 5
console.log(x > y)

let w = "10"
let z = 10
console.log(w === z)

let a = 10
let b = 5
console.log(a != b)

let dinheiro = 40.3
if(dinheiro <= 45){
  console.log("Barato")
} else {
  console.log('Caro')
}



//Ternário
let grana = 10
let mesada = grana <=45 ? "barato" : "caro"
console.log("Preço: " + mesada)



