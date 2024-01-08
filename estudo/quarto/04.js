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