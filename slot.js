const Reel = require("./reel")

class Slot{

    constructor(){
        this.reels = [[]];
        this.setReels();
        this.getReel();
        this.spin();
        this.numOfReels = 3;
        this.slotLevel = 1;
    }

    setReels(){
        this.reels = [];
        for(let i = 0; i < this.numOfReels ; i ++){
            let r = new Reel(i,this.slotLevel) 
            this.reels.push(r);
        }
    }

    getReel(reelInd){
        return this.reels[reelInd]
    }

    spin(){
        this.reels.forEach((r)=> {
            r.updateReel();
        })
    }

    printSlot(){
        console.log("--Slot-- reels = \n", this.reels);
    }
}

module.exports = Slot;


// rls = new Slot()
// rls.setReels()
// console.log(rls.getReel(0).getSymbol(0).minionName,rls.getReel(1).getSymbol(0).minionName,rls.getReel(2).getSymbol(0).minionName);
// console.log(rls.reels)