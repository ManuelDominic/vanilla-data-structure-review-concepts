import "./styles.css";

const bubbleSort = arr => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};

const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
};

const merger = (left, right) => {
  const arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return arr;
};

const ArrayList = [9, 0, 5, 7, 1, 3, 7];
const ArrayList1 = [4, 0, 5, 0];
const ArrayList2 = [7, 1, 3, 3];
const sort1 = bubbleSort(ArrayList);
const sort2 = selectionSort(ArrayList);
const sort3 = merger(ArrayList1, ArrayList2);

console.log(sort1);
console.log(sort2);
console.log(sort3);

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getBirthYear = function() {
    return `${this.dob}`;
  };
  this.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };
}

const person1 = new Person("Manuel", "Dominic", "08-06-1994");
console.log(person1);
console.log(person1.getBirthYear());
console.log(person1.getFullName());

function Animal(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}

Animal.prototype.getBirthYear = function() {
  return `${this.dob}`;
};
Animal.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

const animal1 = new Person("Jack", "max", "02-04-2009");
console.log(animal1);
console.log(animal1.getBirthYear());
console.log(animal1.getFullName());

class Student {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  getBirthYear() {
    return `${this.dob}`;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const student1 = new Student("Joseph", "Ann", "06-16-2000");
console.log(student1);
console.log(student1.getBirthYear());
console.log(student1.getFullName());

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  Emmanuel is taking care of you at mastery!!,
  So don't worry!!!
</div>
`;
