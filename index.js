var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-area").style.top = "0";
  } else {
    document.getElementById("nav-area").style.top = "-100%";
  }
  prevScrollpos = currentScrollPos;
}

gsap.registerPlugin(ScrollTrigger);

// *******************
// NAME AT TOP OF PAGE
// *******************

gsap.fromTo('.header-container .xl span', { rotate: 5, y: 150, stagger: .05, autoAlpha: 0 }, { y: 0, stagger: .05, autoAlpha: 1, rotate: 0, });

// ***********************
// PICTURE OF ME ON LAPTOP
// ***********************

let headerimgmm = gsap.matchMedia();

headerimgmm.add("(min-width:900px)", () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#header-image",
      start: "top 45%",
      end: "top top",
    }
  });
  tl.to("#header-image img", {
    duration: 1,
    "clip-path": "polygon(100% 100%, 100% 0, 0 0, 0 100%)"
  })
})
headerimgmm.add("(max-width:899px)", () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#header-image",
      start: "top 45%",
      end: "top top",
    }
  });
  tl.to("#header-image img", {
    duration: 1,
    "clip-path": "polygon(100% 100%, 100% 0, 0 0, 0 100%)",
  })
})

// **************************
// HEADER TEXT IN ORANGE AREA
// **************************

let headertextmm = gsap.matchMedia();

headertextmm.add("(min-width:900px)", () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#header-text",
      start: "top 55%",
    }
  });
  tl.from("#header-text", {
    y: "100%",
    autoAlpha: 0,
  }).to("#header-text", {
    y: 0,
    autoAlpha: 1,
  })
})

// ***********************
// ABOUT SECTION PARAGRAPH
// ***********************

let aboutdescmm = gsap.matchMedia();

aboutdescmm.add("(min-width:900px)", () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about",
      start: "top 60%",
      end: "top top",
    }
  });

  tl.from("#about-desc", {
    autoAlpha: 0,
    y: "100%",
  })
    .to("#about-desc", {
      autoAlpha: 1,
      y: "0",
    })
})

// *********************
// ABOUT IMAGE WITH NALA
// *********************

let aboutimgmm = gsap.matchMedia();

aboutimgmm.add("(min-width:900px)", () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#about-img",
      start: "top 45%",
      end: "top top",
    }
  });
  tl.to("#about-img", {
    duration: 1,
    "clip-path": "polygon(100% 100%, 100% 0, 0 0, 0 100%)"
  })
})
aboutimgmm.add("(max-width:899px)", () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#about-img",
      start: "top 50%",
      end: "top top",
    }
  });
  tl.to("#about-img", {
    duration: 1,
    "clip-path": "polygon(100% 100%, 100% 0, 0 0, 0 100%)"
  })
})

// ******************************
// RECENT WORK HEADLINE ANIMATION
// ******************************

let recentmm = gsap.matchMedia();

recentmm.add("(min-width:900px)", () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#work1",
      start: "top 50%",
      end: "top top",
    }
  });

  tl.from("#work1 h1 .recent", {
    y: 150,
    stagger: .05,
    autoAlpha: 0
  })
    .to("#work1 h1 .recent", {
      stagger: .05,
      autoAlpha: 1
    })
})

// ******************************************************
// CONTROLS THE PINNED HORIZONTAL WORK SECTION ON DESKTOP
// ******************************************************

let sections = gsap.utils.toArray(".panel");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 0.1,
    end: "+=3000"
  }
});

// PPAWS IMAGE ANIM

gsap.from("#ppaws-img", {
  x: "90%",
  autoAlpha: 0,
  markers:true,

  scrollTrigger: {
    trigger: "#panel-1",
    start: "center 60%",
    end: "right 20%",
    containerAnimation: scrollTween,
  }
});

// ****************
// PPAWS TITLE ANIM
// ****************

gsap.from("#ppaws-title", {
  x: "25%",
  autoAlpha: 0,
  duration: .75,
  scrollTrigger: {
    trigger: "#panel-1",
    start: "right 90%",
    end: "right 70%",
    containerAnimation: scrollTween,
  }
});

// ********************
// PPAWS TEXT ANIMATION
// ********************

gsap.from("#ppaws-text", {
  x: "25%",
  autoAlpha: 0,
  delay: .25,
  scrollTrigger: {
    trigger: "#panel-1",
    start: "right 90%",
    end: "right 70%",
    containerAnimation: scrollTween,
  }
});

// **********************
// PPAWS BUTTON ANIMATION
// **********************

gsap.from("#ppaws-btn", {
  y: "25%",
  autoAlpha: 0,
  delay: .5,

  scrollTrigger: {
    trigger: "#panel-1",
    start: "right 90%",
    end: "right 70%",
    containerAnimation: scrollTween,
  }
});

