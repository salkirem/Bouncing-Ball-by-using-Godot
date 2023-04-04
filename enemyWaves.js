const Villager = require("./villager.js")
const Musketeer = require("./musketeer.js")
const Wizard = require("./wizard.js")
const { generateRandomIntegerInRange, loadJson,mergeMinions } = require("./helpers")
class Wave {
    wL = loadJson("waveLists");

    constructor() {
        this.waves = [[[]]];
        this.generateWaves()
    }

    generateWaves(){
        this.getWaveLists();
        this.getEnemyTurnsAndWaves();
        this.updateEnemyMergeLevel();
    }

    getWaveLists() {
        const waveList = Object.values(this.wL)
        this.waves = waveList.map((wave) => {
        return wave.map((turn) => {
            return turn.map((enemyType) => {
            switch (enemyType) {
                case 'Villager':
                return new Villager(false);
                case 'Musketeer':
                return new Musketeer(false);
                case 'Wizard':
                return new Wizard(false);
                default:
                return "E";
            }
            });
        });
        });
    }

    getEnemyTurnsAndWaves(){
        this.waves.forEach(wave =>{
            let wNum = this.waves.indexOf(wave) + 1
            wave.forEach(turn => {
                let tNum = wave.indexOf(turn) + 1
                turn.forEach(enemy =>{
                    if(enemy!=="E"){
                        enemy.waveNumber = wNum;
                        enemy.turnNumber = tNum;
                    }
                })
                //console.log(turn)
            })
        })
    }
    updateEnemyMergeLevel() {
        this.waves.forEach((wave, waveIndex) => {
            wave.forEach((turn, turnIndex) => {
                if(turnIndex%3===0){
                    // console.log("merge search begin")
                    turn.forEach((enemy, enemyIndex) => {
                        // Check if the cell is not empty and the enemy has not already been merged
                        if (enemy !== "E" && !enemy.merged) {
                            // Check the previous turn for enemies to merge
                            if (turnIndex > 0) {
                                const previousTurn = wave[turnIndex - 1];
                                const mergeIndex = previousTurn.findIndex((e) => {
                                    return e !== "E" && e.minionName === enemy.minionName && e.minionMergeLevel === enemy.minionMergeLevel;
                                });
                                if (mergeIndex !== -1) {
                                    const mergedEnemy = mergeMinions(previousTurn, enemy);
                                    previousTurn[mergeIndex] = "E";
                                    turn[enemyIndex] = mergedEnemy;
                                    mergedEnemy.minionMergeLevel += 1;
                                    this.getEnemyTurnsAndWaves()
                                    //mergedEnemy.merged = true;
                                    //console.log(mergedEnemy)

                                    return;
                                }
                            }
                            // Check the next turn for enemies to merge
                            if (turnIndex < wave.length - 1) {
                                const nextTurn = wave[turnIndex + 1];
                                const mergeIndex = nextTurn.findIndex((e) => {
                                    return e !== "E" && e.minionName === enemy.minionName && e.minionMergeLevel === enemy.minionMergeLevel;
                                });
                                if (mergeIndex !== -1) {
                                    const mergedEnemy = mergeMinions(nextTurn, enemy);
                                    nextTurn[mergeIndex] = "E";
                                    turn[enemyIndex] = mergedEnemy;
                                    mergedEnemy.minionMergeLevel += 1;
                                    //mergedEnemy.merged = true;
                                    this.getEnemyTurnsAndWaves()
                                    return;
                                }
                            }
                            // Check the current turn for enemies to merge
                            const mergeIndex = turn.findIndex((e, i) => {
                                return i !== enemyIndex && e !== "E" && e.minionName === enemy.minionName && e.minionMergeLevel === enemy.minionMergeLevel;
                            });
                            if (mergeIndex !== -1) {
                                const mergedEnemy = mergeMinions(turn, enemy);
                                turn[mergeIndex] ="E";
                                turn[enemyIndex] = mergedEnemy;
                                //console.log(mergedEnemy)
                                mergedEnemy.minionMergeLevel += 1;
                                this.getEnemyTurnsAndWaves()
                                //mergedEnemy.merged = true;
                            }

                        }
                    });
                }
            });
        });
    }

    

    updateEnemyBaseLevel(){
        
        return
    }
}
module.exports = Wave;
// let wave = new Wave();
// console.log(wave)
