/*
- Programação Orientada a Objetos - POO ou OOP
- Programação Procedural - códigos feitos e usados em sequencia  - JS
- Programação Funcional (PF - FP)
*/ 

//Classes
class Pessoa {
    _age = 10    //caso deseje iniciar a idade zerada, assim se aplicará a todos os objetos da classe
    passos = 0  //incrementando passos
    

  constructor(nome, sobrenome, idade){
    this.nome = nome            //this é uma referência ao proprio objeto
    this.sobrenome = sobrenome
    this.idade = idade
  }
    //============== AÇÕES ===============
    meusPassos(){
      this.passos++ //incremento dos passos
    }

    //=== SET ====
    setIdade(newIdade){      //inicializando e setando a nova idade
      if(typeof newIdade === 'number'){
        this.idade = newIdade  //pegando valor e colocando na variavel
      }else {
        console.log('A idade deve ser um número!')
      }

     }

     set age(x){
      this._age = x
     }

      //=== GET ====
      get age() {
        return this._age   //retornando o valor de _age
      }

      get nomeCompleto(){
        return `${this.nome} ${sobrenome}`
      }
}

let pessoaUm = new Pessoa("Pedro", "Mendes", 20)
let pessoaDois = new Pessoa("Dora","Cabral", 40)
let pessoaTres = new Pessoa("Joao", "Silva", 10)
console.log(pessoaDois.idade)
console.log(`pessoaDois = ${pessoaDois.nome} ${pessoaDois.sobrenome} tem ${pessoaDois.idade} anos`)

//Trabalhando com variaveis e o corpo da Classe
pessoaUm.meusPassos()
pessoaDois.meusPassos()
pessoaDois.meusPassos()
console.log(`Passos de ${pessoaUm.nome}: ${pessoaUm.passos}`)
console.log(`Passos de ${pessoaDois.nome}: ${pessoaDois.passos}`)

//Executando idade setada anteriormente - setIdade
pessoaUm.setIdade(35)
console.log(`${pessoaUm.nome} tem ${pessoaUm.idade}`)

//Usando GET - nomeCompleto
console.log(`${pessoaTres.nome} ${pessoaTres.sobrenome} tem ${pessoaTres.age} anos`)

//Usando age para SET
pessoaTres.age = 89
console.log(`${pessoaTres.nome} tem ${pessoaTres.age} anos`)

// Herança
class Individuo {
  age = 0

  constructor(name){
    this.name = name 
  }

  cumprimentar(){
    console.log(`${this.name}: Diz Olá!`)
  }
}

class Estudante extends Individuo { //Estudante herdando tudo que tem em Individuo

  constructor(name, id){
    super(name)              // Se referindo a classe acima ou seja Individuo
    this.id = id             //this se refere a própria classe que estamos criado, nesse caso Estudante
  }

  cumprimentar(){
    console.log(`${this.name} é novato na escola!`) //Esse metodo novo ele subscreve o metodo anterior da superClasse(Individuo)
  }

  //Posso chamar a função da superClasse:
  boas(){
    super.cumprimentar()
  }
}


let p1 = new Estudante ("Silva", 1) //Criando uma outra instancia ou objeto que herdou todas as carcteristicas de Individuo
p1.age = 20
console.log(`${p1.name} tem ${p1.age} anos e matricula #${p1.id}`)
p1.cumprimentar()                   //Chamando o método da superclasse
p1.boas()                           //Método personalizado de Estudante, chamado a classe maior. 


//Classes: Variável/Método estático

class Fulano {
  
  //hands = 2 - Variavel Dinamica
  static hands = 2 //Variavel Estatica, associada a classe Fulano, mas não ao objeto que for instaciado, criado
  age = 0

  constructor(nome) {
    this.nome = nome
  }

  falar(){
    console.log(`Oi, meu nome é ${this.nome} e tenho ${Fulano.hands} mãos.`) 
    // ${this.hands} mãos.`-> usando assim retornará undefined
    // ${Fulano.hands} mãos -> Pegando dados gerais da Classe principal
  
  }

  static conversar(){
    console.log('Olá!')
  }
}

let teste = new Fulano("Leite")
teste.falar()
Fulano.conversar() //Chamando a função pela Classe porque é um metodo estatico


//Classes: Factory
class Humano {

  age = 0

  constructor(name){
    this.name = name
  }

}

function criarHumano(name, age){ //Cria uma função que o resultado final dela é a instacia daquela classe que deseja-se criar.
  let h = new Humano(name)       //criando instancia/objeto 
  h.age = age                    //setar a idade
  return h                       //retornar todo o objeto

}

let z = criarHumano('Mendes', 70)
console.log(`${z.name} tem ${z.age} anos.`)

