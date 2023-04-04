const { ranges,baseValues, roles, colors, tiers, tribes,area }= require("./ElementList.js")
const {generateRandomIntegerInRange} = require("./helpers.js")

class Ability{
    constructor(isAttacker,rangeRole,rangeInd,gB){
        this.minionType = isAttacker ? "Attacker" : "Supporter"
        this.range = ranges[rangeRole][rangeInd]
        this.gameBoard = gB

    }

    findPotentialTargets(){
      let potentialTargets = []
      this.range.forEach(row => { 
        if(row.includes(1)){
          if(this.gameBoard[this.range.indexOf(row)][row.indexOf(1)] !== 0){
            let ptData = {}
             ptData.target = this.gameBoard[this.range.indexOf(row)][row.indexOf(1)]
             ptData.x = this.range.indexOf(row)
             ptData.y = row.indexOf(1)
             potentialTargets.push(ptData)
          }
        }        
      });  
      return potentialTargets
    }

    

    updateAttack(){
      let targets = this.findPotentialTargets()
      let x_pos = generateRandomIntegerInRange()
      let y_pos = generateRandomIntegerInRange()
      
    }



  }

module.exports = Ability

// a = new Ability("melee",1)
// console.log(a)
class BaseAttackAbility extends Ability {
    constructor(rangeRole,rangeInd,gB) {
      super(rangeRole,rangeInd,gB);
     
    }

    

    // range içerisinde 1 yazan yerlerin indisleri areada enemy bulunduruyorsa, random 1 tane seç hp - dmg kadar azalt. AMA BU SANKİ MEKanik

    //

  }
  
  class BaseSupportAbility extends Ability {
    constructor() {
      super();
    }
  }