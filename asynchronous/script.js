const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const imgContainer = document.querySelector('.images');

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.style.opacity = 1;
}
const renderCountry = function (data, className = '') {
    const html = `<article class="country ${className}">
            <img class="country__img" src="${data.flags.svg}" />
            <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>
            ${(+data.population / 1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>
            ${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>
            ${data.currencies[0].name}</p>
          </div>
        </article>`
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;

};
/*
/*const getCountryAndNeighbour = function (country) {

    //XML http request
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send(); //send request


    request.addEventListener('load', function () {
        let data = JSON.parse(this.responseText);
        // console.log(data);
        data.forEach(cont => {
            if (cont.name === country) return data = cont;

        });
        renderCountry(data);


        const neighbour = data.borders ? data.borders[0] : null;
        if (!neighbour) return;
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
        request2.send();
        request2.addEventListener('load', function () {
            const data2 = JSON.parse(this.responseText);
            renderCountry(data2, 'neighbour');
        })
    })
}
getCountryAndNeighbour('India');
*/
/*setTimeout(function () {
    console.log("callback after 1 second");
    setTimeout(function () {
        console.log("callback after 2 second");
        setTimeout(function () {
            console.log("callback after 3 seconds");
        }, 1000);
    }, 1000);
}, 1000);
*/

