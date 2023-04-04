const Villager = require("./villager.js")
const Musketeer = require("./musketeer.js")
const Wizard = require("./wizard.js")
const Piper = require("./piper.js")
const { generateRandomIntegerInRange } = require("./helpers")
// const { unlockedMinions,ranges,baseValues, roles, colors, tiers, tribes, area }= require("./ElementList.js")


class Alliance{

    
    constructor(){
    this.allianceList = {} ;
    this.teamSelection = [] ;
    this.generateAllianceandTeam()
    }

    getMinions(){
        let aList = {}
        aList[0] = new Villager(true) ;
        aList[1] = new Musketeer(true) ; 
        aList[2] = new Wizard(true) ;
        aList[3] = new Piper(true) ; 
        return aList ; 
    }

    updateAllianceList(){
        this.allianceList = this.getMinions()
    }


    createTeamForBattle() {
        // let indList = [];
        // for (let i = 0; i < 3; i++) {
        //   let j;
        //   do {
        //     j = generateRandomIntegerInRange(0, Object.keys(this.allianceList).length - 1);
        //     //console.log(j)
        //   } while (indList.includes(j));
        //   indList.push(j);
        //   //console.log(indList)
        let indList = [0,1,2]
        indList.forEach(j =>{ 
          this.teamSelection.push(this.allianceList[j])})
    //}
      
    }

    generateAllianceandTeam(){
        this.updateAllianceList()
        this.createTeamForBattle()
    }





}

module.exports = Alliance;
// let a = new Alliance()
// // a.generateAllianceandTeam()
// console.log(a.teamSelection)
// // console.log(a.alliance[0].ability.range)
