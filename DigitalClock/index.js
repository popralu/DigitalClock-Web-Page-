const hourEl = document.getElementById("hours")
const minutesEl = document.getElementById("minutes")
const secoondsEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")


function updateClock (){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";


    if (h>12) {
        h = h-12
        ampm = "PM";
    }

    hourEl.innerText=h;
    minutesEl.innerText = m;
    secoondsEl.innerText = s;
    ampmEl, (innerText = ampm);
    setTimeout(()=>{
        updateClock()
    },1000)

}

updateClock();