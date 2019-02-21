'use strict';

// http://marijnhaverbeke.nl/talks/es6_falsyvalues2015/exercises/#Point

// 1
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(targetPoint) {
    return new Point(this.x + targetPoint.x, this.y + targetPoint.y);
  }
}
const coord1 = new Point(1, 2);
const coord2 = new Point(2, 1);
// console.log(coord1.plus(coord2));

// 2
class Speaker {
  constructor(name, verb) {
    this.name = name;
    this.verb = verb || 'says';
  }

  speak(text) {
    console.log(`${this.name} ${this.verb} '${text}'`);
  }
}

// const joe = new Speaker('Joe', 'throws');
// joe.speak('Hello world');

class Shouter extends Speaker {
  constructor(name, verb) {
    super(name, verb || 'shouts');
  }

  // get theVerb() {
  //   return (this.verb = 'shouts');
  // }

  speak(text) {
    super.speak(text.toUpperCase());
  }
}

// console.log(new Shouter('James').verb);
console.log(new Shouter('James').speak('hi'));
