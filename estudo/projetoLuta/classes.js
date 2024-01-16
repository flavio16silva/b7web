//Guerreiro ou Mago
//Monstro Pequeno ou Monstro Grande

// Personagem
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
  get life(){
    return this._life
  }

  //Setar vida do personagem
  set life(newLife){
    this._life = newLife < 0 ? 0 : newLife
  }
}

//Caracteristicas de cada Personagem
  class Guerreiro extends Personagem{
    constructor(nome){
      super(nome)
      this.life = 100
      this.attack = 10
      this.defense = 8
      this.maxLife = this.life
    }
  }

  class Mago extends Personagem{
    constructor(nome){
      super(nome)
      this.life = 80
      this.attack = 15
      this.defense = 3
      this.maxLife = this.life
    }
  }