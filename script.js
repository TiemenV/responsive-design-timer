"use-strict";
document.addEventListener("DOMContentLoaded", init);

let hours;
let minutes;
let seconds;
let counter;
let i;

function init() {
    document.addEventListener("submit", start);

}

function start(e) {
    console.log("started");
    e.preventDefault();
    counter = 300;
    i = setInterval(tickDown, 1000);

}

function tickDown() {
    counter--;
    hours = parseInt(counter / 3600);
    minutes = parseInt(counter / 60);
    seconds = counter % 60;
    show(hours, minutes, seconds)
}

function show(hours, minutes, seconds) {
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    document.querySelector("div").innerHTML = (hours + ":" + minutes + ":" + seconds);
    if (counter < 1)
        clearInterval(i);

}
