function Blah(name, hp = 100, stats, money = 1000) {
    this._name = name;
    this._hp = hp;
    this._stats = stats;
    this._money = money;
	
    function getName() {
        return name;
    }
	
    return {
        name: getName()
    };

}

const james = new Blah('lol');
console.log(james);