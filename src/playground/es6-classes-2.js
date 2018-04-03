class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGretting() {
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation){
    super(name, age)
    this.homeLocation = homeLocation
  }
  hasHomeLocation(){
    return !!this.homeLocation
  }
  getGretting(){
    return `${super.getGretting()}. ${this.hasHomeLocation()?`I'm from ${this.homeLocation}.`:''}`
  }
}

const me = new Traveler('Andrew Mead', 26, 'Philadelphia');
console.log(me.getGretting());

const other = new Traveler();
console.log(other.getGretting());
