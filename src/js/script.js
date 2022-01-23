@@include('webpTest.js');
@@include("hover-effect.umd.js");
@@include("gsap.min.js");

// new hoverEffect({
//     parent: document.querySelector(".distortion"),
//     intensity: 0.2,
//     image1: "../img/01.png",
//     image2: "../img/02.png",
//     displacementImage: "../img/diss.png",
//     imagesRatio: 580 / 500
// })

let tl = gsap.timeline({paused: true});
    tl.fromTo(".first", 1, {top: "-100vh"}, {duration: .7, opacity:1, top:0 });
    // tl.fromTo(".second", 5, {top: "50",scale: 0}, {duration: .7, rotation: 360, top:0, scale: 1 });
    // tl.fromTo(".third", 3, {top: "50", scale: 0}, {duration: .7, opacity: 1, top: 0, scale: 1 });
    // tl.fromTo(".fourth", 2, {bottom: "-100vh", right: "-100vw"}, {duration: .7, opacity:1, bottom: 0, right: 0 });

// const btn = document.querySelector(".btn")

// btn.addEventListener("click",()=>{
//     tl.reverse()
// })

let activeScreen = 0

const navItems = document.querySelectorAll('.nav__item')

navItems[0].addEventListener('click',(e)=>{
    e.preventDefault()
    if(activeScreen !== 1){
        // let tl = gsap.timeline({delay:0});
        gsap.fromTo(".intro", 1, {left: "0"}, {duration: .7, opacity:0, left:"-100vw" });
        gsap.fromTo(".first", 1, {right: "-100vw",top:0}, {duration: .7, opacity:1, right:0 });

        // tl.play()

        activeScreen = 1
    }
    
})



// const secondBtn = document.querySelector(".second_btn")

// secondBtn.addEventListener("click",()=>{
//     tl.play()
// })

// console.log(gsap)

// let lastPos = 0

// window.addEventListener('scroll',()=>{

// })