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

gsap.fromTo('.header-item-container .xl3 span', { y: 150, stagger: .15, autoAlpha: 0, delay: 1.5, }, { y: 0, stagger: .15, autoAlpha: 1, ease: "circ.out", });

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
      // markers:true,
      // scrub:true,
    }
  });
  tl.to("#header-image img", {
    duration: 1,
    x: "-10%",
    // xPercent:10,
    "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)"

  })
})
headerimgmm.add("(max-width:899px)", () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#header-image",
      start: "top 50%",
      end: "top top",
      // scrub:true,
    }
  });
  tl.to("#header-image img", {
    duration: 1,
    "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
  })
})

// **************************
// HEADER TEXT IN TEAL AREA
// **************************

let headertextmm = gsap.matchMedia();

headertextmm.add("(min-width:900px)", () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#header-text",
      start: "top 70%",
      // markers:true,
    }
  });
  tl.from("#header-text", {
    y: 100,
    rotate:10,
    autoAlpha: 0,
    duration:1,
  }).to("#header-text", {
    y: 0,
    autoAlpha: 1,
    "clip-path": "polygon(0 0, 100% 1%, 100% 100%, 0 100%)",
  })
})
headertextmm.add("(max-width:899px)", () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#header-container",
      start: "top top",
      // markers:true,
    }
  });
  tl.from("#header-text", {
    y: "100%",
    autoAlpha: 0,
    duration:1,
  }).to("#header-text", {
    y: 0,
    autoAlpha: 1,
    "clip-path": "polygon(0 0, 100% 1%, 100% 100%, 0 100%)",
  })
})

// ***********************
// ABOUT SECTION PARAGRAPH
// ***********************

let aboutdescmm = gsap.matchMedia();

aboutdescmm.add("(min-width:900px)", () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#about-desc",
      start: "top 70%",
      end: "top 30%",
      // scrub:true,
      // markers:true,
    }
  });

  tl.from("#about-desc .desc", {
    y: 150,
    stagger: .05,
    autoAlpha: 0,
    ease: "circ.out"
  })
    .to("#about-desc .desc", {
      y: 0,
      stagger: .05,
      autoAlpha: 1,
    })
})
aboutdescmm.add("(max-width:899px)", () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#about-desc",
      start: "top 70%",
      end: "top 30%",
      // scrub:true,
      // markers:true,
    }
  });

  tl.from("#about-desc", {
    duraion:1,
    x: "90%",
  })
    .to("#about-desc", {
      "clip-path": "polygon(0 0, 100% 1%, 100% 100%, 0 100%)"
    })
})

// **********************
// ABOUT IMAGE - CAMPFIRE
// **********************

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

recentmm.add("(max-width:899px)", () => {
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
      y:0,
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
  snap: {
    snapTo: 1 / (sections.length - 1),
    duration: 0.05
  },
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 0.1,
    end: "+=3000"
  }
});

// SCROLL VELOCITY BASED SKEWING ON WORK IMAGES

let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".workimg", "skewX", "deg"),
    clamp = gsap.utils.clamp(-20, 10);

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -300);
    // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
    }
  }
});
gsap.set(".workimg", {transformOrigin: "center center", force3D: true});
let proxy2 = { skew: 0 },
    skewSetter2 = gsap.quickSetter(".worktitle", "skewX", "deg"),
    clamp2 = gsap.utils.clamp(-50, 50);

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp2(self.getVelocity() / -200);
    // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
    if (Math.abs(skew) > Math.abs(proxy2.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
    }
  }
});

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".worktitle", {transformOrigin: "bottom bottom", force3D: true});

// // PPAWS TITLE ANIM

gsap.from("#ppaws-title", {
  x: "10%",
  autoAlpha: 0,

  scrollTrigger: {
    trigger: "#ppaws-title",
    start: "center 80%",
    end: "center 40%",
    containerAnimation: scrollTween,
    // markers:true,
    // scrub:true,
  }
});

// // NYCUA TITLE ANIM

gsap.from("#nycua-title", {
  x: "10%",
  autoAlpha: 0,

  scrollTrigger: {
    trigger: "#nycua-title",
    start: "center 80%",
    end: "center 40%",
    containerAnimation: scrollTween,
    // markers:true,
    // scrub:true,
  }
});
// CASV TITLE ANIMATION
gsap.from("#casv-title", {
  x: "10%",
  autoAlpha: 0,

  scrollTrigger: {
    trigger: "#casv-title",
    start: "center 80%",
    end: "center 40%",
    containerAnimation: scrollTween,
    // markers:true,
    // scrub:true,
  }
});
// BETH TITLE ANIMATION
gsap.from("#beth-title", {
  x: "10%",
  autoAlpha: 0,

  scrollTrigger: {
    trigger: "#beth-title",
    start: "center 80%",
    end: "center 40%",
    containerAnimation: scrollTween,
    // markers:true,
    // scrub:true,
  }
});
// ROADTEX TITLE ANIMATION
gsap.from("#roadtex-title", {
  x: "10%",
  autoAlpha: 0,

  scrollTrigger: {
    trigger: "#roadtex-title",
    start: "center 80%",
    end: "center 40%",
    containerAnimation: scrollTween,
    // markers:true,
    // scrub:true,
  }
});
// BROOKS TITLE ANIMATION
gsap.from("#brooks-title", {
  x: "10%",
  autoAlpha: 0,

  scrollTrigger: {
    trigger: "#brooks-title",
    start: "center 80%",
    end: "center 40%",
    containerAnimation: scrollTween,
    // markers:true,
    // scrub:true,
  }
});
// ALB TITLE ANIMATION
gsap.from("#alb-title", {
  x: "10%",
  autoAlpha: 0,

  scrollTrigger: {
    trigger: "#alb-title",
    start: "center 80%",
    end: "center 40%",
    containerAnimation: scrollTween,
    // markers:true,
    // scrub:true,
  }
});
// // ****************
// // PPAWS TITLE ANIM
// // ****************

