@@include('webpTest.js');
@@include("hover-effect.umd.js");
@@include("gsap.min.js");

AOS.init()

// State ----------------------------
let activeScreen = 0

// timeline
const timeline = ()=> gsap.timeline({paused: true})

// dom elements ---------------------------------------------------------
const navigation = document.querySelector('.navigation')
const navItems = document.querySelectorAll('.nav__item')
const navLogo = document.querySelector(".nav_logo")

// animations --------------------------------------------------------------------------


const aboutAnim = ()=> timeline().fromTo(".about_complex", 1.5, {right: "-100vw",top:0,left:"initial",background:"white"}, {duration: 10, right:0,display: 'block'  }).play();

const placesAnim_1 = ()=> timeline().fromTo("#places-slider", 1, 
{transform: 'scale(0.4)' + ' translate(65%,35%)'}, 
{duration: 1, transform: "scale(1)",transform:'scale(1)' + 'translate(0px,0px)'}).play();

const placesAnim_2 = ()=> timeline().fromTo("#places-info", 1.5, 
{transform: 'translateY(25%)'}, 
{duration: 1, transform: 'translateY(0px)'}).play();



const roomsAnim = () => timeline().fromTo(".rooms", 1.5, {right: "-100vw", left:'initial'}, {duration: 10, right:"0vw",display:'block' }).play();

const restaurantAnim = ()=> timeline().fromTo(".restaurant", 1.5, {right: "-100vw", left:'initial'}, {duration: 10, right:"0",display:'block' }).play();

const avocationsAnim = ()=> timeline().fromTo(".avocations", 1.5, {right: "-100vw", left:'initial'}, {duration: 10, right:"0",display:'flex' }).play();

const mapAnim = ()=> timeline().fromTo(".map", 1.5, {right: "-100vw", left:'initial'}, {duration: 10, right:"0",display:'flex' }).play();

const restaurantContentAnim = ()=>timeline().fromTo("#restaurant_content", 1.7, {transform: "translate(45%,0%)"}, {duration: 10,transform: "translate(0%,0%)" }).play();

//------------------
const cleanNavs = ()=> navItems.forEach((item)=>{
  item.classList.remove("nav__item-active")
})

gsap.registerPlugin(ScrollTrigger)

// swipe----------------------------

const swipeIntro = ()=>{
  const introAnim_1 = timeline().fromTo(".intro", 1.5, {left: "0",right:"0"}, {duration: 10, left:"-100vw",display:'none' });
  // const introAnim_2 = timeline().fromTo("#intro_text", 1.5, {marginLeft: 0}, {marginLeft: "0%"});
  const introAnim_3 = timeline().fromTo("#intro_img", 1, {marginLeft: 0}, {marginLeft: "-100%"});
  const introAnim_4 = timeline().fromTo("#intro_dots", 1.5, {right: 0}, {right: "-280px",top: "100%", position: "absolute", opacity: 0});

  introAnim_1.play()
  introAnim_3.play()
  introAnim_4.play()
}

const swipeAbout = (bg='auto')=> timeline().fromTo(".about_complex", 2, {right: "0vw",left:"0vw"}, {duration: 10, right:"initial",left:"-100vw",background:bg}).play();

// close ---------------------------

const closeRooms = () => {
  timeline().to(".rooms", 1.5, {duration: 10,right:"-100vw",left:"initial",display:'none' }).play();
}

const closeRestaurant = ()=>{
  timeline().to(".restaurant", 1.5, {duration: 10,right:"-100vw",left:"initial",display:'none' }).play();
}

const closeAvocations = ()=>{
  timeline().to(".avocations", 1.5, {duration: 10,right:"-100vw",left:"initial",display:'none' }).play();
}

const closeMap = ()=>{
  timeline().to(".map", 1.5, {duration: 10,right:"-100vw",left:"initial",display:'none' }).play();
}

const closeBlock = (block)=>{
  timeline().to(block, 1.5, {duration: 10,right:"-100vw",left:"initial",display:'none' }).play();
}

// reverce -------
const reverceAbout = () => timeline().fromTo(".about_complex", 1.5, {left: "-100vw",top:0}, {duration: 10, left:0, background:'white',display:'block'  }).play();
const reverceRooms = () => timeline().fromTo(".rooms", 1.5, {left: "-100vw",top:0}, {duration: 10, left:0, background:'white',display:'block'  }).play();
const reverceAvocations = () => timeline().fromTo(".avocations", 1.5, {left: "-100vw",top:0}, {duration: 10, left: 0, background:'white',display:'flex'}).play();

const reverceBlock = (block) => {
  timeline().fromTo(block, 1.5, {left: "-100vw",top:0}, {duration: 10, left: 0, background:'white',display:'block'}).play();
}

// Menu items onclick animations --------------------------------------------------------------------

