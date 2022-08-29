const userName = prompt("Select your name");
let userAge;
let carName;
let carAge;
let carStatus;
function getCorrectData() {
  if (userName != null && userName != "") {
    userAge = prompt("Select your age");
    if (
      userAge === +userAge &&
      isFinite(userAge) &&
      userAge != "" &&
      userAge != null
    ) {
      carName = prompt("Select car name");
    } else {
      console.log("Input your age!!!");
      return false;
    }
    if (carName != null && carName != "") {
      carAge = prompt("Select car age");
    } else {
      console.log("Input car age!!!");
      return false;
    }
    if (
      carAge === +carAge &&
      isFinite(carAge) &&
      carAge != "" &&
      carAge != null
    ) {
      carStatus = prompt("Select car satus");
    } else {
      console.log("Input car satus!!!");
      return false;
    }
    if (carStatus != null && carStatus != "") {
      console.log("all good");
    }
  } else {
    console.log("Input your name!!!");
    return false;
  }
}

getCorrectData();

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
