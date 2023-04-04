const Minions = require("./Minions.js");


class Wizard extends Minions {
  constructor(isAlliance,ind=-1,lvl=1, ml = 1,tribeInd = 0,roleInd = 2,colorInd = 0,tierInd = 0){
    super(ind,lvl,ml,tribeInd,roleInd,colorInd,tierInd);
    this.isAlliance = isAlliance
    this.minionName = "Wizard";
    this.HP = this.isAlliance ? this.upgradeMinionStats("hp") : Math.floor(this.upgradeMinionStats("hp") * 0.36);
    this.DMG = this.isAlliance ? this.upgradeMinionStats("dmg") : Math.floor(this.upgradeMinionStats("dmg") * 0.5);
    this.rateOfFire = this.getRateOfFire("cd") 
    this.ability = this.getMinionAbility(true,1) 

}
  


}
 

module.exports = Wizard;

// let a= new Wizard() 
// console.log(a)