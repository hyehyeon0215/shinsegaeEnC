const a = document.querySelectorAll('[href="#"]');

a.forEach((el)=>{
    el.addEventListener("click", (e)=>{
        e.preventDefault();
    })
})

const visual = document.querySelector("#main-visual");
const frame_idxbox = document.querySelector(".frame-index");
const frame_index = document.querySelectorAll(".frame-index li");
const frames = visual.querySelectorAll(".frame li");
const frame_name = visual.querySelectorAll(".frame-name li");


const main_header = document.querySelector("#main-header");
const gnb = main_header.querySelectorAll("nav > .header-gnb >li");
const sub = main_header.querySelectorAll(".header-sub > li");
const bg = document.querySelector(".main-bg");

const search_btn = document.querySelector(".search-btn");
const search_cls = document.querySelector(".search-close");

const interval = 5000;
const len = frames.length - 1;

let num = 0;
let timer = null;

startRolling();

function startRolling() {
    activation(num);
    timer = setInterval(rolling, interval);
}


function activation(index) {
    for (let el of frames) el.classList.remove("on");
    for (let el of frame_index) el.classList.remove("on");
    for (let el of frame_name) el.classList.remove("on");
    frames[index].classList.add("on");
    frame_index[index].classList.add("on");
    frame_name[index].classList.add("on");
    num = index;
}


function rolling() {
    if (num < len) {
        num++;
    } else {
        num = 0;
    }
    activation(num);
}



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


let scroll_section = document.querySelectorAll("[data-scroll]");
let scroll_index = 0;

let wheelTimer;

window.addEventListener("wheel", function(e) {

    e.preventDefault();

    clearTimeout(wheelTimer);
    wheelTimer = setTimeout(function() {
  	    if(e.deltaY > 0) {
            if(scroll_index == scroll_section.length) {
                return;
            }
            else {
                doScroll(++scroll_index);
            }
        }

        if(e.deltaY < 0) {
            if(scroll_index == 0) {
                return;
            }
            else {
                doScroll(--scroll_index);
            }
        }
    },50    );
}, {passive:false});

function doScroll(scroll_index) {
    scroll_index = scroll_index < 0 ? 0 : scroll_index;
    scroll_index = scroll_index > scroll_section.length - 1 ? scroll_section.length - 1 : scroll_index;
      
    curSIdx = scroll_index;
      
    scroll_section[curSIdx].scrollIntoView({
      block: "start", inline: "start", behavior: "smooth"
    });  	
}

window.addEventListener("scroll", () => {
    if (window.pageYOffset > scroll_section[1].offsetTop - 10) {
        main_header.classList.add('white');
        frame_idxbox.classList.add('on');
    } else {
        main_header.classList.remove('white');
        frame_idxbox.classList.remove('on');
    }
})