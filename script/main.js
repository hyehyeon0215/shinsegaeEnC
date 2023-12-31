const a = document.querySelectorAll('[href="#"]');

a.forEach((el)=>{
    el.addEventListener("click", (e)=>{
        e.preventDefault();
    })
})

const main_header = document.querySelector("#header");

const visual = document.querySelector("#main-visual");
const frame_idxbox = document.querySelector(".frame-index");
const frame_index = document.querySelectorAll(".frame-index li");
const frames = visual.querySelectorAll(".frame li");
const frame_name = visual.querySelectorAll(".frame-name li");

const field_img = document.querySelector(".field-img");

const interval = 5000;
const len = frames.length - 1;

const news_nav = document.querySelectorAll(".news-nav > li");
const news_list = document.querySelectorAll(".news-list > li");


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
        main_header.classList.add('white');
        frame_idxbox.classList.add('on');
        field_img.classList.add('on');
        if (isOn) {
            isOn = false;
            setTimeout(field_counting, 500);
        }
    } else {
        main_header.classList.remove('white');
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
