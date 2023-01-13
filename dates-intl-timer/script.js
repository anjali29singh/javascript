/*console.log(23===23.0);
console.log(23.5+78.9);
//Conversion
console.log(Number('89'));
console.log(typeof +'45')
console.log(Number(123.45));
console.log(Number('12en'))*/
//Parsing
/*console.log(Number.parseInt('50px',10));//parseInt return  integer of specified radix of string
console.log(Number.parseInt('e23',2));
console.log(Number.parseFloat('23.56xs'));
console.log(Number.parseFloat('12,34,78'));
console.log(parseFloat('123ps'));*/

//isNaN returns true if a value is Not-a-Number
/*console.log(Number.isNaN(24));
console.log(Number.isNaN('ecg'));
console.log(Number.isNaN(20/0));
console.log(Number.isNaN(+'23x'));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(undefined));
*/
//checking if value is finte 
/*
console.log(Number.isFinite(29));
console.log(Number.isFinite('30'));
console.log(Number.isFinite(+'20x'));
console.log(Number.isFinite(23/0));
*/
//Maths Rounding
/*console.log(Math.abs(-34));
console.log(Math.sqrt(25));
console.log(Math.acos(-1));
console.log(25**(1/2));
console.log(27**(1/3));
const arr=[3,4,8,9,1,88,34];
console.log(Math.max(arr));
console.log(Math.max(4,3,5,1));
console.log(Math.min(33,8,-1.34,100));*/
//console.log(Math.LN2);
/*console.log(Math.trunc(23.6777));
console.log(Math.trunc(Math.random()*6));
//Roundig integers
console.log('rounding positive numbers')
console.log(Math.round(45.7));
console.log(Math.round(45.3));
console.log(Math.round(45.5));
console.log('rounding negative numbers')
console.log(Math.round(-45.7));
console.log(Math.round(-45.3));
console.log(Math.round(-45.5));


//ceil is used for round up
console.log(Math.ceil(34.8));
console.log(Math.ceil(87.3));
console.log(Math.ceil(-81.4));
//floor is used for round down        
console.log(Math.floor(23.8));
console.log(Math.floor('23.6'));
console.log(Math.trunc(-11.6));
//Rounding decimals
console.log(2.97.toFixed(4));  //toFixed return string
//numeric separators-use _ for readability
const amount=123_079_000_000;
console.log(amount);
console.log(Number('234567'));
console.log(Number('234_562_112'));
*/
//BigInt
/*console.log(2**63);
console.log(Number.MAX_SAFE_INTEGER);
console.log(BigInt(24808308083));
//Operations
console.log(10000n+2000n);
//console.log(12345n*1222222); //error
console.log(20n>15);
console.log(20n===20);
console.log(120n===120n);*/
/*const now=new Date();
console.log(now);
console.log(new Date('15 July 2021'));
console.log(new Date(2023,2,29)); //0 base in js 
const future=new Date (2037,10,19,15,23);
console.log(future);
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getMonth());
console.log(future.getFullYear());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(new Date(214225690009));
console.log(Date.now());
future.setFullYear(2040);
console.log(future);
*/
//internationalizing dates(Intl)
const date=new Intl.DateTimeFormat('ar-SY').format(new Date());
console.log(date);
// const local=navigator.language;
// console.log(local);
// const arr=['a','z','p','c','b','l','m'];
// const sorted_arr=arr.sort(new Intl.Collator().compare);
// console.log(sorted_arr);

const countryName=new Intl.DisplayNames(['hi'],{type:'region'});
console.log(countryName.of('UK'));
//displaying date according to your country 
const locale=navigator.language
const options={
    hour:'numeric',
    minute:'numeric',
    day:'numeric',
    month:'long', //like Nov to November
    year:'numeric',
    weekday:'long'

}
const todayDate=new Intl.DateTimeFormat(locale,options).format(new Date());
console.log(todayDate);
const num=123456809.345621;
console.log('US:',new Intl.NumberFormat('en-US').format(num));
console.log('IN:',new Intl.NumberFormat('en-IN').format(num));
console.log('IN:',new Intl.NumberFormat('ar-SY').format(num));
//setTimeOut
const ingredients=['olives','spinach'];
const pizzaTimer=setTimeout((ing1,ing2)=> console.log(`here is your pizza🍕 with ${ing1} and ${ing2}`),3000,
...ingredients);
console.log('wating...');
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);
//setInterval
setInterval(function(){
    console.log(`It's my birthday🎂`)
},1000);