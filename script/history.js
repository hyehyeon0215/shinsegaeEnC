const history_nav = document.querySelector(".history-nav");
const history_ul = history_nav.querySelector("ul");
const history_li = history_nav.querySelectorAll("ul > li");
const sub_nav = document.querySelector(".sub-nav");

const history_wrap = document.querySelector(".history-wrap");
const history_content = document.querySelectorAll(".history-wrap > div");



window.addEventListener("scroll", ()=> {

    if(window.pageYOffset > history_nav.offsetTop - 100) {
        history_nav.classList.add("fixed");
        sub_nav.style.display = "none";
    }
    else {
        history_nav.classList.remove("fixed");
        sub_nav.style.display = "block";
        history_li[0].classList.add("on");
    }

    if(window.pageYOffset > (history_content[history_content.length - 1].offsetTop + 2000)) {
        history_ul.classList.add("end");
    }
    else {
        history_ul.classList.remove("end");
    }


    history_content.forEach((el, index) => {
        var content_top = el.offsetTop;

        if (window.pageYOffset > content_top) {
            history_li[index].classList.add("on");
        }
        else {
            history_li[index].classList.remove("on");
            
        }

        history_li[0].classList.add("on");
    })

    history_li.forEach((el, index)=>{
        el.addEventListener("click", (e)=>{
            e.preventDefault();
    
            history_li.forEach((el)=>{
                el.classList.remove("on");
            })
            el.classList.add("on");
            window.scrollTo({top: history_content[index].offsetTop + 200, behavior: "smooth"})
        })
    })

})

