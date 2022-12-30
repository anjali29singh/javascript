//looping arrays

const junkFood = ['burger', 'pizza', 'passta', 'chinese', 'momos'];
for (const item of junkFood)
    console.log(item);
for (let food of junkFood.entries())
    console.log(food);
for (let item of junkFood.entries())
    console.log(item[1]);
console.log([...junkFood.entries()]);
for (let [i, f] of junkFood.entries())
    console.log(`${i + 1}: ${f}`);
//optional chaining ?

const openingHours = {
    mon: {
        open: '9:00',
        close: '5:00'
    },
    tue: {
        open: '10:00',
        close: '3:00'
    },
    wed: {
        open: '9:00',
        close: '12:00'
    },
    thur: {
        open: '11:00',
        close: '5:00'
    }

}
/*const day=prompt('find college time on day(mon,tue,wed,thur,fri,sat,sun)');
console.log(openingHours[day] ? `college open at ${openingHours[day].open} and closes 
at ${openingHours[day].close} on ${day}`:`college remain off on ${day}`);
//notice that college.day will give error since day is not property of college*/
/*************************************************** */
//looping of objects
for (const day of Object.keys(openingHours))
    console.log(day); 

//property values
for (const val of Object.values(openingHours))
    console.log(val);
console.log(Object.values(openingHours));
const entries=Object.entries(openingHours);
for (const [key,{open,close}] of entries)
    console.log(`on ${key} college opens at ${open} and close at ${close}`);
