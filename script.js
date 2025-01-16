const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function fixedimage(){
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

}


function rightbox(){
    let rbox = document.querySelector("#box #right");
let h1 = document.querySelectorAll("#text .he");

h1.forEach(function(h){
    h.addEventListener("click", function(){
        h1.forEach(function(element){
            element.style.opacity = "0.5";
        })

        this.style.opacity = 1;
        
        let image = h.getAttribute("data-image");
        rbox.style.backgroundImage = `url(${image})`
    })
})

}


function swiper(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
    });
}


function menuanime(){
    let flag = 0;

let menu = document.querySelector("nav h3");
let fullScr = document.querySelector("#full-scr");
let navImg = document.querySelector("nav img");

menu.addEventListener("click",function(){
    if(flag === 0){
        fullScr.style.top  = "0%";
        navImg.style.opacity = 0;
        flag = 1;
    }else{
        fullScr.style.top  = "-100%";
        navImg.style.opacity = 1;
        flag = 0;
    }
})
}


fixedimage();
swiper()
rightbox();
menuanime();

let loader = document.querySelector("#loader")
setTimeout(function(){
    loader.style.top = "-150%";
}, 3000)