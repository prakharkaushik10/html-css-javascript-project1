


document.addEventListener("mousemove",function(){
    console.log("hey")
})
gsap.to("#nav",{
    backgroundColor:"#000000fb",
    height : "120px",
    duration:0.5,
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        //markers: true,
        start:"top -10%",
        end: "top -10%",
        scrub:true
    }
})
gsap.to("#main",{
    backgroundColor: "#000000ad",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        //markers: true,
        start: "top -30%",
        end:"top -100%",
        scrub: true
    }
})