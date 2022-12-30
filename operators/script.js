'use strict';
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


// Data needed for first part of the section
const restaurant = {
  names: 'anjali restaurant',
  location: '10 No. market ,near art gallery,bhopal ',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (mainIndex, starterIndex) {
    return [this.mainMenu[mainIndex], this.starterMenu[starterIndex]]
  },
  openingHours: {
    mon: {
      open: 10,
      close: 12
    },
    wed: {
      open: 12,
      close: 12

    },
    fri: {
      open: 8,
      close: 12
    }

  },
  orderDelivery: function ({ starterIndex = 0, mainIndex = 1, address, time = '20:00' }) {
    console.log(`order recieved! ${this.starterMenu[starterIndex]}
    and ${this.mainMenu[mainIndex]} will be delivered to ${address}
    at ${time} `)
  },
  suggestions: function ([dish1, dish2, dish3]) {
    console.log(`your suggested food ${dish1}, ${dish2},${dish3}
    will be added soon`)
  }
}

/****************************************************************** */
//destructing 
/*const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const [x, y, z] = arr;
console.log(x, y, z);
let [main, , secondary] = restaurant.categories; //skips one
console.log(main, secondary);
//swap
[secondary, main] = [main, secondary];
console.log(main, secondary);
const [starter, mainCourse] = restaurant.order(1, 3);
console.log(starter, mainCourse);

//nested array
const nested = [2, 3, [5, 6]];
//const [A, B, [C, D]] = nested;
const letters = ['a', 'b', 'c', 'd'];
const [A, B, [C, D]] = letters;
console.log(A, B, C, D);
*/
/*********************************************************** */
//destructing objects
/*const { names, categories, openingHours } = restaurant;
console.log(names, categories, openingHours);

//key names can be change through destructing
const { names: restName, categories: variety } = restaurant;
console.log(restName, variety);

//default value can be set
const { menu = [], starterMenu = [] } = restaurant;
console.log(menu, starterMenu);*/
/*************************************************** */
// Mutating variables
/*let a = 11;
let b = 12;
const obj = { a: 23, b: 7, c: 14 };
//{a,b}=obj; //error
//to solve this
({ a, b } = obj);
console.log(a, b);

restaurant.orderDelivery({
  time: '10:30',
  address: 'arera colony ,Bhopal',
  mainIndex: 2,
  starterIndex: 2
});
restaurant.orderDelivery({
  address: 'Arera colony,Bhopal',
  mainIndex: 1

})*/
/************************************************/
//Spread operator
/*const arr = ['a', 'b', 'c', 'd'];
const badNewArr = ['1', '2', arr[0], arr[1], arr[2], arr[3]];
console.log(badNewArr);
const goodArr = ['4', '5', ...arr];
console.log(goodArr);
console.log(...goodArr);
const newMenu = [...restaurant.mainMenu, 'manchurian', 'momos'];
console.log(newMenu);
//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//iterables :arrays ,strings,maps,sets,not objects
const myName = 'anjalisingh';
const letters = [...myName];
console.log(letters);
console.log(...myName);
const suggest = [prompt('suggest some (max 3) dishes to add in menu dish1!'), prompt('dish 2'), prompt('dish 3')];
restaurant.suggestions([...suggest]);*/

/******************************************************/
//Rest parameter 
// const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 9];
// console.log(a, b, others);
// //rest in objects
// const { mon, ...weekDays } = restaurant.openingHours;
// console.log(weekDays);
// //functions 
// const add = function (...numbers) {
//   console.log(numbers);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 3, 2, 7, 9, 1);

//short circuiting
/*console.log('pasta' || 'chinese');
console.log(1 || 'burger');
console.log('burger' || 2);
console.log('' || 'anjali');
console.log(0 || 'anjali');
console.log(undefined || null); //both are falsy value
console.log(0 && 1);
console.log(5 && 9);
console.log('hello' && 23 && null && 'anjali');
*/
//Nullish coalescing operator ??
//nullish: null and undefined
const customers = 0;
console.log(customers || 10);
//to solve about problem i.e to get 0 
console.log(customers ?? 10);



