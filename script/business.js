const icons = document.querySelectorAll(".icon-list > li");
const img_list = document.querySelector(".img-list");
const a = document.querySelectorAll('[href="#"]');

a.forEach((el)=>{
    el.addEventListener("click", (e)=>{
        e.preventDefault();
    })
})


icons.forEach((el, index)=>{
    el.addEventListener("click", (e)=>{
        e.preventDefault();
        icons.forEach((el)=>{
            el.classList.remove("on");
        })
        el.classList.add("on");

        img_list.classList.remove("grid");
        img_list.classList.remove("list-ul");

        if(index == 0) {
            img_list.classList.add("grid");
        }
        else {
            img_list.classList.add("list-ul");
        }
    })
})