gsap.to("#ppaws-title", {
  "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  scrollTrigger: {
    trigger: "#panel-1",
    start: "right 90%",
    end: "right 70%",
    containerAnimation: scrollTween,
  }
});

// // ********************
// // PPAWS TEXT ANIMATION
// // ********************

// gsap.from("#ppaws-text", {
//   x: "25%",
//   autoAlpha: 0,
//   delay: .25,
//   scrollTrigger: {
//     trigger: "#panel-1",
//     start: "right 90%",
//     end: "right 70%",
//     containerAnimation: scrollTween,
//   }
// });

// // **********************
// // PPAWS BUTTON ANIMATION
// // **********************

// gsap.from("#ppaws-btn", {
//   y: "25%",
//   autoAlpha: 0,
//   delay: .5,

//   scrollTrigger: {
//     trigger: "#panel-1",
//     start: "right 90%",
//     end: "right 70%",
//     containerAnimation: scrollTween,
//   }
// });

// // *********************
// // NYCUA TITLE ANIMATION
// // *********************

// gsap.from("#nycua-title", {
//   x: "50%",
//   autoAlpha: 0,
//   duration: .75,
//   scale:1.5,
//   scrollTrigger: {
//     trigger: "#panel-2",
//     start: "right 90%",
//     end: "right 70%",
//     containerAnimation: scrollTween,
//   }
// });

// // *********************
// // NYCUA IMAGE ANIMATION
// // *********************

// gsap.from("#nycua-img", {
//   x: "50%",
//   autoAlpha: 0,
//   delay: .5,
//   scale:1.1,

//   scrollTrigger: {
//     trigger: "#panel-2",
//     start: "left 70%",
//     end: "left 50%",
//     containerAnimation: scrollTween,
//     // scrub:true,
//     // markers:true,
//   }
// });

// // ********************
// // NYCUA TEXT ANIMATION
// // ********************

// gsap.from("#nycua-text", {
//   x: "25%",
//   autoAlpha: 0,
//   delay: .25,
//   duration: .75,
//   scrollTrigger: {
//     trigger: "#panel-2",
//     start: "right 90%",
//     end: "right 70%",
//     containerAnimation: scrollTween,
//   }
// });

// // **********************
// // NYCUA BUTTON ANIMATION
// // **********************

// gsap.from("#nycua-btn", {
//   y: "50%",
//   autoAlpha: 0,
//   delay: .5,

//   scrollTrigger: {
//     trigger: "#panel-2",
//     start: "right 90%",
//     end: "right 70%",
//     containerAnimation: scrollTween,
//   }
// });

// // *********************
// // CASV IMAGE ANIMATION
// // *********************

// gsap.from("#casv-img", {
//   x: "50%",
//   autoAlpha: 0,
//   delay: .5,
//   scale:1.1,

//   scrollTrigger: {
//     trigger: "#panel-3",
//     start: "left 70%",
//     end: "left 50%",
//     containerAnimation: scrollTween,
//   }
// });

// // ********************
// // CASV TITLE ANIMATION
// // ********************

// gsap.from("#casv-title", {
//   x: "50%",
//   autoAlpha: 0,
//   duration: .75,
//   scale:1.5,
//   scrollTrigger: {
//     trigger: "#panel-3",
//     start: "right 90%",
//     end: "right 70%",
//     containerAnimation: scrollTween,
//   }
// });

// // ********************
// // CASV TEXT ANIMATION
// // ********************

// gsap.from("#casv-text", {
//   x: "25%",
//   autoAlpha: 0,
//   delay: .25,
//   duration: .75,
//   scrollTrigger: {
//     trigger: "#panel-3",
//     start: "right 90%",
//     end: "right 70%",
//     containerAnimation: scrollTween,
//   }
// });

// // *********************
// // CASV BUTTON ANIMATION
// // *********************

// gsap.from("#casv-btn", {
//   y: "50%",
//   autoAlpha: 0,
//   delay: .5,

