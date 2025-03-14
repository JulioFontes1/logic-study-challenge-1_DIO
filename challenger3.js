class hero{
  constructor(name, age, type){
    this.name = name
    this.age = age
    this.type = type
    this.attackType
  }

  attack() {
    console.log(`O ${this.type} atacou usando ${this.selectAttack()}`)
  }

  selectAttack(){
    let attackType
    switch (this.type) {
      case "mago":
        attackType = "magia"
        break;
      case "guerreiro":
        attackType = "espada"
        break;
      case "monge":
        attackType = "artes marciais"
        break;
      case "ninja":
        attackType = "shuriken"
        break;
      default:
        break;
    }
    return attackType
  }
}

const John = new hero("Jonh", 27, "monge")
const Lucas = new hero("Lucas", 22, "ninja")
John.attack()
Lucas.attack()