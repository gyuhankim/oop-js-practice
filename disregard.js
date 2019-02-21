const anagram = str => {
  const obj = {};
  
  // Validate if input is string
  if (typeof str !== 'string') {
    console.log('Input is not a string.');
    return ;
  }

  // Anagram must contain more than 1 character
  if (str.length <= 1) {
    console.log('Word must be longer than 1 character');
    return ;
  }

  // Remove all whitespace from input
  // Make input all lower-case
  let newStr = str.replace(/\s/g, "").toLowerCase();

  // Create an array of letters from input
  const letters = newStr.split('');

  // Iterate through letters array to populate an object
  // with key value pairs of {letter: # of occurrences} 
  for (let i = 0; i < letters.length; i++) {
    if (Object.keys(obj).find(value => value === letters[i]) !== undefined) {
      ++obj[letters[i]];
    } else {
      obj[letters[i]] = 1;
    }
  }

  // Iterate through an array containing letter occurrences
  // Count odd number of occurrences
  let oddCount = 0;
  for (let i = 0; i < Object.values(obj).length; i++) {
    if (Object.values(obj)[i] % 2 !== 0) {
      ++oddCount;
    }
  }
  
  // If odd number of occurrences > 1 then it isn't an anagram
  if (oddCount > 1) {
    return `"${str}" is not an anagram...`;
  } else {
    return `"${str}" is an anagram!`;
  }
  
}

console.log(anagram('Racecar'));

class Character {
  constructor(name, health, mana, str, int) {
    this._name = name;
    this._health = health;
    this._mana = mana;
    this._str = str;
    this._int = int;
  }

  get currentHealth() {
    return this._health;
  }

  get name() {
    return this._name;
  }

  takeDamage(damage) {
    return this._health -= damage;
  }

  recoverHealth(hp) {
    return this._health += hp;
  }

}

const player = new Character('Link', 100, 20, 10, 10);

player.takeDamage(20);
console.log(player.currentHealth);
console.log(player.name);
