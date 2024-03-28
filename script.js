// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

gsap.registerPlugin(ScrollTrigger);
 
// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  smoothMobile: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".data-scroll-container" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



let images = gsap.utils.toArray('.z-out')

images.forEach((item, index) => {

 let exptl = gsap.timeline({
   scrollTrigger:{
     trigger: item,
     start: "top 85%",
     end: "top 5%",
     scrub: 2,
     markers: true,
     scroller: '#main'
   }
 });
 exptl.from(item, {
   x: 100,
   opacity: 0,
   duration: 1
 });
 
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
let wb = document.querySelector("#wb");
let ap = document.querySelector("#ap");
let  br= document.querySelector("#br");
let v1 = document.querySelector("#v1");
let v2 = document.querySelector("#v2");
let v3 = document.querySelector("#v3");
 gsap.from("#hd",{
    top:"100%",duration:1.3,delay:1
})
gsap.from("#cont1 h3",{
    top:"100%",duration:1.3,delay:1
})
let mouse = document.querySelector("#mouse");
document.addEventListener("mousemove",function(details){
    mouse.style.top=details.y+5+"px";
    mouse.style.left=details.x+5+"px";

})
let i1 = document.querySelector("#i1");
let ic = document.querySelector("#i1 i");
i1.addEventListener("mouseenter",function(){
    mouse.style.height="5vw";
    mouse.style.width="5vw";
    ic.style.color="white";
   
    
   

})

i1.addEventListener("mouseleave",function(){
    mouse.style.height="1vw";
    mouse.style.width="1vw";
    ic.style.color="black";
    
})
let cnt = document.querySelector("#page1 #cont1");
cnt.addEventListener("mouseenter",function(){

mouse.style.height="10vw";
mouse.style.width="10vw";
v1.style.visibility="visible";
})
cnt.addEventListener("mouseleave",function(){
    mouse.style.height="1vw";
    mouse.style.width="1vw";
    v1.style.visibility="hidden";
    
})

let p2 = document.querySelector("#page2");
p2.addEventListener("mouseenter",function(){
    mouse.style.visibility="hidden";
   
})

p2.addEventListener("mouseleave",function(){
    mouse.style.visibility="visible";
    
});


wb.addEventListener("mouseenter",function(){
    v1.style.visibility="visible";
    v2.style.visibility="hidden";
    v3.style.visibility="hidden";

   
    })
    wb.addEventListener("mouseleave",function(){
        v1.style.visibility="hidden";
    
       
        })
        ap.addEventListener("mouseenter",function(){
            v2.style.visibility="visible"
            v1.style.visibility="hidden";
            v3.style.visibility="hidden";
           
            })
            ap.addEventListener("mouseleave",function(){
                v2.style.visibility="hidden";
            
               
                })
                br.addEventListener("mouseenter",function(){
                    v3.style.visibility="visible"
                    v2.style.visibility="hidden";
                    v1.style.visibility="hidden";
                   
                    })
                    br.addEventListener("mouseleave",function(){
                        v3.style.visibility="hidden";
                    
                       
                    })
                    // Shery.imageEffect("#fimg", {
                    //   style: 1,gooey:true,config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.7,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7981566286012405},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.06,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
                    // })
                    let e1 = document.querySelector("#e1");
                    let e2 = document.querySelector("#e2");
                    let e3 = document.querySelector("#e3");
                    let e4 = document.querySelector("#e4");
                   
                    let ft = document.querySelector("#fimg");
                    let clk=0;
                    ft.addEventListener("click",function(){
                      if(clk==4)
                      {
                   
                 clk=0  } 
                  })
                  

                    ft.addEventListener("click",function(){
                      if(clk==3)
                      {
                    gsap.to(e1,{
                      y:"0%",duration:1,
                    })
                    gsap.to(e2,{
                      y:"0%",duration:1,
                    })
                    gsap.to(e3,{
                      y:"0%",duration:1,
                    })
                    gsap.to(e4,{
                      y:"0%",duration:1,
                    })
                 clk=4  } 
                  })
                     
                      
                        ft.addEventListener("click",function(){
                          if(clk==2)
                          {
                        gsap.to(e3,{
                          y:"-300%",duration:1,
                        })
                        gsap.to(e4,{
                          y:"-300%",duration:1,
                        })
                     clk=3  } 
                      })
                
              
                    ft.addEventListener("click",function(){
                      if(clk==2)
                      {
                    gsap.to(e3,{
                      y:"-300%",duration:1,
                    })
                    gsap.to(e4,{
                      y:"-300%",duration:1,
                    })
                 clk=3  } 
                  })
                    ft.addEventListener("click",function(){
                      if(clk==1)
                      {
                    gsap.to(e2,{
                      y:"-200%",duration:1,
                    })
                    gsap.to(e3,{
                      y:"-200%",duration:1,
                    })
                    clk=2;    } 
                  })
                    ft.addEventListener("click",function(){
                      if(clk==0)
                      {
                    gsap.to(e1,{
                      y:"-100%",duration:1,
                    })
                    gsap.to(e2,{
                      y:"-100%",duration:1,
                    })
                    clk=1;
                   } })
                  //  footer gsap
                  let tc = gsap.timeline({
                    scrollTrigger:{
                      scroller:"#main",trigger:"#footer #conti #d1 h1",start:"top 50%",end:"top 40%",scrub:1

                    }
                  })
                  tc.from("#footer #conti #d1 h1",{
                    y:150,duration:1,
                   },"gg")
                   tc.from("#footer #conti #d2 h1",{
                    y:150,duration:1
                   },"gg")
                   tc.from("#footer #conti #d3 #b2",{
                    y:150,duration:1
                   },"gg")
                  tc.from("#footer #footu #d1",{
                    y:150,duration:1
                   },"gg")
                   
                  tc.from("#footer #footu #d2",{
                    y:150,duration:1
                   },"gg")
                  tc.from("#footer #footu a",{
                    y:150,duration:1
                   },"gg")
                   tc.to("#i1 i",{
                    color:"white",duration:1
                   },"gg")
                   let mh = document.querySelector("#mouse h1");
    let cti = document.querySelector(".cti");
    cti.addEventListener("mouseenter",function(){
      mouse.style.height="10vw";
      mouse.style.width="10vw";
      mh.style.display="contents";
      

     
      
     
    })
    cti.addEventListener("mouseleave",function(){
      mouse.style.height="1vw";
      mouse.style.width="1vw";
      mh.style.display="none";
      

     
      
     
    })
                    
    let ftr = document.querySelector("#footer");
    
    ftr.addEventListener("mouseenter",function(){
      mouse.style.backgroundColor="white";
     
     
    })
   
    ftr.addEventListener("mouseleave",function(){
      mouse.style.backgroundColor="black";
      
      
     
    
   
     
    })
    let icon = document.querySelector("#icon");
    let bt =0;
    let items = document.querySelector("#items");
    let bar = document.querySelector("#bar");
    let cr = document.querySelector("#cross");
    icon.addEventListener("click",function(){
      if(bt==0){
    bar.style.visibility="hidden";
    cr.style.visibility="visible";
    items.style.top="0";
    items.style.transitionDuration="0,8s";
    
    bt=1;
    gsap.from("#items #conr h6 a",{
      y:"50vw",duration:1.5,stagger:0.3
        })
      
  }
      else{
        cr.style.visibility="hidden";
        bar.style.visibility="visible";
        items.style.top="-150%";
        
        items.style.transitionDuration="0.8s"
        bt=0;
          }
    })