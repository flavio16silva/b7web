//Funções
//passagem de parametros
function somar(a, b) {
  return a + b
}
somar(2, 3)
console.log(somar(2, 3))

function multiplicar(x, y) {
  const valor = x * y
  console.log(valor)
}
multiplicar(6, 8)

//Retorno da Função
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`
}
let completo = nomeCompleto('Joao', 'Silva')
console.log(completo)

function maiorIdade(idade) {
  if (idade >= 18) {
    return true
  } else {
    return false
  }
}

let idade = 70
let verificador = maiorIdade(idade)

if (verificador) {
  console.log('Idade maior: ' + verificador)
} else {
  console.log('Idade menor: ' + verificador)
}

//========== Exercicios 1 ==================
let x = 40
let y = 10
let pct = calcPct(x, y)

function calcPct(x, y) {
  // let pct = ((y/x)*100)
  // return pct ou
  return (y / x) * 100
}
console.log(`${pct}% de ${x} é ${y}`)

//========== Exercicios 2 ==================
//m2 = 3000
let metragem = 123
let quartos = 3
let preco = calcImovel(metragem, quartos)

function calcImovel(metragem, quartos) {
  let m2 = 3000 //metro padrão, fixo
  let preco = metragem * m2 //inicializar a variavel. Caso seja usada no laço if

  if (quartos === 1) {
    return preco
  }
  if (quartos === 2) {
    return preco * 1.2
  }
  if (quartos === 3) {
    return preco * 1.5
  } else {
    return preco
  }
}
console.log(
  `Por ${quartos} quarto(s) com metragem de ${metragem}m2, a casa custa R$ ${preco}.`
)

//========== Exercicios 3 ==================
// usuario correto: pedro
// senha correta: 123

let usuario = 'pedro'
let senha = '1234'
let validacao = validar(usuario, senha) //variavel recebendo a função

function validar(usuario, senha) {
  if (usuario === 'pedro' && senha === '1234') {
    return true
  } else {
    return false
  }
}
if (validacao) {
  console.log(`Acesso concedido ao usuario: ${usuario}`)
} else {
  console.log(`Acesso negado ao usuario: ${usuario}`)
}

//Arrow
//Função tradicional:
/*
function soma (x,y) {
  return x + y;
}
console.log(soma(5,2))
*/

//Arrow Function:
/* const soma = (x, y) => { //Ao usar as chaves{} indicamos que temos um codigo com mais de uma linha
//   return x + y;
// }
console.log(soma(5,2))
*/

//Arrow Function:  Resumida(Dois parametros)
const soma = (x, y) => x + y
console.log(soma(5, 2))

//Arrow Function:  Resumida(Um parametros)
/*function sobre(sob){
  return 'Flavio ' + sob
}
console.log(sobre('Leite'))
*/
const sobre = sob => 'Flavio ' + sob //Podemos retirar o parentese do parametro (sob)
console.log(sobre('Leite'))

//Variaveis dentro e fora da função

let sal = 6000
let ajuste = 0.1

calcPercentual = sal * ajuste
console.log(`Valor do reajuste é: ${calcPercentual}`)
novoSal = sal + calcPercentual
console.log(`Valor do reajuste é: ${novoSal}`)
console.log(
  `O idade atual de R$ ${sal} teve reajuste de ${ajuste}% e foi para: ${novoSal}`
)

let num = 2
let antecessor = num - 1
let sucessor = num + 1

console.log('O antecessor de ' + num + ' é: ' + antecessor)
console.log('O sucessor de ' + num + ' é: ' + sucessor)

let custoFabrica = 40000
let porcentoDistribuidor = 40000 * 0.28
let imposto = 40000 * 0.45
let custoFinal = custoFabrica + imposto + porcentoDistribuidor
console.log('o custo final do consumidor é:' + custoFinal)

let n1 = 5
let n2 = 4
let n3 = 7
let mf = (n1 * 2 + n2 * 3 + n3 * 5) / 10
console.log(mf)

let num1 = 5
let num2 = 4
let num3 = 7
let num4 = 8
let mp = (num1 * 1 + num2 * 2 + num3 * 3 + num4 * 4) / 10
console.log(mp)

let valor = 1000
let taxaDesconto = 0.09
let desconto = valor * taxaDesconto
let novoValor = valor - desconto
console.log('Valor Original: R$' + valor)
console.log('desconto: R$' + desconto)
console.log('novoValor: R$' + novoValor)

let tempo = 3
let vel = 80
let dist = tempo * vel
let litros = dist / 12
console.log('a velocidade media foi: ' + vel + 'km')
console.log('o tempo gasto foi: ' + tempo + 'h')
console.log('a distancia percorrida foi:' + dist + ' KM')
console.log('a quantidade de litros consumidos foram:' + litros + ' L')

//Funções dentro de outras funções
// function quadrado(x){
//   return x * x
// }

function raiz(a, b) {
  //function quadrado(x){ - Dentro da mesma função
  //return x * x
  //}
  const quadrado = x => x * x //arrow function

  let raizA = quadrado(a)
  let raizB = quadrado(b)
  return raizA + raizB
}
console.log(raiz(2, 3))

var arr = ['Guilherme', ' Manoel', ' Samuel', ' Davi', ' João']
console.log('Array original: ' + arr)
//Acrescentar nome da Monica
arr.push(' Monica') //ultimo elemento
console.log('Array adicionado elemento com: push():: ' + arr)

//Retirar último elemento do Array
arr.pop()
console.log('Array retirado ultimo elemento com: pop(): ' + arr)

//indexOf - Encontrar a posição do Samuel
arr.indexOf('Samuel')
console.log(arr.indexOf(' Samuel'))

//Splice - Trocar o nome Manoel por Emanoel
arr.splice(1, 1, ' Emanoel')
console.log('Array alterado de Manoel para Emanoel com: splice(): ' + arr)

//Slice - Cria um novo array apartir dos indices que são passados. 
var array = ['Guilherme', ' Manoel', ' Samuel', ' Davi', ' João']
var array2 = array.slice(0, 3)
console.log('Novo array com o metodo Slice(0,3): ' + array2)

//Concat - Concatenação de Array
var array = ['Guilherme', ' Manoel', ' Samuel', ' Davi', ' João']
var array1 = [' Gio', ' Manoela', ' Sam', ' Jo']
var array2 = array.concat(array1)
console.log('Array com uso do metodo concat(): ' + array2)

var mes = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
console.log("Meses do Ano: " + mes)
var t1 = mes.splice(0,3)
var t2 = mes.splice(0,3)
var t3 = mes.splice(0,3)
var t4 = mes.splice(0,3)
console.log("primeiro trimestre: " + t1)
console.log("segundo trimestre: " + t2)
console.log("terceiro trimestre: " + t3)
console.log("quarto trimestre: " + t4)


//filter
var a = [3, 15, -5, 2, -8, 9, -6, -3] 
var b = a.filter(a => a > 0 )
console.log(`Valores positivos: ${b}`)

var c = a.filter(
  function (value){
    return value > 0
  }
)
console.log(c)

//Slipt:
let texto = "Perfil Medico Inter - OrtoCenter"
let partes = texto.split(" - ")
let resultado = partes[0]
console.log(resultado)

//MAP
const numeros = [1, 2, 3, 4, 5]
const quadrados = numeros.map((valor) => valor * 2)
console.log("Com MAP gerando um novo array: " + quadrados)

let funcionarios = [
  {nome:'Joao', idade: 700},
  {nome:'Maria', idade: 800},
  {nome:'Pedro', idade: 900},
  {nome:'Lucia', idade: 1000}
]
nomes = funcionarios.map(pessoa => pessoa.nome)
console.log("Com MAP gerando um novo array: " + nomes)

//REDUCE
const n = [1, 2, 3, 4, 5]
let tot = n.reduce(function(total, n){
  return total + n;
})
console.log("Usando Reduce: " + tot)

//FOR EACH
a = [10,20,30,40,50,60,70]
let to = 0
a.forEach((valor) => to += valor )
console.log("Soma dos valores: " + to)


//Classe
class Pessoa {

  constructor(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  falar(){ //metodo - pessoa.falar()
    console.log(`Olá Sr. ${this.nome}`);
  }

  get nomeInteiro(){
    console.log(`Olá Sr. ${this.nome} ${this.sobrenome}`);
  }

}
let p = new Pessoa('Jose', 'Silva')
p.falar()
p.nomeInteiro

//Herança
class Dispositivos{
  
      constructor (nome){
        this.nome = nome;
        this.ligado = false;
      }
      ligar(){
        if(this.ligado){
          console.log("Já esta ligado")
          return
        }
        this.ligado = true;  
      }

}

class SmartPhone extends Dispositivos{
      constructor(nome, cor, modelo){ 
          super(nome);
          this.cor = cor;
          this.modelo = modelo;

      }
}

let s1 = new SmartPhone("Iphone", "Preto", "12")
console.log(s1)
s1.ligar();
s1.ligar();

// window.alert("Olá Pessoa")
// window.confirm("É mesmo vc, Pessoa?")
 /*
 let nome = window.prompt("Qual o seu nome?")
let sobrenome = window.prompt("Qual o seu sobrenome?")
window.alert("Meu nome é: " + nome.toLocaleUpperCase() + " " + sobrenome.toLocaleUpperCase())
 */

/*
let v1 = Number.parseInt(prompt("Digite o primeiro numero"))
let v2 = Number.parseInt(prompt("Digite o segundo numero"))
let adicao = v1 + v2
window.alert("A adição dos valores é : " + adicao)
*/

/*
function confirma(){
  let confirmacao = confirm("Você deseja excluir esse item?")
  if(confirmacao){
    alert("Item Excluído")
  } else {
    alert("Exclusão Cancelada")
  }
}
*/

//Manipulação de Arrays
let ingredientes = [
  'agua',
  'farinha',
  'ovos',
  'leite',
  'sal',
  'corante'
]

ingredientes[6] = 'açucar'
console.log(`total de ingredientes: ${ingredientes.length}`)
console.log(ingredientes)
//Ao inserir um novo valor no array e pulamos um indice ou seja [6] para o [8], o indice de valor[7] recebe vazio: empty
ingredientes[7] = 'morango'
console.log(ingredientes)

//Melhor forma de adicionar item no array - no final do array
ingredientes.push('recheio')
console.log(ingredientes)

//remover o ultimo item do array
ingredientes.pop()
console.log(ingredientes)

//remover o primeiro item do array
ingredientes.shift()
console.log(ingredientes)

//Exercicio de Array
//No array abaixo, qual o número do indice da Ferrari
let carros = ['BMW', 'Ferrari', 'Mercedes']
let car = 1
console.log('1. ' + carros[car])

//Troque a Ferrari por AUDI
carros.splice(1,1, 'AUDI')
console.log('2. Lista com Audi:')
console.log(carros)

//Adicione o Volvo a lista
carros.push('Volvo')
console.log('3. Lista com Volvo')
console.log(carros)

//Exiba quantos itens tem no array
console.log('4. itens no array: ' + carros.length)


//Objeto
let personagem = {
  nome: 'Pedro',
  idade: 70,
  pais: 'Brasil',
  olhos: ['preto', 'azul'],
  caracteristicas: {
    altura: 1.80,
    peso: 100,
    habilidade: 'Viajar no tempo'
  }
  
}
console.log(personagem)
console.log(personagem.idade)
console.log(personagem.caracteristicas.peso)
console.log(personagem.olhos[1])

//Funções dentro do Objeto
let pessoa = {
  nome: 'Joao',
  sobrenome: 'Silva',
  idade: 70,
  nomeCompleto: function () {
    return `${this.nome} ${this.sobrenome}` //referenciando o objeto pelo this
  }
  /*
   nomeCompleto: () => {
    - Usando arrow function só referenciamos dessa forma. Aqui não podemos usar o this
    return `${pessoa.nome} ${pessoa.sobrenome}`  
  }
  */

}
console.log(pessoa.nomeCompleto())

//Loops no array
// FOR
for(let a = 0; a <= 10; a++){
   if( a % 2 == 0){
    console.log(`o número ${a} é Par`)
  } else {
    console.log(`o número ${a} é Impar`)
  }
}

//tabuada simples
for (let i = 0; i <= 10; i++){
  for(let j= 0; j <= 10; j++){
    console.log(`${i} - ${j} = ${ i - j}`)
  }
 
}

//1º Exemplo - Pegando pelo Array
let cores = ['preto', 'branco', 'azul', 'vermelho']
/*
Pegando como base o array acima de CORES, podemos criar um for para gerar um loop conforme exemplo abaixo, mas ao executar a condição, não é boa prática colocar um valor maior ou próximo ao numero de itens do array:n < 4 ou n < 5 e assim por diante.
for(let n = 0; n < 4; n++){
  console.log(cores[n])
}
*/

/*
Vamos percorrer o array usando o length, assim saberemos quantos itens um array possui
*/
cores.push('verde')
//1º opção de varrer um array pelo tamanho, ou fazer loop ======================
/*
for(let n = 0; n < cores.length; n++){
  console.log(cores[n])
}
*/

//2º opção de varrer um array pelo tamanho, ou fazer loop ======================
/* 
Irá executar quando vezes 'cores' tiverem de item
Como funciona esse loop?
Irá criar a variavel "c" a cada vez que executa o código, ou seja, o loop e dentro de c terá a chave cores = indices dos valores.

for(let c in cores){
  console.log(cores[c])
}
Para pegar uma string com seus metodos:
cores[c].nome = cores[c].nome.toUpperCase()

*/

//3º opção de varrer um array pelo tamanho, ou fazer loop ======================
/*
O laço vai ser executado com base na quantidade de itens do array
Pegando o valor "cor" diretamente de "cores"
for(let cor of cores){
  console.log(cor) //cor é o proprio valor
}
*/



/*
2º Exemplo - Pegando por Array com objetos dentro:
*/
let paleta = [
  {nome: 'preto', qt: 10},
  {nome:'branco',qt:5},
  {nome:'azul',qt:7},
  {nome:'vermelho', qt:15},
  {nome: 'verde', qt:9}
]
console.log(paleta)
for(let cor of paleta){
 console.log(`Nome: ${cor.nome} - Qtd: ${cor.qt}`)
}


//Loop While = Enquanto

let ciclo = 0                               //inicializar a variavel
while ( ciclo < 10){                        // condição 
   console.log(`O ciclo da vez é ${ciclo}`)
   ciclo++                                 //Incremento no contador
 
}

/*
Exemplo acima feito com FOR:
for (ciclo = 0; ciclo < 10; ciclo++){
  console.log(`O ciclo da vez é ${ciclo}`)
}
*/

//Faça um loop que mostre todas as frutas:
let frutas = ['maça', 'uva', 'banana']
//1º Opção
for (let f in frutas){
  console.log(`${frutas[f]}`)
}
//2º Opção
for(let f = 0; f < frutas.length; f++){
  console.log(`Nome da fruta: ${frutas[f]}`)
}

//Conte de 1 até 100 atraves do WHILE
conte = 1                             //inicializar a variavel
while (conte <= 100){                 // condição  
  console.log('Contagem: ' + conte )
  conte ++                            // incremento no contador
}

/*Funções de Array =================================
 - Básicas
*/
let sucos = ['maça', 'uva', 'laranja', 'banana', 'kiwi']
//adicionando fruta nova:  - Acrescenta novos elementos ao 'final' de uma matriz e retorna o novo comprimento da matriz.
sucos.push('lima')
console.log(sucos.length)
console.log(sucos)

//removendo o último item do array
sucos.pop()
console.log(sucos)
console.log(sucos.length)

//deletar o primeiro item do array
sucos.shift()
console.log(sucos)

//join - Adiciona todos os elementos de uma matriz em uma string, "separados" pela string separadora especificada.
sucos.join(' ')
console.log(sucos.join(' -> '))
console.log(sucos)

//substituindo item no array: 
sucos[0] = 'pera'
console.log(sucos)

//alterando o ultimo item do array quando não sabemos o total de itens
sucos[sucos.length - 1] = 'tangerina'
console.log(sucos)


//Ordenação de Array
sucos.sort()
console.log(sucos)

//Invertendo a ordem dos elementos do Array
sucos.reverse()
console.log(sucos)

//Ordenando itens do array que são objetos:
let cars = [
  {marca: 'fiat', ano: 2022},
  {marca: 'vw', ano: 2027},
  {marca: 'mercedes', ano: 1050},
  {marca: 'audi', ano: 1900}
]

cars.sort((a, b) => {
  /* Forma completa
  if (a.ano > b.ano) {
    return 1
  } else if(a.ano < b.ano){
    return -1
  } else {
    return 0
  }
  */
 //Forma resumida
  return a.ano - b.ano;
})

console.log(cars)


//Iteração de array
let modelos = ['mercedes', 'audi', 'volvo', 'ferrari', 'uno']
let bigModelos = modelos.filter((item) => {
  //Forma resumida
  return item.length > 4
  /*
  Forma completa
    if(item.length > 4) {
      rerturn true
    } else {
      return false
    }
  */

})
//Forma mais resumida: let bigModelos = modelos.filter((item) => item.length > 4)
console.log(bigModelos)

//Uso do every(todos) e some(alguns)
//Every - quando todos satisfazem a condição
console.log('===== EVERY ====')
let naves = modelos.every((value) => {
  return value.length > 3
})
if (naves) {
  console.log('Todos são maiores que 3')
} else {
  console.log('Não são todos maiores que 3')  
}

//Some - quando algum satisfaz a condição
console.log('===== SOME ====')
let nave = modelos.some((value) => {
  return value.length > 3
})
if (nave) {
  console.log('Alguns são maiores que 3')
} else {
  console.log('Nenhum é maior que 3')  
}

//Includes - verifica se um elemento esta incluso no array retornando true ou false 

console.log('===== INCLUDES ====')
if (modelos.includes ('audi')){
  console.log('Tem audi no array')
} else {
  console.log('Não tem audi no array')
}

modelos.includes('mercedes')
console.log(modelos.includes('mercedes')) //executa um boolean: true ou false






