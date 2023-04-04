const Minions = require("./Minions.js");


class Musketeer extends Minions {
  constructor(isAlliance, ind=-1,lvl=1, ml = 1,tribeInd = 1,roleInd = 1,colorInd = 3,tierInd = 0){
    super(ind,lvl,ml,tribeInd,roleInd,colorInd,tierInd);
    this.isAlliance = isAlliance;
    this.minionName = "Musketeer";
    this.HP = this.isAlliance ? this.upgradeMinionStats("hp") : Math.floor(this.upgradeMinionStats("hp") * 0.36);
    this.DMG = this.isAlliance ? this.upgradeMinionStats("dmg") : Math.floor(this.upgradeMinionStats("dmg") * 0.5);
    this.rateOfFire = this.getRateOfFire("cd")  
    this.ability = this.getMinionAbility(true,1) 

}
  


}
 

module.exports = Musketeer;

// let a= new Musketeer() 
// console.log(a)