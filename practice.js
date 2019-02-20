class Character {

    constructor(name, stats, money) {
        this._name = name;
        this._stats = stats;
        this._money = money;
    }

    get name() { // makes this read-only
        return this._name;
    }

    get hp() {
        return this._stats.hp;
    }

    get stats() {
        return this._stats;
    }

    takeDamage(damage) {
        let flavorText = '';
        if (damage <= 10) {
            flavorText = 'Just a scratch!';
        } else if (damage >= 11 && damage <= 30) {
            flavorText = 'Ouch.';
        } else if (damage >= 31) {
            flavorText = 'Pwned, gg!';
        }
        console.log(`${this.name} took ${damage} damage. ${flavorText}`);
        return this._stats.hp -= damage;
    }

}

class Enemy extends Character {
    constructor(name, stats, money, loot, exp) {
        super(name, stats, money);
        this._loot = loot;
        this._exp = exp;
    }

    get loot() {
        return this._loot;
    }

    get exp() {
        return this._exp;
    }

}

class Player extends Character {
    constructor(name, stats, money, level, job) {
        super(name, stats, money);
        this._level = level;
        this._job = job;
    }

    get job() {
        return this._job;
    }

    get level() {
        return this._level;
    }

    doDamage(damage, target) {
        console.log(`${this.name} does ${damage} damage to ${target.name}`);
        return target.takeDamage(damage);
    }
}

const boar = new Enemy('Boar', {hp: 100}, 0, 'Brown Gloves', 45);
const player = new Player('Player', {hp: 100}, 500, 5, 'Warrior');
console.log(boar);
console.log(player);
player.doDamage(8, boar);
player.doDamage(20, boar);
player.doDamage(80, boar);

if (boar.hp <= 0) {
    console.log('Dis boar ded.');
}
