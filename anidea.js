class GameManager {
  constructor(player) {
    this.player = player;
  }

  upgradeMinionLevel(minion, cost) {
    if (this.player.hasEnoughCoins(cost)) {
      minion.minionLevel++;
      this.player.deductCoins(cost);
      console.log(`Upgraded ${minion.minionName} to level ${minion.minionLevel}`);
    } else {
      console.log(`Not enough coins to upgrade ${minion.minionName}`);
    }
  }
}

class Player {
  constructor(coins) {
    this.coins = coins;
    this.minions = [];
  }

  addMinion(minion) {
    this.minions.push(minion);
  }

  hasEnoughCoins(cost) {
    return this.coins >= cost;
  }

  deductCoins(cost) {
    this.coins -= cost;
  }
}

// Example usage:

const player = new Player(100);
const knightMinion = new Knight(1, 1);
player.addMinion(knightMinion);
const gameManager = new GameManager(player);

gameManager.upgradeMinionLevel(knightMinion, 10); // Upgrade to level 2, deduct 10 coins from player's balance
gameManager.upgradeMinionLevel(knightMinion, 100); // Not enough coins to upgrade, no changes made


//In this implementation, we've separated the game mechanics related to upgrading minions into a GameManager 
//class and a Player class. The Player class tracks the player's coin balance and minion collection, while the 
//GameManager class provides methods for upgrading minion levels and handles the logic for deducting coins from 
//the player's balance. When the player tries to upgrade a minion's level, they call the upgradeMinionLevel method of
// the GameManager class and pass in the minion and the cost of the upgrade as parameters. The GameManager then checks 
//if the player has enough coins to pay for the upgrade, and if so, increases the minion's level and deducts the cost 
//from the player's balance. If the player doesn't have enough coins, nothing happens.