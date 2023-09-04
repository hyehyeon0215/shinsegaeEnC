const main_header = document.querySelector("#header");
const gnb = main_header.querySelectorAll(".desktop-nav > .header-gnb >li");
const sub = main_header.querySelectorAll(".header-sub > li");
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
    })

    mobile_close.addEventListener("click", (e)=> {
        e.preventDefault();
        mobile_nav.classList.remove("mobile");
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
        main_header.classList.add('on');
        bg.classList.add('on');
    })

    main_header.addEventListener("mouseleave", ()=> {
        if(main_header.classList.contains('on')) {
            main_header.classList.remove('on');
            bg.classList.remove('on');
        }
    })

})




search_btn.addEventListener("click", ()=> {
    if(main_header.classList.contains('search')) {
        main_header.classList.remove('search');
        bg.classList.remove('on');
    }
    else {
        main_header.classList.remove('on');
        main_header.classList.add('search');
    
        if (!(bg.classList.contains('on'))) {
            bg.classList.add('on');
        }
    }
})

search_cls.addEventListener("click", (e)=>{
    e.preventDefault();
    main_header.classList.remove('search');
    bg.classList.remove('on');
})

