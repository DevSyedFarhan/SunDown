const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let container = document.querySelector("#elem-container");
let fixed = document.querySelector("#fixed-image");

container.addEventListener("mouseenter", function(){
    fixed.style.opacity = 1;
})
container.addEventListener("mouseleave", function(){
    fixed.style.opacity = 0;
})

let elems = document.querySelectorAll(".elem");
elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        let image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})