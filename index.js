let secondsElapsed = 0;
let interval = null; 
const time = document.getElementById("time")

Function padStart(value){
    return String(value).padStart(2, "0")
}
function setTime(){
    const minutes = Math.floor(secondsElapsed/ 60)
    const seconds = secondsElapsed % 60
    time.innerHTML = `${padStart(minutes)}: ${padStart(seconds)}`;
}
function timer(){
    secondsElapsed++;
    setTime()
}

function startClock(){
    interval = setInterval(timer, 1000)
}

function stopClock(){}

function resetClock(){}