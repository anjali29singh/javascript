
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab')
const tabContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);


document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Implementing smooth scrolling

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log('Current scroll (x/y)', window.pageXOffset, window.pageYOffset);
  //Scrolling
  // window.scrollTo(s1coords.left+window.pageXOffset,
  //   s1coords.top+window.pageYOffset);
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth'
  });

});
//Event Delegation
//1.Add event listener to common parent elements
//2.Determine what element is originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
  }

});

//Tabbed component
tabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;

  //remove active classes

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  //activate tab

  clicked.classList.add('operations__tab--active');

  //active content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).
    classList.add('operations__content--active');

})

//Menu fade animation

const HandleHover = function (e) {

  if (e.target.classList.contains('nav__link')) {

    const links = e.target.closest('.nav').querySelectorAll('.nav__link');
    const logo = e.target.closest('.nav').querySelector('img');

    links.forEach(el => {
      if (el !== e.target) el.style.opacity = this; //opacity
    });

    logo.style.opacity = this; //opacity;
  }

}

// nav.addEventListener('mouseover',function(e){
//   HandleHover(e,0.5);
// });


// nav.addEventListener('mouseout',function(e){
//   HandleHover(e,1);
// });

nav.addEventListener('mouseover', HandleHover.bind(0.5));
nav.addEventListener('mouseout', HandleHover.bind(1));

//Sticky navigation
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}
const headerObserver = new IntersectionObserver(
  stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
}
);
headerObserver.observe(header);

//Reveal section
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);


};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15

});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
})


//Lazy loading image

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return

  //Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {

  root: null,
  threshold: 0,
  rootMargin: '200px'
});
imgTargets.forEach(img => imgObserver.observe(img));

//Sliding component
const slides = document.querySelectorAll('.slide');

const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const slider = document.querySelector('.slider');
let currSlide = 0;
const maxSlide = slides.length;
// // slider.style.transform='scale(0.4) translateX(-800px)';
// // slider.style.overflow='visible';
// slides.forEach((s,i)=> (s.style.transform=`translateX(${100*i}%)`));

//Dots 
const dotContainer = document.querySelector('.dots');
const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML('beforeend',`<button class="dots__dot" data-slide="${i}"></button>`);
  });
};
createDots();

//Active dot
const activateDot=function(slide){
  document.querySelectorAll('.dots__dot').
  forEach(dot => dot.classList.remove('dots__dot--active'));

  document.querySelector(`.dots__dot[data-slide="${slide}"]`)
  .classList.add('dots__dot--active');
};

activateDot(0);
const goToSlide = function (slide) {

  slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));


}
goToSlide(0);
//Next slide 
const nextSlide = function () {
  if (currSlide === maxSlide - 1) {
    currSlide = 0;
  }
  else currSlide++;
  goToSlide(currSlide);
  activateDot(currSlide);

}
const prevSlide = function () {
  if (currSlide === 0) currSlide = maxSlide - 1;
  else {
    currSlide--
  }
  goToSlide(currSlide);
  activateDot(currSlide);
}


btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function (e) {

  if (e.key === 'ArrowLeft') prevSlide();
  else if (e.key === 'ArrowRight') nextSlide();
});

dotContainer.addEventListener('click',function(e){
  if(e.target.classList.contains('dots__dot')){
    const slide=e.target.dataset.slide;
    goToSlide(slide);
    activateDot(slide);
  }
});

//lectures
/*console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
const header = document.querySelector('.header');
const allButtons = document.getElementsByTagName('button');
//console.log(allButtons);
const span = document.getElementsByTagName('span');
//console.log(span);
console.log(document.getElementsByClassName('btn'));
//Creating and adding elements
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML ='We use cookied for \
improved functionality and analytics<button class="btn btn--close-cookie"> Got It! </button>'
//message will be displayed only at one place
//header.prepend(message);
//header.prepend(message); //do not insert multiple times
//header.append(message);
//To insert element at multiple places 
//header.append(message.cloneNode(true));
header.before(message);
//header.after(message);

//Delete elements
document.querySelector('.btn--close-cookie').addEventListener
('click',function(){
  //message.remove();
  message.parentElement.removeChild(message);
});
//Style
message.style.backgroundColor='#37383d';
//console.log(getComputedStyle(message).color);
//console.log(document.documentElement.style.
//setProperty('--color-primary','orangered'));

//attributes
const logo=document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.class);
console.log(logo.className);
logo.setAttribute('designer','anjali');
console.log(logo.getAttribute('designer'));

//Data attributes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
console.log(logo.classList.contains('c'));*/


//Events
const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter',function(e){
//   alert('Great you are reading the Heading 😀');

// });
/*const alertH1 = function (e) {
  alert('addEventListener: Great! you are reading the heading 😀');
}
h1.addEventListener('mouseenter', alertH1);
//another way
// h1.onmouseenter=function(e){
//   alert('On mouseenter: You are reading the heading');
// }

//to remove eventlistener
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);*/


/*//Event propagation 
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);//to generate between min to max
const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

//this keyword points to the element to which event is attached
//this==e.currentTarget 
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  
  console.log(e.target,e.currentTarget);
  //Stop propagation
  e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log(e.target,e.currentTarget);
})
document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log(e.target,e.currentTarget);
})*/


//without event delegation
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

/************************************************************ */
//DOM traversing
/*console.log(h1.querySelectorAll('.hightlight'));
console.log(h1.childNodes);
console.log(h1.children);
console.log(h1.firstElementChild);
console.log(h1.parentElement);
console.log(h1.parentNode);
h1.closest('.header').style.background='var(--gradient-secondary)';

//Goint sideways :siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
console.log(h1.previousSibling);
console.log(h1.nextSibling);
*/


//sticky  navigation

/*const obsCallback=function(entries,observer){
  entries.forEach(entry=>{
    console.log(entry);

  });
};

const obsOptions={
  root:null, //section1
  threshold:[0,0.2] //percentage of intersection 
};
const observer=new IntersectionObserver(obsCallback,obsOptions);
observer.observe(section1);
//const header=document.querySelector('.header');
// const headerObserver=new IntersectionObserver(stickyNav,{
//   root:null,
//   threshold:0
// });
*/
