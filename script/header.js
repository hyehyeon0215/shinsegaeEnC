const header = document.querySelector("#header");
const gnb = header.querySelectorAll(".desktop-nav > .header-gnb >li");
const sub = header.querySelectorAll(".header-sub > li");
const bg = document.querySelector(".main-bg");

const search_btn = document.querySelector(".search-btn");
const search_cls = document.querySelector(".search-close");

const sitemap_btn = document.querySelector(".sitemap-btn");
const mobile_nav = document.querySelector(".mobile-nav");
const mobile_li = mobile_nav.querySelectorAll("ul>li");
let size = screen.availWidth;
const mobile_size = 768;
const mobile_close = document.querySelector(".mobile-close");


if(size < mobile_size) {
    sitemap_btn.addEventListener("click", (e)=>{
        e.preventDefault();
        mobile_nav.classList.add("mobile");
        bg.style.zIndex = 5;
        bg.classList.add('on');
    })

    mobile_close.addEventListener("click", (e)=> {
        e.preventDefault();
        mobile_nav.classList.remove("mobile");
        bg.style.zIndex = 4;
        bg.classList.remove('on');
    })
}

mobile_li.forEach((el)=>{
    el.addEventListener("click", ()=>{
        mobile_li.forEach((el)=>{
            el.classList.remove("on");
        })
        el.classList.add("on");
    })
})

gnb.forEach((el)=>{
    el.addEventListener("mouseenter", ()=>{
        header.classList.add('on');
        bg.classList.add('on');
    })

    header.addEventListener("mouseleave", ()=> {
        if(header.classList.contains('on')) {
            header.classList.remove('on');
            bg.classList.remove('on');
        }
    })

})


search_btn.addEventListener("click", ()=> {
    if(header.classList.contains('search')) {
        header.classList.remove('search');
        bg.classList.remove('on');
    }
    else {
        header.classList.remove('on');
        header.classList.add('search');
    
        if (!(bg.classList.contains('on'))) {
            bg.classList.add('on');
        }
    }
})

search_cls.addEventListener("click", (e)=>{
    e.preventDefault();
    header.classList.remove('search');
    bg.classList.remove('on');
})

