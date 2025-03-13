let heroName = "Hercules"
let heroXp = 19001
let patent = ""

if(heroXp < 1000){
  patent = "Ferro"
  console.log("O Herói de nome " + heroName + " está no nível de " + patent)
}else if(heroXp >= 1001 && heroXp <= 2000){
  patent = "Bronze"
  console.log("O Herói de nome " + heroName + " está no nível de " + patent)

}else if(heroXp >= 2001 && heroXp <= 5000){
  patent = "Prata"
  console.log("O Herói de nome " + heroName + " está no nível de " + patent)
  
}else if(heroXp >= 5001 && heroXp <= 7000){
  patent = "Ouro"
  console.log("O Herói de nome " + heroName + " está no nível de " + patent)
  
}else if(heroXp >= 7001 && heroXp <= 8000){
  patent = "Platina"
  console.log("O Herói de nome " + heroName + " está no nível de " + patent)
  
}else if(heroXp >= 8001 && heroXp <= 9000){
  patent = "Ascendente"
  console.log("O Herói de nome " + heroName + " está no nível de " + patent)
  
}else if(heroXp >= 9001 && heroXp <= 10000){
  patent = "Imortal"
  console.log("O Herói de nome " + heroName + " está no nível de " + patent)
  
}else{
  patent = "Radiante"
  console.log("O Herói de nome " + heroName + " está no nível de " + patent)

}