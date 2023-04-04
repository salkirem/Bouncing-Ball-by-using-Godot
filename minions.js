const { unlockedMinions,ranges,baseValues, roles, colors, tiers, tribes, area }= require("./ElementList.js")
const Ability = require("./minionAbilities.js")

class Minions{    

    constructor(ind=0,lvl=0,ml = 0,tribeInd = -1,roleInd = -1,colorInd = -1,tierInd = -1,rangeInd = -1){
        this.minionName = "";
        this.minionBaseLevel = lvl;
        this.minionMergeLevel = ml
        this.minionIndx = ind;
        this.tribe = tribes[tribeInd]; //royal, pirate etc.
        this.role= roles[roleInd]; //ranged, melee etc
        this.color= colors[colorInd]; //red blue etc
        this.tier= tiers[tierInd]; //common,rare,etc
        this.DMG; 
        this.HP; 
        this.HITDMG = 0;
        this.rateOfFire;
        this.ability; //special ability and range of attack etc
            
    }

    // updateMinion(minName = ""){
    //     this.minionName = minName;
    // }

    upgradeMinionStats(ele){
        let parameter1 = 0.0475;
        let upgradeFactor = (1 + (this.minionBaseLevel-1)*parameter1) ;
        let upgradedElement = baseValues[this.minionName][ele] * upgradeFactor;
        return upgradedElement;
    }
    
    getRateOfFire(cd){
        let rof = baseValues[this.minionName][cd]
        return rof
      }

    getMinionAbility(isAttacker,rangeInd){
        let abl = new Ability(isAttacker,this.role,rangeInd,area)
        return abl
    }



    printMinion(){
        console.log("Minion Name",this.minionName, "Minion Level", this.minionBaseLevel, "Minion Ind", this.minionIndx);
    }



}       

module.exports = Minions   
                     
       
    


