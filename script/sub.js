const nav_1depth = document.querySelector(".sub-nav-1depth");
const nav_2depth = nav_1depth.querySelector("ul");

nav_1depth.addEventListener("mouseenter", ()=>{
    nav_2depth.classList.add("on");
})

nav_2depth.addEventListener("mouseleave", ()=>{
    nav_2depth.classList.remove("on");

    nav_1depth.addEventListener("mouseleave", ()=>{
        nav_2depth.classList.remove("on");
    })

})
