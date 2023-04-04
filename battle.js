const Merge = require("./mergeRelation.js")
const { generateRandomIntegerInRange } = require("./helpers")


class Attack {
    round = 1000
    constructor() {
      this.minions = [];
      this.deadMinionList = []
      this.merge;
      this.numberOfEnemy = this.getRandomAmountOfEnemy();
      this.getMergeArea()
      this.generateMinions()

    }
  
    getMergeArea(){
        this.merge = new Merge();
        this.merge.getSpinResult()
    }

    generateMinions(){
        this.merge.generateMerge();
        this.minions = this.merge.minionsInMergeArea

        // for(let i = 0; i < this.round; i++){
        //     this.merge.generateMerge();
        // }
    }

    

    getRandomAmountOfEnemy(){
        let numberOfEnemy = generateRandomIntegerInRange(1,5);
        return numberOfEnemy
    }

    // This method selects a random minion from the array and attempts to attack it.
    attackMinion() {
      const targetIndex = Math.floor(Math.random() * this.minions.length);
      const target = this.minions[targetIndex];
      //console.log(target)
      const isHit = Math.random() < 1;
        if(this.minions[targetIndex]!=="E"){
            if (isHit) {
            const damage = this.numberOfEnemy*target.DMG * 0.36;
            target.HP -= damage;
            target.HITDMG +=damage
            //console.log("\n\n\n DAMAGE HIT",this.minions[targetIndex],damage, this.numberOfEnemy,targetIndex)
                if (target.HP <= 0) {
                // If the minion is dead, remove it from the array.
                //console.log(this.minions[targetIndex],"deadd")
                this.minions[targetIndex] = "E"
                //console.log(this.minions[targetIndex],"deadd empty")

                //this.minions.splice(targetIndex, 1);
                
                this.deadMinionList.push(target)
                }
            }
            
        }
        return target
    }

    generateBattle(){
        for(let i = 0; i < this.round; i++){
            let prob = i%3;
            prob === 0 ? this.generateMinions(): this.attackMinion() 
            // this.generateMinions()
            // this.attackMinion()
        }
        console.log(this.minions,"\n\n\n\n", this.deadMinionList)
    }

    getRatio(){
        let mCount = 0
        let dmCount = 0
        this.minions.forEach(m =>{    
            if(m !==("E")){
                mCount++
            }
        })
        dmCount = this.deadMinionList.length
        console.log(mCount,dmCount)
        return {mCount,dmCount}
    }
}
  

  module.exports = Attack


  let atk = new Attack()
  //atk.getMinionsInTheMergeArea();
  //atk.attackMinion()
  atk.generateBattle()
  atk.getRatio()
//   console.log(atk.minions)//,atk.minionsInMergeArea)