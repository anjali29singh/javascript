const flight='LH234';
const anjali={
    name:'Anjali singh',
    passport:23456789234

}
/*const checkIn=function(flightNum,passenger){
    flightNum='LH999';
    passenger.name='Mrs. '+passenger.name;
    if(passenger.passport===23456789234)
        alert('Checked in');
    else
        alert('Wrong passport');
}
checkIn(flight,anjali);
console.log(flight);
console.log(anjali);
//It is changing passport no.
const newPassport=function(person){
    person.passport=Math.trunc(Math.random()*100000000);

}
newPassport(anjali);
checkIn(flight,anjali);
*/
/*************************************************** */

/*const oneWord=function(str){
    return str.replace(/ /,'').toLowerCase();
};
const upperFirstWord=function(str){
    const  [first,...others]=str.split(' ');
    return [first.toUpperCase(),...others].join(' ');

};
const transformer=function(str,fn){
    console.log(`Original string : ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
}
transformer('Javascript is the best! ',upperFirstWord);
transformer('Javascript is the best!',oneWord);

//JS uses callback all the time
const high5=function(){
    console.log('👋');
}
document.body.addEventListener('click',high5);
//Function returning Function
// const greet=function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }
// }
// const greeterHey=greet('Hey');
// greeterHey('Anjali');
// greeterHey('It\'s me');
// greet('Hello')('Anjali');
const greetArr=greeting=>name=>console.log(`${greeting} ${name}`);
greetArr('Hi')('Anjali singh')
*/
const  Indigo= { 
    airline:'Indigo',
    iatacode:'IN',
    bookings:[],
    book (flightNum,name){
    console.log(`${name} booked a set on ${this.airline}
    flight ${this.iatacode}${flightNum}`);
    this.bookings.push({flight:`${this.iatacode} ${flightNum}`,name});
    }//book: function(){}
        
};
Indigo.book(239,'Anjali singh' );
const eurowings={
    airline:'Eurowings',
    iatacode:'EW',
    bookings:[]

};
const book=Indigo.book;
//Does not work 
// book(145,'Radhika singh');
// console.log(book);
//on using call function this keyword will point to first parameter
// book.call(eurowings,145,'Radhika singh');
// console.log(eurowings);
// book.call(Indigo,433,'Merry Maria');
// console.log(Indigo);

//Apply Method
const flightData=[547,'Geroge Cooper'];
//book.apply(eurowings,flightData);
//console.log(eurowings);
book.apply(eurowings,[...flightData]);

//Bind method returns new function where this keyword is always set
const bookEW=book.bind(eurowings);
const bookIN=book.bind(Indigo);
bookEW(23,'Steven Williams');
bookEW(45,'Aluminium');
bookIN(67,'JIN')
const bookEW23=book.bind(eurowings,23);
bookEW23('ANJALI SINGH');
bookEW23('Jonas Schemedtmann');
Indigo.planes=300;
Indigo.buyPlane=function(){
    console.log(this);
    this.planes++;
    console.log(this.planes);
};
//this keyword will point to buy since eventlistener func. is calling IndigoPlane
//document.querySelector('.buy').addEventListener('click',Indigo.buyPlane);
document.querySelector('.buy').addEventListener('click',Indigo.buyPlane.bind(Indigo));
//Partial application
const addTax=(rate,value)=>value+value*rate;
console.log(addTax(0.10,200));
//fix rate
const addVAT=addTax.bind(null,0.23);   //null since no use of this
console.log(addVAT(100));
console.log(addVAT(234));
console.log(addVAT(500));
/******************************************** */
//Immediately invoked function expression(IIFE)
//Error 
// function(){
//     console.log('This will never run again');
// }
//Above error can be solve by (IIFE)
(function(){
    console.log('This will never run again');
    const isPrivate=34;

})();
console.log(isPrivate); //error since out of scope
{
    const isPrivate=35;
    var notPrivate=46; //var ignore scope
}
console.log(isPrivate);
console.log(notPrivate);
/********************************************* */
//Closure
