//Constructors
/*const Person = function (firstName, birthYear) {
    //Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    //Instance method
    //Never to this;
    //this.calAge = function () {
      //  console.log(2037 - this.birthYear);

    //};

};
const anjali = new Person('anjali', 2001);
console.log(Person);
console.log(anjali);

//1.New  Object {} is created
//2. function is called,this={}
//3. {} is linked to prototype
//4. function automatically return {} i.e the created object

const roshni = new Person('roshni', 2016);
const jack = new Person('jack', 1975);
console.log(roshni);
const jasmin = 'Jasmin';
console.log(roshni instanceof Person);
console.log(jasmin instanceof Person);

Person.hey=function(){
  console.log('Hey there 👋');
  console.log(this);
}
//objects cannot inherit this property 
Person.hey();

//Prototypes
console.log(Person.prototype);
Person.prototype.calAge=function(){
   console.log(2037-this.birthYear);
}
anjali.calAge();
jack.calAge();
console.log(anjali.__proto__===Person.prototype);
console.log(Person.prototype.isPrototypeOf(Person));
console.log(Person.prototype.isPrototypeOf(jack));
console.log(anjali.__proto__===jack.__proto__);
//prototype is not property of Person ,it is property of linked object
Person.prototype.species='Home Sapiens';
console.log(anjali.species);
console.log(roshni.species);
//species is inherited from Peson 
console.log(anjali.hasOwnProperty('firstName'));
console.log(anjali.hasOwnProperty('species'));

console.log(anjali.__proto__);

//Object.prototype (top of prototype chain)
console.log(anjali.__proto__.__proto__);
console.log(anjali.__proto__.__proto__.__proto__);
console.dir(Person.prototype.constructor);
const arr=[1,3,5,2,6];
console.log(arr.__proto__);
*/


//Coding challenge 1
/*const Car=function(make,speed){
  this.make=make;
  this.speed=speed;

}
const bmw=new Car('BMW',120);
const mercedes=new Car('Mercedes',95);
Car.prototype.accelerate=function(){
      this.speed +=10;
      console.log(`${this.make} is going at ${this.speed}`); 
}
Car.prototype.brake=function(){
  this.speed -=5;
  console.log(`${this.make} is going at ${this.speed}`)
}
bmw.accelerate();
bmw.brake();*/
//Class expression
//const PersonCl=class {};

//class declaration
/*class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;

  }
  // Instance Methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  get age(){
    return 2037-this.birthYear;
  }
  //set property that already exist

  set fullName(name){
    console.log(name);
    if(name.includes(' ')) this._fullName=name;
    else alert(`${name} is not a full name`);
  }

  get fullName(){
    return this._fullName;
  }
  //static method
  static hey(){
    console.log('hey there');
  }
}

const jessica = new PersonCl('jessica singh', 2002);
console.log(jessica);
console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.fullName}`);
}
jessica.greet();
console.log(jessica.age);
PersonCl.hey();
*/
//.Classes are not hoistd (it cannot be used before declaration)
//2.Classes are first-class citizes
//3.Classes are executed in strict mode


//getters and setters in object
/*const account={
  owner: 'anjali',
  movements:[200,450,390,120],
  get latest(){
    return this.movements.slice(-1).pop();
  },
  set latest(mov){
    return this.movements.push(mov);
  }
}
console.log(account.latest) //to read 
account.latest=50;
console.log(account.movements);
*/
// Object.create() static method creates a new object,
//using an existing object as the prototype of the newly created object
/*const PersonProto = {
  calAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

};
const steven = Object.create(PersonProto);
console.log(steven.__proto__);
const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calAge();
console.log(sarah);

const Person = function (firstName, birthYear) {

  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calAge = function () {
  console.log(2037 - this.birthYear);
}
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
//linking student with person
Student.prototype=Object.create(Person.prototype);
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}
const misha = new Student('Misha', 2020, 'Computer Science');
misha.introduce();
misha.calAge();

console.log(misha.__proto__);
console.log(misha.__proto__.__proto__);
console.log(misha instanceof Student);
console.log(misha instanceof Person);
console.log(misha instanceof Object);
Student.prototype.constructor=Student;
console.log(misha.hasOwnProperty('firstName'));
console.log(misha.hasOwnProperty('course'));
console.log(misha.hasOwnProperty('calcAge'));
*/
/*class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;

  }
  // Instance Methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  //set property that already exist

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }
  //static method
  static hey() {
    console.log('hey there');
  }
};
//student class to inherit from person class
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science')
martha.calcAge();

//Inheritance between classes : object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);

  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
};
const steven = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear, this.course) = course;
}
const student = Object.create(PersonProto);
const jay = Object.create(StudentProto);


//Encapsulation
//1.Public fields
//2.Private fields
//3.Public methods
//4.Private methods

class Account {
  //Public fields(instances)
  locale=navigator.language;
  // _movements=[];
  //private fields
  #movements=[];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //protected property
    this.#pin = pin;
    // this._movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}`);

  }
  //3. Public methods
  //public interface
  getMovements(){
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  
  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
  //4 Private methods
  #approveLoan(val) {
    return true;
  }

}
const acc1 = new Account('jonas', 'IND', 1111);
acc1.deposit(250);
acc1.withdraw(140);
//acc1.#approveLoan(1000);
acc1.requestLoan(100);
console.log(acc1.getMovements());
console.log(acc1);
console.log(acc1.pin)
// console.log(acc1.#movements);

*/
