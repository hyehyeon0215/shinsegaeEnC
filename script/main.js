const visual = document.querySelector("#main-visual");
const frames = visual.querySelectorAll(".frame li");
const frame_index = visual.querySelectorAll(".frame-index li");
const bars = visual.querySelectorAll(".bar");
const frame_name = visual.querySelectorAll(".frame-name li");


const interval = 5000;
const len = frames.length - 1;

let num = 0;
let timer = null;

startRolling();


function startRolling() {

    for (let el of bars) el.style.display = "block";

    setTimeout(progress, 0);
    activation(num);


    timer = setInterval(rolling, interval);

}



function activation(index) {
    for (let el of frames) el.classList.remove("on");
    for (let el of frame_index) el.classList.remove("on");
    for (let el of frame_name) el.classList.remove("on");
    for (let el of bars) el.classList.remove("on");
    frames[index].classList.add("on");
    frame_index[index].classList.add("on");
    frame_name[index].classList.add("on");
    bars[index].classList.add("on");
    num = index;
    for (let el of bars) el.style.width = "0%";
}


function rolling() {
    if (num < len) {
        num++;
    } else {
        num = 0;
    }
    activation(num);
    progress();
}


function progress() {
    bars.forEach((el, index)=>{

        if(el.classList = 'on') {
            const init = 0;
            const targetValue = 100;
            const unit = '%';
            const startTime = performance.now();
        
            function animate(time) {
                const realTime = time - startTime;
                const prog = realTime / interval;
                const currentValue = init + ((targetValue - init) * prog);
    
                bars[index].style.width = `${currentValue}${unit}`;
        
                if(prog < 1) {
                    requestAnimationFrame(animate);
                } else {
                    bars[index].style.width = "0%"
                    if (typeof callback === "function") callback();
                }
            }
        
            requestAnimationFrame(animate);
        }
    })
}
