const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const Logo = document.querySelector('.Logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');


const tl = new TimelineMax();

tl.fromTo(hero,1,{height: "10%"}, {height: "85%", ease: Power2.easeInOut})
.fromTo(hero,1.2,{width: "100%"},{width:"90%",  ease: Power2.easeInOut})
.fromTo(slider,1.2,{x : "-100%"},{x: "0%",  ease: Power2.easeInOut} , "-=1.2")
.fromTo(Logo,0.5, {opacity:0, x: 30},{opacity:1, x: 0}, "-=1.5")
.fromTo(hamburger,0.5, {opacity:0, x: 30},{opacity:1, x: 0}, "-=1")
.fromTo(headline,0.5, {opacity:0, x: 30},{opacity:1, x: 0}, "-=0.5")