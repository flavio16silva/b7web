//Guerreiro ou Mago
//Monstro Pequeno ou Monstro Grande

// Personagem Padrão
class Personagem {
  //Caracteristicas
    _life = 1
    maxLife = 1
    attack = 0
    defense = 0

  //Todo personagem criado usará essa classe
  constructor(nome){
    this.nome = nome
  }

  //Pegar vida do personagem
  get life() {
    return this._life
  }

  //Setar vida do personagem
  set life(newLife){
    this._life = newLife < 0 ? 0 : newLife
  }
}

//Caracteristicas de cada Personagem
// Guerreiro 
class Guerreiro extends Personagem{
    constructor(nome){
      super(nome)
      this.life = 100
      this.attack = 10
      this.defense = 8
      this.maxLife = this.life
    }
  }

  //Mago
  class Mago extends Personagem{
    constructor(nome){
      super(nome)
      this.life = 80
      this.attack = 15
      this.defense = 3
      this.maxLife = this.life
    }
  }

  //Monstro Pequeno
  class PequenoMonstro extends Personagem{
    constructor(){
      super('Mike Wazowski')
      this.life = 40
      this.attack = 4
      this.defense = 4
      this.maxLife = this.life
    }
  }

   //Monstro Grande
  class BigMonstro extends Personagem{
    constructor(){
      super('James Sullivan')
      this.life = 120
      this.attack = 16
      this.defense = 6
      this.maxLife = this.life
    }
  }

  //Lutas a serem feitas
  class Cenario {
      constructor(luta1, luta2, luta1Elemento, luta2Elemento){
        this.luta1 = luta1
        this.luta2 = luta2
        this.luta1Elemento = luta1Elemento
        this.luta2Elemento = luta2Elemento
      }

      //Iniciando o Jogo
        inicio() {
          //Evento do botão de atacar
          this.atualiza()
        }

      //Atualizacao do jogo
        atualiza() {
        //--------- Luta 1
          this.luta1Elemento.querySelector('.nome').innerHTML = `${this.luta1.nome} - ${this.luta1.life} HP`
        //Porcentagem de Vida
        let vidaV1 = (this.luta1.life / this.luta1.maxLife) * 100  
        this.luta1Elemento.querySelector('.bar').style.width = `${vidaV1}%`
        
        //---------- Luta 2
          this.luta2Elemento.querySelector('.nome').innerHTML = `${this.luta2.nome} - ${this.luta2.life} HP`
        //Porcentagem de Vida
        let vidaV2 = (this.luta2.life / this.luta2.maxLife) * 100  
        this.luta2Elemento.querySelector('.bar').style.width = `${vidaV2}%`  
       }  

  }

 

