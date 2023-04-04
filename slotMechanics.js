const Slot = require("./slot")
const { mergeMinions } = require("./helpers")


class SlotMechanic {


    constructor() {
        this.slot = [[]];
        this.spinResult = [];
        this.getSlot();
    }

    getSlot() {
        this.slot = new Slot()
        this.slot.setReels()
    }

    updateSpin() {
        this.slot.spin();
    }

    updateSlotLevel(){
        return this.slot.slotLevel++
    }

    organizeSpinResult() {
        const minionCounts = {
        "Villager": 0,
        "Musketeer": 0,
        "Wizard": 0,
        "Piper": 0,
        };
        const mergedMinions = [];


        // Iterate over each minion in the slot result
        for (let i = 0; i < this.slot.numOfReels; i++) {
            const minion = this.slot.getReel(i).getSymbol();
            //console.log(minion.minionMergeLevel,minion.minionName)
            // Increment the count for this minion type
            minionCounts[minion.minionName]++;

            // Check if we have a match
            if (minionCounts[minion.minionName] >= 2 ){//|| minionCounts[minion.minionName] === 3) {
                // Merge the minions
                const mergedMinion = mergeMinions(mergedMinions, minion);

                // Increase the merged minion level by the appropriate amount
                mergedMinion.minionMergeLevel += minionCounts[minion.minionName]-1;
                
                // Reset the counts for all minion types
                    for (const key of Object.keys(minionCounts)) {
                        minionCounts[key] = 0;
                    }

                //Add the merged minion to the result
                mergedMinions.push(mergedMinion);

            } 
            else {
                // Use filter() to remove existing minions of the same type
                const existingMinions = mergedMinions.filter(m => m.minionName === minion.minionName && m.minionType === minion.minionType);
                if (existingMinions.length > 0) {
                    existingMinions.forEach(m => {
                        m.minionMergeLevel++;
                        // console.log(m.minionMergeLevel,"**************")
                    });
                    
                } 
                else {
                    mergedMinions.push(minion);     
                }
            }
            // console.log(minion.minionName)
        }
        this.spinResult = mergedMinions;
        this.upgradeMinionStats()
        }

        upgradeMinionStats(){
            this.spinResult.forEach(m=>{
                m.HP = Math.floor(m.HP * (1 + (m.minionMergeLevel -1)*0.5));
                m.DMG = Math.floor(m.DMG * (1 + (m.minionMergeLevel -1)*0.5))
            })
        }


      
   
}


module.exports = SlotMechanic
// let m = new SlotMechanic()
// m.organizeSpinResult()

// console.log(m.spinResult)
