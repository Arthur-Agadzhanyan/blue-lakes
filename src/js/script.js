@@include('webpTest.js');
@@include("hover-effect.umd.js");
@@include("gsap.min.js");

AOS.init()
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

// State ----------------------------
let activeScreen = 0

// timeline
const timeline = () => gsap.timeline({ paused: true })

// dom elements ---------------------------------------------------------
const navigation = document.querySelector('.navigation')
const navItems = document.querySelectorAll('.nav__item')
const navLogo = document.querySelector(".nav_logo")

// animations --------------------------------------------------------------------------

const placesAnim_1 = () => timeline().fromTo("", 1,
  { transform: 'scale(0.4)' + ' translate(65%,35%)' },
  { duration: 1, transform: "scale(1)", transform: 'scale(1)' + 'translate(0px,0px)' }).play();

const placesAnim_2 = () => timeline().fromTo("#places-info", 1.5,
  { transform: 'translateY(25%)' },
  { duration: 1, transform: 'translateY(0px)' }).play();


//------------------

if(innerWidth > 1100){
const cleanNavs = () => navItems.forEach((item) => {
  item.classList.remove("nav__item-active")
})

gsap.to(".avocations", {
  scrollTrigger: {
    trigger: '.avocations',
    scroller: '.container',
    start: 'top center',
    toggleClass: "active"
  }, 
  duration: 2, 
});


gsap.to(".navigation", {
  scrollTrigger: {
    trigger: '.rooms',
    scroller: '.container',
    onEnter: () => {
      cleanNavs()
      navigation.classList.add('navigation-white');
      navItems[1].classList.add("nav__item-active")
    },
    onEnterBack: () => {
      cleanNavs()
      navigation.classList.add('navigation-white');
      navItems[1].classList.add("nav__item-active")
    },
  }, 
  duration: 2, 
});

gsap.to(".navigation", {
  scrollTrigger: {
    trigger: '.map',
    scroller: '.container',
    start: "top center",
    onEnter: () => {
      cleanNavs()
      navigation.classList.add('navigation-white');
      navItems[4].classList.add("nav__item-active")
    },
    onEnterBack: () => {
      cleanNavs()
      navigation.classList.add('navigation-white');
      navItems[4].classList.add("nav__item-active")
    },
  }, 
  duration: 2, 
});

gsap.to(".navigation", {
  scrollTrigger: {
    trigger: '.restaurant',
    scroller: '.container',
    onEnter: () => {
      cleanNavs()
      navigation.classList.remove('navigation-white');
      navItems[2].classList.add("nav__item-active")
    },
    onEnterBack: () => {
      cleanNavs()
      navigation.classList.remove('navigation-white');
      navItems[2].classList.add("nav__item-active")
    },
  }, 
  duration: 2, 
});

gsap.to(".navigation", {
  scrollTrigger: {
    trigger: '.intro',
    scroller: '.container',
    onEnter: () => {
      cleanNavs()
      navigation.classList.remove('navigation-white');
    },
    onEnterBack: () => {
      cleanNavs()
      navigation.classList.remove('navigation-white')
    },
  }, 
  duration: 2, 
});

gsap.to(".navigation", {
  scrollTrigger: {
    trigger: '.about_complex',
    scroller: '.container',
    onEnter: () => {
      cleanNavs()
      navigation.classList.remove('navigation-white');
      navItems[0].classList.add("nav__item-active")
    },
    onEnterBack: () => {
      cleanNavs()
      navigation.classList.remove('navigation-white');
      navItems[0].classList.add("nav__item-active")
    },
  }, 
  duration: 2, 
});

gsap.to(".navigation", {
  scrollTrigger: {
    trigger: '.avocations',
    scroller: '.container',
    onEnter: () => {
      cleanNavs()
      navigation.classList.remove('navigation-white');
      navItems[3].classList.add("nav__item-active")
    },
    onEnterBack: () => {
      cleanNavs()
      navigation.classList.remove('navigation-white');
      navItems[3].classList.add("nav__item-active")
    },
  }, 
  duration: 2, 
});

// navLogo.addEventListener('click',function (event) {
//   event.preventDefault();
//   cleanNavs()
//   gsap.to("html", { scrollTo:{y:0}, duration: 1.5});
// })

// navItems.forEach((navItem)=>{
//   navItem.addEventListener('click',function (event) {
//     event.preventDefault();

//     cleanNavs()
//     event.currentTarget.classList.add("nav__item-active")

//     let id = event.target.getAttribute('href')
//     var left = document.querySelector(id).offsetLeft;
//     gsap.to("html", { scrollTo: left, duration: 1.5});
    
//     console.log(left)
// })
// })

gsap.to('.text_bot', {
  scrollTrigger: {
    trigger: '.ab_cont',
    scroller: '.container',
    start: 'center bottom '
  },
  duration: 1,
  transform: "translate(0%,0%)"
})

gsap.to('#aboutComplexSlider', {
  scrollTrigger: {
    trigger: '.ab_cont',
    scroller: '.container',
    start: 'center bottom '
  },
  duration: 1,
  transform: "translate(0%,0%)"
})

gsap.to('.places_img', {
  scrollTrigger: {
    trigger: '.places_img',
    scroller: '.container',
    start: 'bottom bottom ',
    end: 'bottom center',
    scrub: 1,
  },
  duration: 1,
  transform: "translate(0%,10%)"
})

gsap.to('.places_img_second', {
  scrollTrigger: {
    trigger: '.places_img',
    scroller: '.container',
    start: 'bottom bottom ',
    end: 'bottom center',
    scrub: 1,
  },
  duration: 1,
  transform: "translate(0%,15%)"
})

gsap.to('.places_img_third', {
  scrollTrigger: {
    trigger: '.places_img',
    scroller: '.container',
    start: 'bottom bottom ',
    end: 'bottom center',
    scrub: 1
  },
  duration: 1,
  transform: "translate(0%,5%)"
})


  // window.addEventListener('scroll',()=>{
  //   for (let i = 1; i < 6; i++) {
  //     if(window.scrollY == innerHeight * i){
  //       cleanNavs()
  //       if(i==2 || i==5){
  //         navigation.classList.add('navigation-white')
  //       }else{
  //         navigation.classList.remove('navigation-white')
  //       }
  //       navItems[i-1].classList.add("nav__item-active")
  //     }
  //   }
  // })
}

