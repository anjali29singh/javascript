//sets
/*const placesSet=new Set(['Bhopal','Mumbai','Delhi','Bhopal','UP',
'Mumbai']);
console.log(placesSet);
const myName=new Set('anjali');
console.log(myName);
console.log(`My name consist of ${myName.size} letter`);
//to check is present or not
console.log(placesSet.has('India'));
placesSet.add('chennai');
placesSet.add('mp');
placesSet.delete('Delhi');
console.log(placesSet);
//placesSet.clear()
for (const city of placesSet)
    console.log(city);
const staff=['waiter','chef','waiter','manager','chef','waiter'];
const uniqueStaff=[...new Set(staff)];
console.log(uniqueStaff);
console.log(placesSet.entries())*/;
/*************************************************** */
//Maps
/*const rest=new Map();
rest.set('name','classico italiano');
rest.set(1,'Firenze,Italy');
console.log(rest.set(2,'Lisbon,Portugal'));
rest.set('categories',['Italian','Indian','Pizzerian','Vegetarian']).set
('open',11).set('close',23).set(true,'we are open :D').set(false,'we are close :(');
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.size);
*/
//rest.delete(1);
//rest.clear();
//rest.has('categories');
//rest.has('menu');
//rest.values();
//rest.keys();

/**************************************** */
//Strings
const quote='Dream it,Do it';
/*console.log(quote.length);
console.log(quote[2]);
console.log(quote.indexOf('r'));
console.log(quote.indexOf('n'));
console.log(quote.lastIndexOf('t'));
//console.log(quote[-1]); //undefined
console.log(quote.slice(4));
console.log('anjali'[2]);
console.log(quote.slice(3,7));
console.log(quote.indexOf('do'));
console.log(quote.slice(0,quote.indexOf(' ')));
 console.log(quote.slice(quote.lastIndexOf(' ')+1));
const string =quote.slice(-4);
const str=quote.slice(2,-4);
console.log(str);

console.log(quote.toLowerCase());
console.log(quote.toUpperCase());
//Fix capitalization in name
const passenger='jonAS'
const passLower=passenger.toLowerCase();
const passCorrect=passLower[0].toUpperCase()+passLower.slice(1);
console.log(passCorrect);

//check email both lower and upper case should be consider same
const email='anjalidev2.@gmail.com';
const loginEmail='  AnjaliDev2.@Gmail.com \n'; 
const lowerEmail=loginEmail.toLowerCase(); //return new string in lowecase

const trimmedEmail=lowerEmail.trim();
console.log(trimmedEmail);

const date='31/12/2022';
//const newFormatDate=date.replace('/','-').replace('/','-');
//console.log(newFormatDate);
const newDateFormate=date.replaceAll('/','-');
console.log(newDateFormate);

//Booleans 
const plane='Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));
console.log(plane.endsWith('neo'));
*/
const terms='a3+b3+a2b+ab2'.split('+');
console.log(terms);
const [firstName,lastName]='Anjali Singh'.split(' ');
const newName=['Mrs.',firstName,lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName=function(fullname){
    const names=fullname.split(' ');
    const namesUpper=[];
    for(const l of names){
        namesUpper.push(l.replace(l[0],l[0].toUpperCase()))
    }
    console.log(namesUpper.join(' '));
}
capitalizeName('My name is anjali singh');
//Padding 
const code='12345';
console.log(code.padStart(15,'0')); //length of entire after padding will be 15

console.log(code.padEnd(5,'1')); //nothing will add since length of string is
//already 5
console.log(code.padEnd(10,'1'));
const makeCreditCard=function(number){
    const str=number+'';
    const last=str.slice(-4);
    return last.padStart(str.length,'*');


}
console.log(makeCreditCard(12345678910));
console.log(makeCreditCard('111144422298'));
console.log(makeCreditCard('456382'));

const planesInLine=function(n){
    console.log(`There are ${n} planes in line ${'🛫'.repeat(n)}`);
}
planesInLine(3);
planesInLine(5);
planesInLine(6);