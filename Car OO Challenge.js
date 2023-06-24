// Part 1
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  honk() {
    return "Beep.";
  }

  toString() {
    return `The vehicle is a ${this.make} ${this.model} and ${this.year}.`;
  }
}

// Part 2
class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

// Part 3
class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }

  revEngine() {
    return "Vroom!!";
  }
}

// Part 4
class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }

  add(newVehicle) {
    // Check if newVehicle is an instance of Vehicle
    if (!(newVehicle instanceof Vehicle)) {
      // If not, do not add it to the garage
      return "Invalid vehicle. Cannot add to the garage.";
    }

    // Check if the garage is already full
    if (this.vehicles.length >= this.capacity) {
      return "Sorry, the garage is full.";
    }

    // Add the newVehicle to the vehicles array
    this.vehicles.push(newVehicle);
    return "Vehicle added to the garage!";
  }
}
