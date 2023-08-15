const main_header = document.querySelector("#header");
const gnb = main_header.querySelectorAll("nav > .header-gnb >li");
const sub = main_header.querySelectorAll(".header-sub > li");
const bg = document.querySelector(".main-bg");

const search_btn = document.querySelector(".search-btn");
const search_cls = document.querySelector(".search-close");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > scroll_section[1].offsetTop - 10) {
        main_header.classList.add('white');
    } else {
        main_header.classList.remove('white');
    }
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