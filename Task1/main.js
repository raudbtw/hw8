const userName = prompt("Select your name");
const userAge = prompt("Select your age");

function User(userName, userAge) {
  this.name = userName;
  this.age = userAge;
}

const newUser = new User(userName, userAge);
console.log(newUser);
