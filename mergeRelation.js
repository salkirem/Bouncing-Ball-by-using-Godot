const SlotMechanic = require("./slotMechanics")
const { generateRandomIntegerInRange } = require("./helpers")


class Merge{

    mergeAreaSize = 20;

    constructor(){
        this.minionsInMergeArea = Array(20).fill("E");
        this.generatedMinionsPerSpin = [];
        this.slotProduction;

    }

    getSpinResult(){
        this.slotProduction = new SlotMechanic()
    
    }

    updateSlot(){
        this.slotProduction.updateSpin()
    }

    upgradeSlot(){
        this.slotProduction.updateSlotLevel()
    }

    getGeneratedMinions(){
        this.generatedMinionsPerSpin = [];
        this.slotProduction.organizeSpinResult()
        this.slotProduction.spinResult.forEach(res => {
            this.generatedMinionsPerSpin.push(res)
            //console.log(res)
        })   
    }

    
    getMinionToMergeArea() {
        // Check if merge area is full
        let emptyCell = [];
        this.minionsInMergeArea.forEach(m => {
            if(m==="E"){
                emptyCell.push(m)
            }
        })
        if (this.generatedMinionsPerSpin.length >= emptyCell.length ) {
            console.log("Not enough space in merge area to place generated minions.");
            return;
        }
    
        else{
            let i = 0;
            let pos;
            while (i < this.generatedMinionsPerSpin.length) {
                pos = generateRandomIntegerInRange(0,this.minionsInMergeArea.length-1)
                if (this.minionsInMergeArea[pos] === "E") {
                    this.minionsInMergeArea[pos] = this.generatedMinionsPerSpin[i];
                    i++;
                }
            }
        }
    }
    
    mergeMinionsInMergeArea() {
        const minionCounts = {};
    
        // Iterate over each minion in the merge area
        for (let i = 0; i < this.minionsInMergeArea.length; i++) {
            const minion = this.minionsInMergeArea[i];
    
            // Check if the cell is not empty and the minion has not already been merged
            if (minion !== "E" && !minionCounts[`${minion.minionName}${minion.minionMergeLevel}`]) {
                // Count the number of minions with the same name and merge level
                let count = 1;
                for (let j = i + 1; j < this.minionsInMergeArea.length; j++) {
                    const otherMinion = this.minionsInMergeArea[j];
                    if (otherMinion !== "E" && otherMinion.minionName === minion.minionName && otherMinion.minionMergeLevel === minion.minionMergeLevel) {
                        count++;
                    }
                }
    
                // If there are two or more minions with the same name and merge level, merge them
                if (count >= 2) {
                    // Remove the merged minions from the merge area
                    for (let j = i; j < this.minionsInMergeArea.length; j++) {
                        const otherMinion = this.minionsInMergeArea[j];
                        if (otherMinion !== "E" && otherMinion.minionName === minion.minionName && otherMinion.minionMergeLevel === minion.minionMergeLevel) {
                            this.minionsInMergeArea[j] = "E";
                        }
                    }
    
                    // Add the merged minion to the merge area
                    const mergedMinion = {
                        minionName: minion.minionName,
                        minionBaseLevel : minion.minionBaseLevel,
                        minionMergeLevel: minion.minionMergeLevel + 1,
                        minionIndx : -1,
                        tribe : minion.tribe,
                        role : minion.role,
                        color : minion.color,
                        tier : minion.tier,
                        HITDMG : 0,
                        HP : Math.floor(minion.HP * 1.5),
                        DMG : Math.floor(minion.DMG * 1.5),
                        rateOfFire : minion.rateOfFire,
                        ability : minion.ability,

                    };
                    this.minionsInMergeArea[i] = mergedMinion;
    
                    // Mark the merged minions as counted
                    minionCounts[`${minion.minionName}${minion.minionMergeLevel}`] = true;
                    minionCounts[`${minion.minionName}${minion.minionMergeLevel+1}`] = true;
                } else {
                    // Mark the minion as counted
                    minionCounts[`${minion.minionName}${minion.minionMergeLevel}`] = true;
                }
            }
        }

    }


    getMinionIndex(){
        this.minionsInMergeArea.forEach(m =>{
            if(m!=="E"){
                m.minionIndx = this.minionsInMergeArea.indexOf(m)
            }
        })
    }


    generateMerge(){
        this.updateSlot();
        this.getGeneratedMinions();
        this.getMinionToMergeArea();
        this.mergeMinionsInMergeArea();
        this.getMinionIndex()
    }

    

   
}

module.exports = Merge;

// let merge = new Merge()
// let a = []
// merge.getSpinResult()
// for (let i = 0; i < 5; i++) {
//     merge.updateSlot()
//     merge.getGeneratedMinions()
//     console.log("instant spin",merge.generatedMinionsPerSpin)
//     merge.getMinionToMergeArea()
//     merge.mergeMinionsInMergeArea()
//     // merge.mergeUnitsInMergeArea()
// }

// console.log( "\n aaaaaaaa \n",merge.minionsInMergeArea)