function Character(name, hp, swagLevel) {
    this._name = name;
    this._hp = hp;
    this._swagLevel = swagLevel;
}

function setName(obj, name) {
    obj._name = name;
}

const James = new Character('James', 100, 'Over 9000');
setName(James, 'Joe');
console.log(James);