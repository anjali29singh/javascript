// LECTURES
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.slice(2));
console.log(arr);
console.log(arr.slice(3, 6));
console.log(arr.slice(-1));
console.log(arr.slice(-4, -1));
console.log([...arr]);
//SPLICE -mutate original array 
// arr.splice(6);
//arr.splice(5);
//console.log(arr);
// //arr.splice(1,4);
// console.log(arr);
// arr.reverse();
// console.log(arr);
//arr.splice(5,2);
arr.splice(5,3,11,19,16);  //delete 3 items from arr and insert 11 19 16
console.log(arr);
//CONCAT
const nameLetters = ['a', 'n', 'j', 'a', 'l', 'i'];
const surnameLetters = ['s', 'i', 'n', 'g', 'h'];
const fullName = nameLetters.concat(surnameLetters);
console.log(...fullName);
console.log([...nameLetters, ...surnameLetters]);
//JOIN
console.log(fullName.join(''));
//looping arrays
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const [i,movement] of movements.entries()){
//   if(movement>0)
//     console.log(`Movement ${i+1}: ${movement}`);
//   else
//     console.log(`Movement ${i+1}: ${Math.abs(movement)}`);
// }
console.log('/******************************************/')
// movements.forEach(function (mov,index,array) { //order of arguments if imp
//     if (mov > 0)
//       console.log(`Movement ${index+1}:${mov}`);
//     else
//       console.log(`Movement ${index+1}:${Math.abs(mov)}`);

// });

//MAPS
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
currencies.forEach(function(value,key,map){
  console.log(`${key}: ${value}`);
});
//Set
const currenciesUnique=new Set(['USD','GBP','USD','EUR','EUR']);
currenciesUnique.forEach(function(value,_,map){
  console.log(`${_}: ${value}`);

})
//Map  method is used to loop over arrays
const array1=[1,4,5,16];
const map1=array1.map(x=> x*2);
console.log(map1); //return new array

//filter method
const deposits=movements.filter(function(mov){
  return mov>0;
})
console.log(deposits);
const withdrawals=movements.filter(function(mov){
  return mov<0;
});
console.log(withdrawals);
//reduce method
const balance=movements.reduce(function(acc,cur,i,arr){
    return acc+cur;
},100)  
console.log(balance);
const owners=['jonas','anjali','singh','manish','divya'];
console.log(owners.sort()); 
console.log(owners);
const letters=['C','a','U','z','L'];  //capital letters come first 
console.log(letters.sort());

console.log([1,2,4,5,6,43,4]);
console.log(new Array (1,2,3,4,5,6));
const x=new Array(7);
console.log(x); //empty array and no method is applicable on empty array except fill 
console.log(x.fill(3));
console.log(x);
x.fill(2,4);
console.log(x);
x.fill(1,4,6);
console.log(x);
//Array.from
const y=Array.from({length:8},()=>1);
console.log(y);

const z=Array.from({length:5 },(_,i) => i+1); //_ is undefined
console.log(z);