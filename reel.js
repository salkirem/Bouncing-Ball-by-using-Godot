const Alliance = require("./alliance.js")
const { generateRandomIntegerInRange } = require("./helpers")


class Reel{
   


    constructor(ind = -1, lvlSlot = -1){
        this.slotLevel = lvlSlot;
        this.reelContains = [];
        this.reelInd = ind;
        this.numOfMinions = 1;
        this.hittedMinion = []
        this.getReelContains()
        this.generateReel()

    }
    generateReel(){
        this.updateReel();
        // this.updateMinionInd();
        this.getSymbol()
    }
    getReelContains(){
        
        let al = new Alliance()
        this.reelContains = al.teamSelection
    }

    updateReel(){
        let num = generateRandomIntegerInRange(0, this.reelContains.length - 1)
        this.hittedMinion = [this.reelContains[num]]  
    }

    // updateMinionInd(){
    //     this.hittedMinion.minionIndx = 0 ; 
    // }

    getSymbol(){
        return this.hittedMinion[0]
    }

}

module.exports = Reel
// let a = new Reel()
// a.updateReel()
// a.updateMinionInd()
// console.log("------------------",a.reelContains,"***************\n\n\n\n\n\n",a.hittedMinion.minionIndx)

// console.log("***************\n\n\n\n\n\n",(a.hittedMinion), "\n\n\n\n\n\n\n\n\n\n\n\n,",a.getSymbol(0))
