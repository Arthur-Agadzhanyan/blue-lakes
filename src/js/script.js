@@include('webpTest.js');
@@include("hover-effect.umd.js");
@@include("gsap.min.js");

// flags ----------------------------
let activeScreen = 0

// dom elements ---------------------------------------------------------
const navigation = document.querySelector('.navigation')
const navItems = document.querySelectorAll('.nav__item')

const timeline = ()=> gsap.timeline({paused: true})

// animations --------------------------------------------------------------------------
const introAnim_1 = timeline().fromTo(".intro", 1.5, {left: "0"}, {duration: 10, left:"-100vw" });
// const introAnim_2 = timeline().fromTo("#intro_text", 1.5, {marginLeft: 0}, {marginLeft: "0%"});
const introAnim_3 = timeline().fromTo("#intro_img", 1, {marginLeft: 0}, {marginLeft: "-100%"});
const introAnim_4 = timeline().fromTo("#intro_dots", 1.5, {right: 0}, {right: "-280px",top: "100%", position: "absolute", opacity: 0});

const aboutAnim = timeline().fromTo(".about_complex", 1.5, {right: "-100vw",top:0}, {duration: 10, right:0 });
// const aboutAnimClose = timeline().fromTo(".about_complex", 1.5, {duration: 10, right:0 }, {duration: 10, right:"110vw" });

const roomsAnim = timeline().fromTo(".rooms", 1.5, {right: "-100vw"}, {duration: 10, right:"0" });

const restaurantAnim = timeline().fromTo(".restaurant", 1.5, {right: "-100vw"}, {duration: 10, right:"0" });

const avocationsAnim = timeline().fromTo(".avocations", 1.5, {right: "-100vw"}, {duration: 10, right:"0" });

const mapAnim = timeline().fromTo(".map", 1.5, {right: "-100vw"}, {duration: 10, right:"0" });

//------------------
const cleanNavs = ()=> navItems.forEach((item)=>{
  item.classList.remove("nav__item-active")
})

// Menu items onclick animations --------------------------------------------------------------------

navItems[0].addEventListener('click',(e)=>{
    e.preventDefault()
    if(activeScreen !== 1){
        cleanNavs()
        e.currentTarget.classList.add("nav__item-active")

        introAnim_1.play()
        // introAnim_2.play()
        introAnim_3.play()
        introAnim_4.play()

        aboutAnim.play()

        activeScreen = 1
    }
    
})

navItems[1].addEventListener('click',(e)=>{
    e.preventDefault()
    if(activeScreen !== 2){
      cleanNavs()
      e.currentTarget.classList.add("nav__item-active")
        if(activeScreen == 0){
            introAnim_1.play()
            // introAnim_2.play()
            introAnim_3.play()
            introAnim_4.play()
        }
        navigation.classList.add('navigation-white')
        roomsAnim.play()

        activeScreen = 2
    }
    
})

navItems[2].addEventListener('click',(e)=>{
  e.preventDefault()
  if(activeScreen !== 3){
    cleanNavs()
    e.currentTarget.classList.add("nav__item-active")
      if(activeScreen == 0){
          introAnim_1.play()
          // introAnim_2.play()
          introAnim_3.play()
          introAnim_4.play()
      }
      navigation.classList.remove('navigation-white')
      restaurantAnim.play()

      activeScreen = 3
  }
  
})

navItems[3].addEventListener('click',(e)=>{
  e.preventDefault()
  if(activeScreen !== 4){
    cleanNavs()
    e.currentTarget.classList.add("nav__item-active")
      if(activeScreen == 0){
          introAnim_1.play()
          // introAnim_2.play()
          introAnim_3.play()
          introAnim_4.play()
      }

      navigation.classList.remove('navigation-white')
      avocationsAnim.play()

      activeScreen = 4
  }
})

navItems[4].addEventListener('click',(e)=>{
  e.preventDefault()
  if(activeScreen !== 5){
    cleanNavs()
    e.currentTarget.classList.add("nav__item-active")
      if(activeScreen == 0){
          introAnim_1.play()
          // introAnim_2.play()
          introAnim_3.play()
          introAnim_4.play()
      }

      navigation.classList.add('navigation-white')
      mapAnim.play()

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
