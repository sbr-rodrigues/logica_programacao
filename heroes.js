class Gamer {
  constructor(name, age, type, attack) {
    this.name = name
    this.age = age
    this.type = type
    this.attack = attack
  }

  combat() {
    console.log(`The ${this.age} -year-old ${this.type} ${this.name} attacked using a ${this.attack}`)
  }
}

let wizard = new Gamer("Bruno", 18, "Wizard", "used magic")

let warrior = new Gamer("Daniel", 16, "Warrior", "used a sword")

let monk = new Gamer("Felipe", 22, "Monk", "used martial arts")

let ninja = new Gamer("Julian", 18, "Ninja", "used shuriken")

wizard.combat()
warrior.combat()
monk.combat()
ninja.combat()
