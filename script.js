//  Car Constructor
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Method added to Car prototype
Car.prototype.getMakeModel = function() {
  return `${this.make} ${this.model}`;
};

// SportsCar Constructor (inherits from Car)
function SportsCar(make, model, topSpeed) {
  // Call Car constructor to inherit make and model
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit from Car's prototype
SportsCar.prototype = Object.create(Car.prototype);

// Reset the constructor reference (good practice)
SportsCar.prototype.constructor = SportsCar;

// Add method specific to SportsCar
SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};

//  Example Test
const car = new SportsCar("Ferrari", "Testarossa", 200);

console.log(car.getMakeModel()); // Output: Ferrari Testarossa
console.log(car.getTopSpeed());  // Output: 200
