// import { gsap } from "gsap";

function showalert() {
  alert("Hello");
}
function togglemenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu?.classList.toggle("open");
  icon?.classList.toggle("open");
}

var t1 = gsap.timeline();
t1.from(".logoImg", {
  x: -100,
  opacity: 0,
  duration: 0.5,
})
  .from(".hl1", {
    opacity: 0,
    duration: 0.4,
  })
  .from(".hamburger-icon", {
    x: 100,
    opacity: 0,
    duration: 0.5,
  })
  .from(".social-links a", {
    y: 100,
    opacity: 0,
    duration: 0.5,
  })
  .from(".home-middle h2", {
    scale: 1.2,
    opacity: 0,
    duration: 0.7,
  })
  .from(".home-middle h5", {
    opacity: 0,
    duration: 0.6,
  })
  .from(".home-middle p", {
    opacity: 0,
    duration: 0.7,
  })
  .from(".home-middle .button", {
    y: -100,
    opacity: 0,
    duration: 0.7,
  })
  .from(".home-image", {
    y: 100,
    opacity: 0,
    duration: 1.5,
  });

gsap.from(".about .heading", {
  scrollTrigger: {
    trigger: ".about .heading",
    scroller: "body",
    // markers: true,
    start: "top 90%",
    end: "bottom 50%",
    scrub: true,
  },
  opacity: 0,
  y: 100,
});

gsap.from(".left-image", {
  scrollTrigger: {
    trigger: ".left-image",
    scroller: "body",
    start: "top 90%",
    end: "bottom 50%",
  },
  opacity: 0,
  x: -50,
  delay: 1,
  duration: 1,
});

if (window.innerWidth > 767) {
  gsap.from(".right-content", {
    scrollTrigger: {
      trigger: ".right-content",
      scroller: "body",
      start: "top 90%",
      end: "bottom 50%",
    },
    x: 100,
    opacity: 0,
    delay: 1,
    duration: 1,
  });
}

if (window.innerWidth < 767) {
  const m_rightContent = gsap.timeline({
    scrollTrigger: {
      trigger: ".right-content",
      scroller: "body",
      start: "top 90%",
      end: "bottom 50%",
    },
  });
  m_rightContent.from(".right-content", {
    y: 100,
    opacity: 0,
    duration: 1,
  });
}

gsap.from("#skills .heading", {
  scrollTrigger: {
    trigger: "#skills .heading",
    scroll: "body",
    start: "top 90%",
    end: "bottom 70%",
    scrub: true,
  },
  opacity: 0,
  y: 100,
});

if (window.innerWidth > 767) {
  gsap.from(".sc1", {
    scrollTrigger: {
      trigger: ".sc1",
      scroll: "body",
      start: "top 60%",
      end: "bottom 40%",
    },
    opacity: 0,
    x: -100,
  });
  gsap.from(".sc2", {
    scrollTrigger: {
      trigger: ".sc2",
      scroll: "body",
      start: "top 60%",
      end: "bottom 40%",
    },
    opacity: 0,
    x: 100,
  });
  gsap.from(".sc3", {
    scrollTrigger: {
      trigger: ".sc3",
      scroll: "body",
      start: "top 60%",
      end: "bottom 40%",
    },
    opacity: 0,
    x: -100,
  });
  gsap.from(".sc4", {
    scrollTrigger: {
      trigger: ".sc4",
      scroll: "body",
      start: "top 60%",
      end: "bottom 40%",
    },
    opacity: 0,
    x: 100,
  });
}

if (window.innerWidth < 768) {
  gsap.from(".sc1", {
    scrollTrigger: {
      trigger: ".sc1",
      scroll: "body",
      start: "top 60%",
      end: "bottom 40%",
    },
    opacity: 0,
    y: 100,
  });
  gsap.from(".sc2", {
    scrollTrigger: {
      trigger: ".sc2",
      scroll: "body",
      start: "top 60%",
      end: "bottom 40%",
    },
    opacity: 0,
    y: 100,
  });
  gsap.from(".sc3", {
    scrollTrigger: {
      trigger: ".sc3",
      scroll: "body",
      start: "top 60%",
      end: "bottom 40%",
    },
    opacity: 0,
    y: 100,
  });
  gsap.from(".sc4", {
    scrollTrigger: {
      trigger: ".sc4",
      scroll: "body",
      start: "top 60%",
      end: "bottom 40%",
    },
    opacity: 0,
    y: 100,
  });
}

gsap.from("#experience .heading", {
  scrollTrigger: {
    trigger: "#experience .heading",
    scroll: "body",
    start: "top 80%",
    end: "bottom 60%",
    scrub: true,
  },
  opacity: 0,
  y: 100,
});
if (window.innerWidth > 767) {
  gsap.from(".ec1", {
    scrollTrigger: {
      trigger: ".ec1",
      scroll: "body",
      start: "top 60%",
      end: "bottom 40%",
    },
    opacity: 0,
    x: -100,
  });
  gsap.from(".ec2", {
    scrollTrigger: {
      trigger: ".ec2",
      scroll: "body",
      start: "top 60%",
      end: "bottom 40%",
    },
    opacity: 0,
    x: 100,
  });
}

if (window.innerWidth < 767) {
  gsap.from(".ec1", {
    scrollTrigger: {
      trigger: ".ec1",
      scroll: "body",
      start: "top 60%",
      end: "bottom 40%",
    },
    opacity: 0,
    y: 100,
  });
  gsap.from(".ec2", {
    scrollTrigger: {
      trigger: ".ec2",
      scroll: "body",
      start: "top 60%",
      end: "bottom 40%",
    },
    opacity: 0,
    y: 100,
  });
}

gsap.from("#contact .heading", {
  scrollTrigger: {
    trigger: "#contact .heading",
    scroll: "body",
    start: "top 90%",
    end: "bottom 90%",
    scrub: true,
  },
  opacity: 0,
  y: 100,
});

if (window.innerWidth > 767) {
  gsap.from(".ct1", {
    scrollTrigger: {
      trigger: ".ct1",
      scroll: "body",
      start: "top 70%",
      end: "bottom 70%",
    },
    opacity: 0,
    x: -100,
    duration: 1,
  });

  gsap.from(".ct2", {
    scrollTrigger: {
      trigger: ".ct2",
      scroll: "body",
      start: "top 60%",
      end: "bottom 40%",
    },
    opacity: 0,
    x: -60,
    duration: 1,
  });
  gsap.from(".ct3", {
    scrollTrigger: {
      trigger: ".ct3",
      scroll: "body",
      start: "top 70%",
      end: "bottom 70%",
    },
    opacity: 0,
    x: 100,
    duration: 1,
  }); 
}
