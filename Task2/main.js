const userName = prompt("Select your name");
let userAge;
let carName;
let carAge;
let carStatus;
function correctData() {
  if (userName) {
    userAge = +prompt("Select your age");
    if (typeof userAge === "number") {
      carName = prompt("Select car name");
    } else {
      console.log("Input your age!!!");
      return false;
    }
    if (carName != null && carName != "") {
      carAge = +prompt("Select car age");
    } else {
      console.log("Input car age!!!");
      return false;
    }
    if (typeof carAge === "number") {
      carStatus = prompt("Select car satus");
    } else {
      console.log("Input car satus!!!");
      return false;
    }
    if (carStatus) {
      console.log("all good");
    }
  } else {
    console.log("Input your name!!!");
    return false;
  }
}

correctData();

function Car(carName, carStatus, carAge) {
  this.name = carName;
  this.carStatus = carStatus;
  this.age = carAge;
}

const newCar = new Car(carName, carStatus, carAge);

function User(userName, userAge) {
  this.name = userName;
  this.age = userAge;
  this.car = newCar;
}
const newUser = new User(userName, userAge);

console.log(newCar);

function haveCar() {
  if (parseInt(userAge) >= 18) {
    newUser.car = newCar;
  } else {
    newUser.car = "You cant have car";
  }
}

haveCar(userAge);

console.log(newUser);
