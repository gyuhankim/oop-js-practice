class Player {
    constructor(name, hp, stats, money) {
        this._name = name;
        this._hp = hp;
        this._stats = stats;
        this._money = money;
    }

    get name() { // makes this read-only
        return this._name;
    }

    get hp() {
        return this._hp;
    }

    get stats() {
        return this._stats;
    }

    takeDamage(damage) {
        console.log(`${this.name} took ${damage} damage. Shrekt...`);
        return this._hp -= damage;
    }

    changeName(name) {
        return this._name = name;
    }

}

const playerStats = {
    hp : 100,
    str : 10,
    dex : 8,
    int : 5,
    luck : 1
}

console.log(playerStats.hp);