const Minions = require("./Minions.js");


class Piper extends Minions {
  constructor(isAlliance,ind=-1,lvl=1, ml = 1,tribeInd = 2,roleInd = 3,colorInd = 2,tierInd = 0){
    super(ind,lvl, ml,tribeInd,roleInd,colorInd,tierInd);
    this.isAlliance = isAlliance;
    this.minionName = "Piper";
    this.HP = this.isAlliance ? this.upgradeMinionStats("hp") : Math.floor(this.upgradeMinionStats("hp") * 0.36);
    this.DMG = this.isAlliance ? this.upgradeMinionStats("dmg") : Math.floor(this.upgradeMinionStats("dmg") * 0.5);
    this.rateOfFire = this.getRateOfFire("cd") 
    this.ability = this.getMinionAbility(false,1) 

}
  


}
 

module.exports = Piper;

// let a= new Piper() 
// console.log(a)