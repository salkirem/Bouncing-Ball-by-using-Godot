function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function   mergeMinions(minions, minion) {
    const mergedMinion = minions.find((m) => m.minionName === minion.minionName && m.minionMergeLevel === minion.minionMergeLevel);

    if (mergedMinion) {
    // Remove the existing minion from the array
    
    minions.splice(minions.indexOf(mergedMinion), 1);
    }

    return mergedMinion ? { ...mergedMinion, minionMergeLevel: mergedMinion.minionMergeLevel} : minion;
}


function loadJson(jsonFileName){
    jsonObjs = require('./'+jsonFileName+'.json')
    return jsonObjs
}

module.exports = {generateRandomIntegerInRange,mergeMinions,loadJson}