// Sliders ---------------------------------------------------------------

const placesSlider = new Swiper('.placesSlider', {
  loop: true,
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
  loop: true,
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
  loop: true,
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
  loop: true,
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
  loop: true,
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
  loop: true,
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

navbarBtn.addEventListener('click', (e) => {
  navbarBtn.classList.toggle('burger_active')
  mobileBar.classList.toggle('mb_bar_closed')
  if (mobileBar.classList.contains('bot_0')) {
    mobileBar.classList.remove("bot_0")
  } else {
    setTimeout(() => {
      mobileBar.classList.add("bot_0")
    }, 500)
  }
})

// modals

const bellModal = document.querySelector(".modal_bell")
const bellBtns = document.querySelectorAll(".bell_btn")

const thanksBtn = document.getElementById("bell-form")
const modalThanks = document.querySelector(".modal__thanks")

const closeModals = document.querySelectorAll(".close_modal")

bellBtns.forEach(el => {
  el.addEventListener("click", () => {
    bellModal.style.display = "flex"
    document.body.style.overflowY = "hidden"
    setTimeout(() => bellModal.style.opacity = "1", 100)
    return
  })
})

thanksBtn.onsubmit = (e) => {
  e.preventDefault()
  bellModal.style.opacity = "0"
  document.body.style.overflowY = "auto"
  setTimeout(() => bellModal.style.display = "none", 300)

  modalThanks.style.opacity = "1"
  document.body.style.overflowY = "hidden"
  setTimeout(() => modalThanks.style.display = "flex", 300)
  return
}

closeModals.forEach(el => {
  el.addEventListener("click", () => {
    bellModal.style.opacity = "0"
    document.body.style.overflowY = "auto"
    setTimeout(() => bellModal.style.display = "none", 300)

    modalThanks.style.opacity = "0"
    document.body.style.overflowY = "auto"
    setTimeout(() => modalThanks.style.display = "none", 300)

    return
  })
})

const mbNavItem = document.querySelectorAll('.mb_nav__item')

mbNavItem.forEach((item) => {
  item.addEventListener('click', (e) => {
    navbarBtn.classList.remove('burger_active')
    mobileBar.classList.add('mb_bar_closed')

    if (mobileBar.classList.contains('bot_0')) {
      mobileBar.classList.remove("bot_0")
    }

  })
})