"use strict";
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
    minutes = parseInt(counter % 3600 / 60);
    seconds = counter % 60;
    show(hours, minutes, seconds)
}

function show(hours, minutes, seconds) {
   
    document.querySelector("div").innerHTML = (hours< 10 ? '0' + hours: hours)+':'+(minutes< 10 ? '0' + minutes: minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);

    if (counter < 1)
        clearInterval(i);

}
