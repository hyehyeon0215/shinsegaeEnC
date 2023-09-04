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


const header = document.querySelector("#header");
const gnb = header.querySelectorAll(".desktop-nav > .header-gnb >li");
const sub = header.querySelectorAll(".header-sub > li");
const bg = document.querySelector(".main-bg");

const field_img = document.querySelector(".field-img");

const search_btn = document.querySelector(".search-btn");
const search_cls = document.querySelector(".search-close");

const interval = 5000;
const len = frames.length - 1;

const news_nav = document.querySelectorAll(".news-nav > li");
const news_list = document.querySelectorAll(".news-list > li");

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

        mobile_close.addEventListener("click", (e)=> {
            e.preventDefault();
            mobile_nav.classList.remove("mobile");
        })
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

let isOn = true;

window.addEventListener("scroll", () => {
    if (window.pageYOffset > scroll_section[1].offsetTop - 10) {
        header.classList.add('white');
        frame_idxbox.classList.add('on');
        field_img.classList.add('on');
        if (isOn) {
            isOn = false;
            setTimeout(field_counting, 500);
        }
    } else {
        header.classList.remove('white');
        frame_idxbox.classList.remove('on');
        field_img.classList.remove('on');
        isOn = true;
    }
})



function field_counting() {

    const field_li = document.querySelectorAll(".field-img li");

    field_li.forEach((el)=>{
        let num_el = el.querySelector(".field-num");
        let num = parseInt(num_el.innerText);
        let cnt = 0;
        let time = 2000/num;


        setInterval(() => {
            if (cnt === num) {
              clearInterval();
            } else {
              cnt += 1;
              num_el.innerText = cnt;
            }
        }, time);
    })
}

news_nav.forEach((el, index)=>{
    el.addEventListener("click", (e)=>{
        e.preventDefault();
        news_nav.forEach((el)=> {
            el.classList.remove('on');
        });
        news_list.forEach((el)=> {
            el.classList.remove('on');
        });
        news_nav[index].classList.add('on');
        news_list[index].classList.add('on');
    })
})
