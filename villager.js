const Minions = require("./Minions.js");


class Villager extends Minions {
  constructor(isAlliance,ind=-1,lvl=1,ml = 1,tribeInd = 0,roleInd = 0,colorInd = 1,tierInd = 0){
    super(ind,lvl,ml,tribeInd,roleInd,colorInd,tierInd);
    this.isAlliance = isAlliance;
    this.minionName = "Villager";
    this.HP = this.isAlliance ? this.upgradeMinionStats("hp") : Math.floor(this.upgradeMinionStats("hp") * 0.36);
    this.DMG = this.isAlliance ? this.upgradeMinionStats("dmg") : Math.floor(this.upgradeMinionStats("dmg") * 0.5); 
    this.rateOfFire = this.getRateOfFire("cd") 
    this.ability = this.getMinionAbility(true,1) 
  
  }
  

//   findPotentialTargets(){
//     let potentialTargets = []
//     this.ability.range.forEach(row => { 
//       if(row.includes(1)){
//         if(this.gameBoard[this.ability.range.indexOf(row)][row.indexOf(1)] !== 0){
//           let ptData = {}
//            ptData.target = this.gameBoard[this.ability.range.indexOf(row)][row.indexOf(1)]
//            ptData.x = this.ability.range.indexOf(row)
//            ptData.y = row.indexOf(1)
//            potentialTargets.push(ptData)
//         }
//       }        
//     });  
//     console.log(potentialTargets)
//     return potentialTargets
//   }
}



module.exports = Villager;

// let a= new Villager() 
// console.log(a)