var second = document.querySelector(".seconds");
var minute = document.querySelector(".minutes");
var hour = document.querySelector(".hours");

setInterval(setDate, 1000);

function setDate() {
    const now = new Date();
    var currentSeconds = now.getSeconds();
    var currentMinutes = now.getMinutes();
    var currentHour = now.getHours();
    var secondDegree = (currentSeconds/60) * 360 + 90;
    var minuteDegree = (currentMinutes/60) * 360 + 90;
    var hourDegree = (currentHour/12) * 360 + 90;
    second.style.transform = `rotate(${secondDegree}deg)`;
    minute.style.transform = `rotate(${minuteDegree}deg)`;
    hour.style.transform = `rotate(${hourDegree}deg)`;
}