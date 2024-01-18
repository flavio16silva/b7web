let personagem = new Guerreiro('Silva')

console.log(personagem.nome)
console.log(personagem.life)
console.log(personagem.attack)

let monstro = new PequenoMonstro()
console.log(monstro.nome)
console.log(monstro.attack)

//Inicializando o jogo
const cenario = new Cenario(
  personagem,
  monstro,
  document.querySelector('#char'),
  document.querySelector('#monster')
)

cenario.inicio()
