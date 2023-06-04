// For the Cat class:

// Give the class at least three properties.
// Give the class at least three methods.
// Create two instances of the class (two cats).
// Log both instances to see their properties.
// Invoke each method from both instances.

 class Cat {
 constructor(name, color, age) {
  this.name = name;
  this.color = color;
  this.age = age;
 }
 meow() {
  console.log("Meow!");
 }
 purr() {
  console.log("Purr!");
 }
 scratch() {
  console.log("Scratch!");
 }
}

const cat1 = new Cat("Mittens", "black", 2);
const cat2 = new Cat("Fluffy", "white", 1);

console.log(cat1);
console.log(cat2);

cat1.meow();
cat1.purr();
cat1.scratch();

cat2.meow();
cat2.purr();
cat2.scratch();

// Create three properties that are set by the constructor.
// Create three methods.
// Instantiate two arrays of three pirates, name the arrays after your favorite pirate ships: jollyRoger and blackPearl.
// Loop over each array and print three properties of each pirate.
class Pirate {
 constructor(name, age, weapon) {
  this.name = name;
  this.age = age;
  this.weapon = weapon;
 }
 attack() {
  console.log("Attack!");
 }
  stand() {
  console.log("Stand!");
 }
 sail() {
  console.log("Sail!");
 }
}

const jollyRoger = [ new Pirate("Jack Sparrow", 35, "sword"), new Pirate("Will Turner", 30, "sword"), new Pirate("Elizabeth Swann", 25, "sword") ];
const blackPearl = [ new Pirate("Jack Sparrow", 35, "sword"), new Pirate("Will Turner", 30, "sword"), new Pirate("Elizabeth Swann", 25, "sword") ];

for (let i = 0; i < jollyRoger.length; i++) {
 console.log(jollyRoger[i]);
}

for (let i = 0; i < blackPearl.length; i++) {
 console.log(blackPearl[i]);
}