const getJSON=function(url,errorMsg='Something went wrong '){
    return fetch(url).then(response =>{
        if(!response.ok) throw new Error (`${errorMsg} (${response.status})`);

        return response.json();
        

    })
   
};
const getCountryData = function (country) {
    //Country 1
    getJSON(`https://restcountries.com/v2/name/${country}`,'Country not found')
        .then(data => {
            renderCountry(data[0]);
            const neighbour = data[0].borders[0];
            if (!neighbour) return;

            return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`,'Country not found');
        })
        .then(response => renderCountry(response, 'neighbour'))
        .catch(err => {
            renderError(`Something went wrong ⛔⛔ ${err.message}`);


        })
        .finally(() => {
            countriesContainer.style.opacity = 1;


        });
};

btn.addEventListener('click', function () {

    getCountryData('dsa');
})


//Coding challenge 1
/*const getjson = function (url) {
    return fetch(url).then(data => {
        console.log(data);
        if (!data.ok)   throw new Error(`Problem with geocoding ${data.status}`)
        return data.json();
    }
    )
}
const whereAmI = function (lat, lng) {
    getjson(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=155904448222679391077x21932`)
    .then(data=>{
        console.log(`You are in ${data.city},${data.country}`)
        getCountryData(data.country);
        

    }
    
    )
    .catch(err=>{
        console.log(`OOPS something went wrong! ⨺ ${err}`)
    })
    // .finally((){

    // })
}
btn.addEventListener('click',function(){

    whereAmI(52.508,13.381);
})

*/
//Event loop
//code without callbacks is executed first
//microcallback queue has higher priority of execution then callback queue
// console.log('Test start');
// setTimeout(()=>console.log('0 sec timer'),0);
// Promise.resolve('Resolved promised').then(res=>{
//     console.log(res);
// });
// Promise.resolve("Resolved promise 2").then(res=>{
//     for (let i=0;i<1000;i++){
//         console.log(res);
//     }
// });
// console.log('Test End')

//Create Promise
/*const lotteryPromise=new Promise(function(resolve,reject){
    console.log('Lotter draw is happening');
    setTimeout(() => {
        
        if (Math.random()>=0.5){
            resolve('You Win 💰');
        }
        else{
            reject(new Error('You lost your money 💩'));

        }
    }, 2000);
});
lotteryPromise.then(res=>console.log(res)).catch(err=> console.error(err));

const wait = function (second) {
    return new Promise(function (resolve) {
        setTimeout(resolve, second * 1000);
    })
}

wait(1).then(()=>{
    console.log('I waited for 1 seconds');
    return wait(1);
}).then(()=>{
    console.log('I waited for 2 seconds');
    return wait(2);
}).then(()=>{
    console.log('I waited for 3 seconds')
})
*/

//Promisifying the Geolocation

const getPosition = function () {
    return new Promise(function (resolve, reject) {

        // navigator.geolocation.getCurrentPosition(position => {
        //     resolve(position)
        // }, err => {
        //     reject(err);
        // });
        navigator.geolocation.getCurrentPosition(resolve, reject);
    }
    )

}
// getPosition().then(pos=>console.log(pos));



//Coding challenge 2
/*
const wait = function (second) {
    return new Promise(function (resolve) {
        setTimeout(resolve, second * 1000);
    })
}

const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;
        img.addEventListener('load', function () {

            resolve(img);
        })
        img.addEventListener('error', function () {
            reject(new Error('Image not found ⛔'));
        })
    }
    )

}
let currImg;
createImage(`img/img-1.jpg`).then(img => {
    if (!img.ok) new Error('Failed to load image ')
    imgContainer.appendChild(img);
    currImg = img;
    return wait(2);
    })
    .then(() => {
        currImg.style.display = 'none';

        return createImage('img/img-2.jpg');

    })
    .then(img => {
        if (!img.ok) new Error('Failed to load image ')
        imgContainer.appendChild(img);
        currImg = img;
        return wait(2);
    })
    .then(() => {
        currImg.style.display = 'none';
    })
    .catch(err => {
        console.error(err);
    })
 */
//await : wait for a promise and get its fulfillment value and is used ony inside asyn function


/*const whereAmI = async function () {

    //geolocation
    const pos = await getPosition();

    const { latitude: lat, longitude: lng } = pos.coords;

    //Reverse geocoding 
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=155904448222679391077x21932`);
    const dataGeo = await resGeo.json();


    //Country data 
    const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.country}`);
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);

}
whereAmI();*/

//Error handling with asyn await
// try{
//     let x=1;
//     const y=2;
//     y=4;

// } catch(err){
//     alert(err.message);

// }
/*const whereAmI = async function () {
    try {

        //geolocation
        const pos = await getPosition();

        const { latitude: lat, longitude: lng } = pos.coords;

        //Reverse geocoding 
        const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=155904448222679391077x21932`);
        if (!resGeo.ok) throw new Error('Problems getting location data');

        const dataGeo = await resGeo.json();

        //Country data 
        const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.country}`);
        if (!res.ok) throw new error('Problem getting country');

        const data = await res.json();
        // console.log(data);
        renderCountry(data[0]);
    } catch (err) {
        console.error(err);
        renderError(err.message);



    }

};
whereAmI();
// whereAmI();
// whereAmI();
*/
/*const getJSON = function (url, errorMsg = 'Something went wrong ') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

        return response.json();


    })

};
*/
/*const get3Countries = async function (c1, c2, c3) {
    try {//Promises in sequence 
        // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);

        // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);

        // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

        // console.log([data1.capital,data2.capital,data3.capital]);

        //Promises running in parallel

        const data = await Promise.all([getJSON(`https://restcountries.com/v2/name/${c1}`), getJSON(`https://restcountries.com/v2/name/${c2}`), getJSON(`https://restcountries.com/v2/name/${c3}`)])
        console.log(data.map(d=>d[0]));
        console.log(data)
    } catch (err) {
        console.log(err);
    }

}
get3Countries('Australia', 'usa', 'russia');
*/
//Promise.all
// Promise.all([
//     Promise.resolve('success'),
//     Promise.reject('Error'),
//     Promise.resolve('Another Success')
// ]).then(res=>console.log(res)).catch(err=>console.error(err));
//Promise.any 

Promise.any([
    Promise.resolve('success'),
    Promise.reject('Error'),
    Promise.resolve('Another Success')
]).then(res=>console.log(res)).catch(err=>console.error(err));
//Promise.allSettled
Promise.allSettled([
    Promise.resolve('success')
])