// *********************
// NYCUA TITLE ANIMATION
// *********************

gsap.from("#nycua-title", {
  x: "25%",
  autoAlpha: 0,
  duration: .75,
  scrollTrigger: {
    trigger: "#panel-2",
    start: "right 90%",
    end: "right 70%",
    containerAnimation: scrollTween,
  }
});

// *********************
// NYCUA IMAGE ANIMATION
// *********************

gsap.from("#nycua-img", {
  x: "25%",
  autoAlpha: 0,
  delay: .5,

  scrollTrigger: {
    trigger: "#panel-2",
    start: "left 60%",
    end: "left 40%",
    containerAnimation: scrollTween,
  }
});

// ********************
// NYCUA TEXT ANIMATION
// ********************

gsap.from("#nycua-text", {
  x: "25%",
  autoAlpha: 0,
  delay: .25,
  duration: .75,
  scrollTrigger: {
    trigger: "#panel-2",
    start: "right 90%",
    end: "right 70%",
    containerAnimation: scrollTween,
  }
});

// **********************
// NYCUA BUTTON ANIMATION
// **********************

gsap.from("#nycua-btn", {
  y: "50%",
  autoAlpha: 0,
  delay: .5,

  scrollTrigger: {
    trigger: "#panel-2",
    start: "right 90%",
    end: "right 70%",
    containerAnimation: scrollTween,
  }
});

// ********************
// CASV TITLE ANIMATION
// ********************

gsap.from("#casv-title", {
  x: "25%",
  autoAlpha: 0,
  duration: .75,
  scrollTrigger: {
    trigger: "#panel-3",
    start: "right 90%",
    end: "right 70%",
    containerAnimation: scrollTween,
  }
});

// ********************
// CASV IMAGE ANIMATION
// ********************

gsap.from("#casv-text", {
  x: "25%",
  autoAlpha: 0,
  delay: .25,
  duration: .75,
  scrollTrigger: {
    trigger: "#panel-3",
    start: "right 90%",
    end: "right 70%",
    containerAnimation: scrollTween,
  }
});

// *********************
// CASV BUTTON ANIMATION
// *********************

gsap.from("#casv-btn", {
  y: "50%",
  autoAlpha: 0,
  delay: .5,

  scrollTrigger: {
    trigger: "#panel-3",
    start: "right 90%",
    end: "right 70%",
    containerAnimation: scrollTween,
  }
});

// ********************
// BETH TITLE ANIMATION
// ********************

gsap.from("#beth-title", {
  x: "25%",
  autoAlpha: 0,
  duration: .75,
  scrollTrigger: {
    trigger: "#panel-4",
    start: "right 90%",
    end: "right 70%",
    containerAnimation: scrollTween,
  }
});

// ********************
// BETH IMAGE ANIMATION
// ********************

gsap.from("#beth-text", {
  x: "25%",
  autoAlpha: 0,
  delay: .25,
  duration: .75,
  scrollTrigger: {
    trigger: "#panel-4",
    start: "right 90%",
    end: "right 70%",
    containerAnimation: scrollTween,
  }
});

// *********************
// BETH BUTTON ANIMATION
// *********************

gsap.from("#beth-btn", {
  y: "50%",
  autoAlpha: 0,
  delay: .5,

  scrollTrigger: {
    trigger: "#panel-4",
    start: "right 90%",
    end: "right 70%",
    containerAnimation: scrollTween,
  }
});

// *************************
// FOOTER SLIDE IN ANIMATION
// *************************

let footermm = gsap.matchMedia();

footermm.add("(min-width:900px)", () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#foot-main",
      start: "top 50%",
      end: "top 10%",
      markers:true,
    }
  });
  tl.from(".footer-container", {
    duration: 1,
    x: "-100%",
  })
})

aboutimgmm.add("(max-width:899px)", () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#about-img",
      start: "top 50%",
      end: "top top",
    }
  });
  tl.to("#about-img", {
    duration: 1,
    "clip-path": "polygon(100% 100%, 100% 0, 0 0, 0 100%)"
  })
})

// **************************
// MOBILE WORK SECTION SLIDER
// **************************

const swiper = new Swiper('.work-swiper', {
  autoplay: {
    delay: 5000,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
})

// ***************************************
// BELOW MIGHT BE REINSTATED AT SOME POINT
// ***************************************

// SKILLS AREA

// let skillsdescmm = gsap.matchMedia();

// skillsdescmm.add("(min-width:900px)", () => {
//   let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".tech-container",
//       start: "top 60%",
//       end: "top top",
//     }
//   });

//   tl.from(".tech-item", {
//     autoAlpha: 0,
//     y: "100%",
//     stagger: .15,
//   })
//     .to("#about-desc", {
//       autoAlpha: 1,
//       y: "0",
//       stagger: .15,
//     })
// })