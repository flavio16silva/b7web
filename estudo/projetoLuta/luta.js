let personagem = new Mago('Leite')

console.log(personagem.nome)
console.log(personagem.life)
console.log(personagem.attack)

let monster = new PequenoMonstro()
console.log(monster.nome)
console.log(monster.attack)

//Inicializando o jogo
const cenario = new Cenario(
  char,
  monster,
  document.querySelector('#char'),
  document.querySelector('#monster')
)

cenario.inicio()