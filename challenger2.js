let result = calculateRankedMatches(110, 12)

console.log(`O Herói tem de saldo de ${result[0]} está no nível de ${result[1]}`)

function calculateRankedMatches(win, loss) {
  let winBalance = win - loss
  let patent = ""

  // Se vitórias for menor do que 10 = Ferro
  if(winBalance < 10){
    patent = "Ferro"
  }
  // Se vitórias for entre 11 e 20 = Bronze
  else if(winBalance >= 11 && winBalance <= 20){
    patent = "Bronze"
  }
  // Se vitórias for entre 21 e 50 = Prata
  else if(winBalance >= 21 && winBalance <= 50){
    patent = "Prata"
  }
  // Se vitórias for entre 51 e 80 = Ouro
  else if(winBalance >= 51 && winBalance <= 80){
    patent = "Ouro"
  }
  // Se vitórias for entre 81 e 90 = Diamante
  else if(winBalance >= 81 && winBalance <= 90){
    patent = "Diamante"
  }
  // Se vitórias for entre 91 e 100= Lendário
  else if(winBalance >= 91 && winBalance <= 100){
    patent = "Lendário"
  }
  // Se vitórias for maior ou igual a 101 = Imortal
  else{
    patent = "Imortal"
  }
  
  return [winBalance, patent]
}