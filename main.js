gsap.from(".navbar", {
    y:-50,
    opacity:0,
    duration:2,
});

// gsap.from(".herol h1", {
//     opacity:0,
//     duration:5,
//     onStart: function (){
//         $('.herol h1').textillate({ in: { effect: 'bounceInUp' } });
//     }
// });


gsap.from(".heror video",{
    opacity:0,
    duration:5,
})

gsap.from(".hero2-heading h1", {
    scrollTrigger:{
        trigger:".hero2-heading h1",
        croller:"body",
        start:"bottom 95%",
        scrub:3
    },
    opacity:0,
    duration:2,
    scale:1,
    y:100
});


gsap.from(".allcard", {
    scrollTrigger:{
        trigger:".allcard",
        croller:".hero2-card",
        start:"top 95%",
        scrub:3
    },
    opacity:1,
    duration:1,
    scale:1,
    y:100
});

gsap.from(".allcard2", {
    scrollTrigger:{
        trigger:".allcard2",
        croller:".hero2-card",
        start:"bottom 50%",
        scrub:true
    },
    opacity:0.9,
    duration:3,
    scale:1,
    y:-100
});

gsap.from(".hero3", {
    scrollTrigger:{
        trigger:".hero3",
        croller:".hero3",
        start:"top 90%",
        scrub:3
    },
    opacity:0.6,
    duration:1,
    scale:1,
    y:100
});

gsap.from(".hero3text", {
    scrollTrigger:{
        trigger:".hero3text",
        croller:".hero3",
        start:"top 90%",
        scrub:3
    },
    opacity:1,
    duration:1,
    scale:1,
    x:100
});

gsap.from(".hero4", {
    scrollTrigger:{
        trigger:".hero4",
        croller:".hero4",
        start:"top 90%",
        scrub:3
    },
    opacity:1,
    duration:1,
    scale:1,
    y:100
});

gsap.from(".hero4text", {
    scrollTrigger:{
        trigger:".hero4text",
        croller:".hero4",
        start:"top 90%",
        scrub:3
    },
    opacity:1,
    duration:1,
    scale:1,
    x:-100
});

gsap.from(".hero5text", {
    scrollTrigger:{
        trigger:".hero5text",
        croller:".hero5",
        start:"top 90%",
        scrub:3
    },
    opacity:1,
    duration:1,
    scale:1,
    x:100
});

gsap.from(".hero6", {
    scrollTrigger:{
        trigger:".hero6",
        croller:".body",
        start:"top 90%",
        scrub:3
    },
    opacity:1,
    duration:1,
    scale:1,
    y:100
});

gsap.from(".hero6 h1", {
    scrollTrigger:{
        trigger:".hero6 h1",
        croller:".hero6",
        start:"bottom 90%",
        scrub:3
    },
    opacity:1,
    duration:1,
    scale:1,
    y:100
});


gsap.from(".herocardtext, text1, text2, text3", {
    scrollTrigger:{
        trigger:".herocardtext",
        croller:".hero6",
        start:"top 90%",
        scrub:3
    },
    opacity:1,
    duration:0.3,
    stagger:0.4,
    scale:1,
    y:100
});

gsap.from(".sabfooter", {
    scrollTrigger:{
        trigger:".sabfooter",
        croller:".body",
        start:"top 90%",
        scrub:3
    },
    opacity:0.5,
    duration:1,
    scale:1,
    y:100
});

gsap.from("footer", {
    scrollTrigger:{
        trigger:".footer",
        croller:".body",
        start:"top 90%",
        scrub:3
    },
    opacity:0.5,
    duration:1,
    scale:1,
    y:100
});







