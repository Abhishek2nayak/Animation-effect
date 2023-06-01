
var circle = document.getElementById("circle")
var frames= document.querySelectorAll('.frame')

function lerp(start, end, t) {
  return start * (1 - t) + end * t
}


frames.forEach(frame => {
 

frame.addEventListener("mousemove",function(details) {
  
  var dims = frame.getBoundingClientRect();
  console.log(dims)
  xstart = dims.x;
  xend = xstart + dims.width;
  var map_value = gsap.utils.mapRange(xstart,xend,0,1,details.clientX);
  var shift = lerp(-50,50,map_value);
  gsap.to(frame.children, {
  x : shift,
  duration : .3
  })
  
  gsap.to(circle, {
    scale : 4
  })
  gsap.to(frame.children , {
    color:"#664229",
    y :"-5vw"
  })
})


frame.addEventListener("mouseleave",function(details) {
    gsap.to(circle, {
      scale : 1
    })
    gsap.to(frame.children , {
        color:"black",
        y :"ovw"
      })
      gsap.to(frame.children, {
        x : 0,
        
        })
    
  })
})

// circle animation 
window.addEventListener("mousemove",function(details) {
  gsap.to(circle, {
    x : details.clientX,
    y : details.clientY,
    duration : .3,
    ease : Expo.ease
  })
})