navLogo.addEventListener('click',(e)=>{
  if(activeScreen !== 0){
    cleanNavs()
    navigation.classList.remove('navigation-white')

    if(activeScreen == 1){ 
      closeBlock(".about_complex")
      reverceBlock('.intro')
    }
    if(activeScreen == 2){ 
      closeBlock(".rooms")
      reverceBlock('.intro')
    }
    if(activeScreen == 3){ 
      closeBlock(".restaurant")
      reverceBlock('.intro')
    }
    if(activeScreen == 4){
      closeBlock(".avocations")
      reverceBlock('.intro')
    }
    if(activeScreen == 5){
      closeBlock(".map")
      reverceBlock('.intro')
    }

    gsap.to("#intro_img", 1, {marginLeft: 0});
    gsap.to("#intro_dots", 1.5, {right: 0, top: 0, opacity: 1});

    activeScreen = 0
  }
})

navItems[0].addEventListener('click',(e)=>{
    e.preventDefault()
    if(activeScreen !== 1){
        cleanNavs()
        e.currentTarget.classList.add("nav__item-active")

        if(activeScreen == 0){
          swipeIntro()
        }

        aboutAnim()
        placesAnim_1()
        placesAnim_2()

        navigation.classList.remove('navigation-white')

        if(activeScreen == 2){ 
          closeRooms()
          reverceAbout()
        }

        if(activeScreen == 3){
          closeRestaurant()
          reverceAbout()
        }

        if(activeScreen == 4){
          closeAvocations()
          reverceAbout()
        }

        if(activeScreen == 5){
          closeMap()
          reverceAbout()
        }

        gsap.to('.text_bot',{
          scrollTrigger: {
            trigger: '.ab_cont',
            scroller: '.about_complex',
            start: 'center bottom '
          },
          duration: 1,
          transform: "translate(0%,0%)"
        })

        gsap.to('#aboutComplexSlider',{
          scrollTrigger: {
            trigger: '.ab_cont',
            scroller: '.about_complex',
            start: 'center bottom '
          },
          duration: 1,
          transform: "translate(0%,0%)"
        })

        gsap.to('.places_img',{
          scrollTrigger: {
            trigger: '.places_img',
            scroller: '.about_complex',
            start: 'bottom bottom ',
            end: 'bottom center',
            scrub: 1,
          },
          duration: 1,
          transform: "translate(0%,10%)"
        })

        gsap.to('.places_img_second',{
          scrollTrigger: {
            trigger: '.places_img',
            scroller: '.about_complex',
            start: 'bottom bottom ',
            end: 'bottom center',
            scrub: 1,
          },
          duration: 1,
          transform: "translate(0%,15%)"
        })

        gsap.to('.places_img_third',{
          scrollTrigger: {
            trigger: '.places_img',
            scroller: '.about_complex',
            start: 'bottom bottom ',
            end: 'bottom center',
            scrub: 1,
          },
          duration: 1,
          transform: "translate(0%,5%)"
        })

        activeScreen = 1
    }
    
})

navItems[1].addEventListener('click',(e)=>{
    e.preventDefault()

    if(activeScreen !== 2){
        cleanNavs()
        e.currentTarget.classList.add("nav__item-active")
        if(activeScreen == 0) {
          swipeIntro()
        }

        if(activeScreen == 1) swipeAbout("#306261")

        if(activeScreen == 3){
          closeRestaurant()
          reverceRooms()
        }

        if(activeScreen == 4){
          closeAvocations()
          reverceRooms()
        }

        if(activeScreen == 5){
          closeMap()
          reverceRooms()
        }
        
        roomsAnim()

        navigation.classList.add('navigation-white')
        

        activeScreen = 2
    }
    
})

navItems[2].addEventListener('click',(e)=>{
  e.preventDefault()
  if(activeScreen !== 3){
    cleanNavs()
    e.currentTarget.classList.add("nav__item-active")

      if(activeScreen == 0) swipeIntro()
      if(activeScreen == 1) swipeAbout()

      if(activeScreen == 2){
        timeline().fromTo(".rooms", 1.5, {right: "0vw",left:"0vw"}, {duration: 10, right:"initial",left:"-100vw"}).play();
      }

      if(activeScreen == 4){
        closeAvocations()
        reverceBlock('.restaurant');
      }

      if(activeScreen == 5){
        closeMap()
        reverceBlock('.restaurant');
      }

      restaurantAnim()
      restaurantContentAnim()
      navigation.classList.remove('navigation-white')

      activeScreen = 3
  }
  
})

