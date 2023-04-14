// Soldier
class Soldier {
    constructor(healthParam, strengthParam){
        this.health = healthParam;
        this.strength = strengthParam;
    }
    attack = () => {
        return this.strength;
    }
     receiveDamage = (damage) => {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor( nameParam, healthParam, strengthParam){
    super(healthParam, strengthParam)
    this.name = nameParam;
}   

    receiveDamage = (damage) => {
        this.health -= damage;
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    
    battleCry = () =>{
        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier{

    receiveDamage = (damage) => {
        this.health -= damage;
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
}


    addViking = (vikingSoldier) =>{
        this.vikingArmy.push(vikingSoldier)
    }
    addSaxon = (saxonSoldier) =>{
        this.saxonArmy.push(saxonSoldier)
    }
    vikingAttack = () =>{
        let saxonRandom = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let vikingRandom = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let vikingStrength = vikingRandom.strength;
        let result = saxonRandom.receiveDamage(vikingStrength);
        if(saxonRandom.health <= 0){
            this.saxonArmy.pop()
        }
        return result
    }
    saxonAttack = () =>{
        let saxonRandom = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let vikingRandom = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let saxonStrength = saxonRandom.strength;
        let result = vikingRandom.receiveDamage(saxonStrength);
        if(vikingRandom.health <= 0){
            this.vikingArmy.pop()
        }
        return result        
    }
    showStatus = () =>{
        if(this.saxonArmy <= 0){
            return "Vikings have won the war of the century!"
        } else if(this.vikingArmy <= 0){
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        };
    }

}

