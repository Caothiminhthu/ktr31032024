const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondElement = document.getElementById("second");
const ampmElement = document.getElementById("am-pm");

function updateclock() {
    const date = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    const timeString = `${hours}:${minutes}:${seconds}`;

    timeElement.textContent = timeString;
}, 1000);