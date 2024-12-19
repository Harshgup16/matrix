gsap.to(".page2 h1",{
    transform:"translateX(-350%)",
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end:"top -150%",
        scrub:2,
        pin:true
    }
})
gsap.to(".square_img img", {
    scale: 1.9,
    scrollTrigger: {
        trigger: ".page2_1",
        scroller: "body",
        start: "top 100%",
        end: "bottom center",
        scrub: 2,
        // markers: true
    }
});