//   scrollTrigger: {
//     trigger: "#panel-3",
//     start: "right 90%",
//     end: "right 70%",
//     containerAnimation: scrollTween,
//   }
// });

// // *********************
// // BETH IMAGE ANIMATION
// // *********************

// gsap.from("#beth-img", {
//   x: "50%",
//   autoAlpha: 0,
//   delay: .5,
//   scale:1.1,

//   scrollTrigger: {
//     trigger: "#panel-4",
//     start: "left 70%",
//     end: "left 50%",
//     containerAnimation: scrollTween,
//   }
// });

// // ********************
// // BETH TITLE ANIMATION
// // ********************

// gsap.from("#beth-title", {
//   x: "50%",
//   autoAlpha: 0,
//   duration: .75,
//   scale:1.5,
//   scrollTrigger: {
//     trigger: "#panel-4",
//     start: "right 90%",
//     end: "right 70%",
//     containerAnimation: scrollTween,
//   }
// });

// // ********************
// // BETH IMAGE ANIMATION
// // ********************

// gsap.from("#beth-text", {
//   x: "25%",
//   autoAlpha: 0,
//   delay: .25,
//   duration: .75,
//   scale:1.1,
//   scrollTrigger: {
//     trigger: "#panel-4",
//     start: "right 90%",
//     end: "right 70%",
//     containerAnimation: scrollTween,
//   }
// });

// // *********************
// // BETH BUTTON ANIMATION
// // *********************

// gsap.from("#beth-btn", {
//   y: "50%",
//   autoAlpha: 0,
//   delay: .5,

//   scrollTrigger: {
//     trigger: "#panel-4",
//     start: "right 90%",
//     end: "right 70%",
//     containerAnimation: scrollTween,
//   }
// });

// // *********************
// // BROOKS IMAGE ANIMATION
// // *********************

// gsap.from("#brooks-img", {
//   x: "50%",
//   autoAlpha: 0,
//   delay: .5,

//   scrollTrigger: {
//     trigger: "#panel-5",
//     start: "left 70%",
//     end: "left 50%",
//     containerAnimation: scrollTween,
//   }
// });

// // ********************
// // BROOKS TITLE ANIMATION
// // ********************

// gsap.from("#brooks-title", {
//   x: "50%",
//   autoAlpha: 0,
//   duration: .75,
//   scale:1.5,
//   scrollTrigger: {
//     trigger: "#panel-5",
//     start: "right 90%",
//     end: "right 70%",
//     containerAnimation: scrollTween,
//   }
// });

// // ********************
// // BROOKS IMAGE ANIMATION
// // ********************

// gsap.from("#brooks-text", {
//   x: "25%",
//   autoAlpha: 0,
//   delay: .25,
//   duration: .75,
//   scrollTrigger: {
//     trigger: "#panel-5",
//     start: "right 90%",
//     end: "right 70%",
//     containerAnimation: scrollTween,
//   }
// });

// // *********************
// // BROOKS BUTTON ANIMATION
// // *********************

// gsap.from("#brooks-btn", {
//   y: "50%",
//   autoAlpha: 0,
//   delay: .5,

//   scrollTrigger: {
//     trigger: "#panel-5",
//     start: "right 90%",
//     end: "right 70%",
//     containerAnimation: scrollTween,
//   }
// });

// *******************
// TALK SOON ANIMATION
// *******************
let seemm = gsap.matchMedia();

seemm.add("(min-width:900px)", () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".pinned",
      start: "top 50%",
      end: "top top",
      pin: true,
      scrub: true,
    }
  });
  tl.to("#pinnedh1", {
    duration: 1,
    // y:"100%",
    scale: 2,
  })
})

seemm.add("(max-width:899px)", () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".pinned",
      start: "top 50%",
      end: "top 20%",
      pin: true,
      // markers:true,
      scrub: true,
    }
  });
  tl.to("#pinnedh1", {
    duration: 1,
    // y:"80%",
    scale: 2,
  })
})
// *************************
// FOOTER SLIDE IN ANIMATION
// *************************

let footermm = gsap.matchMedia();

footermm.add("(min-width:900px)", () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#foot-main",
      start: "top 60%",
      end: "top 10%",
      // markers:true,
    }
  });
  tl.from(".footer-container", {
    duration: 1,
    x: "-30%",
  })
})
// ***************************
// FOOTER ITEM SLIDE ANIMATION
// ***************************

let footeritemmm = gsap.matchMedia();

footeritemmm.add("(min-width:900px)", () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#foot-main",
      start: "top 50%",
      end: "top 10%",
      // markers:true,
    }
  });
  tl.from(".footer-item", {
    duration: 1,
    x: "-50%",
    autoAlpha: 0,
    stagger: .15,
  })
})

// **************************
// MOBILE WORK SECTION SLIDER
// **************************

const swiper = new Swiper('.work-swiper', {
  slidesPerView: 1,
  loop: true,
  effect: 'slide',
  navigation: {
    nextEl: '.swiper-button-next-custom',
    prevEl: '.swiper-button-prev-custom',
  },
})