navItems[3].addEventListener('click',(e)=>{
  e.preventDefault()
  if(activeScreen !== 4){
    cleanNavs()
    e.currentTarget.classList.add("nav__item-active")

      if(activeScreen == 0) swipeIntro()
      if(activeScreen == 1) swipeAbout()

      if(activeScreen == 2){
        timeline().fromTo(".rooms", 1.5, {right: "0vw",left:"0vw"}, {duration: 10, right:"initial",left:"-100vw"}).play();
      }

      if(activeScreen == 3){
        timeline().fromTo(".restaurant", 2, {right: "0vw",left:"0vw"}, {duration: 10, right:"initial",left:"-100vw"}).play();
      }

      if(activeScreen == 5){
        closeMap()
        reverceAvocations('.avocations');
      }
      
      navigation.classList.remove('navigation-white')
      avocationsAnim()
      timeline().fromTo(".avocation_block", 1.3, {height: "0%"}, {duration: 10, height: "auto"}).play();
      timeline().fromTo(".avocation_block_1s", 1, {height: "0%"}, {duration: 10, height: "auto"}).play();


      activeScreen = 4
  }
})

navItems[4].addEventListener('click',(e)=>{
  e.preventDefault()
  if(activeScreen !== 5){
    cleanNavs()
    e.currentTarget.classList.add("nav__item-active")

      if(activeScreen == 0) swipeIntro()
      if(activeScreen == 1) swipeAbout("#306261")

      if(activeScreen == 2){
        timeline().fromTo(".rooms", 1.5, {right: "0vw",left:"0vw"}, {duration: 10, right:"initial",left:"-100vw"}).play();
      }

      if(activeScreen == 4){
        timeline().fromTo(".avocations", 2, {right: "0vw",left:"0vw"}, {duration: 10, right:"initial",left:"-100vw"}).play();
        timeline().to(".avocation_block", 1.3,{height: "0%"}).play();
        timeline().to(".avocation_block_1s", 1.3, {height: "0%"}).play();
      }

      navigation.classList.add('navigation-white')
      mapAnim()

      activeScreen = 5
  }
})


// Sliders ---------------------------------------------------------------

const placesSlider = new Swiper('.placesSlider', {
    loop:true,
    speed: 1500,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '#places-next',
      prevEl: '#places-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});

const aboutComplex = new Swiper('.aboutComplex', {
    loop:true,
    speed: 1500,
  
    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '#about-next',
      prevEl: '#about-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});

const standartComplex = new Swiper('.standartRoom', {
    loop:true,
    speed: 1500,
  
    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '#standart-next',
      prevEl: '#standart-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});

const semiDeluxeRoom = new Swiper('.semiDeluxeRoom', {
  loop:true,
  speed: 1500,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '#semi-deluxe-next',
    prevEl: '#semi-deluxe-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const deluxeRoom = new Swiper('.deluxeRoom', {
  loop:true,
  speed: 1500,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '#deluxe-next',
    prevEl: '#deluxe-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const restaurantSlider = new Swiper('.restaurantSlider', {
  loop:true,
  speed: 1500,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '#restaurant-next',
    prevEl: '#restaurant-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


// MOBILE

const navbarBtn = document.querySelector('#navbar__btn')
const mobileBar = document.querySelector('.mobile_bar')

navbarBtn.addEventListener('click', (e)=>{
  navbarBtn.classList.toggle('burger_active')
  mobileBar.classList.toggle('mb_bar_closed')
  if(mobileBar.classList.contains('bot_0')){
    mobileBar.classList.remove("bot_0")
  }else{
      setTimeout(()=>{
          mobileBar.classList.add("bot_0")
      },500)
  } 
})

// modals

const bellModal = document.querySelector(".modal_bell")
const bellBtns = document.querySelectorAll(".bell_btn")

const thanksBtn = document.getElementById("bell-form")
const modalThanks = document.querySelector(".modal__thanks")

const closeModals = document.querySelectorAll(".close_modal")

bellBtns.forEach(el=>{
  el.addEventListener("click",()=>{
      bellModal.style.display = "flex"
      document.body.style.overflowY = "hidden"
      setTimeout(()=>bellModal.style.opacity = "1",100)
      return
  })
})

thanksBtn.onsubmit = (e)=>{
  e.preventDefault()
  bellModal.style.opacity = "0"
  document.body.style.overflowY = "auto"
  setTimeout(()=>bellModal.style.display = "none",300)

  modalThanks.style.opacity = "1"
  document.body.style.overflowY = "hidden"
  setTimeout(()=>modalThanks.style.display = "flex",300)
  return
}

closeModals.forEach(el=>{
    el.addEventListener("click",()=>{
        bellModal.style.opacity = "0"
        document.body.style.overflowY = "auto"
        setTimeout(()=>bellModal.style.display = "none",300)

        modalThanks.style.opacity = "0"
        document.body.style.overflowY = "auto"
        setTimeout(()=>modalThanks.style.display = "none",300)

        return
    })
})