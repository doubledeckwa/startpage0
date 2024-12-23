`use strict`;

// display time as hh:mm:ss
const options = {
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
};

const locale = navigator.languages != undefined ? navigator.languages[0] : navigator.language;

myTimer(); // Initialize clock

const myVar = setInterval(myTimer, 1000);

function myTimer() {
    const today = new Date();
    const time = today.toLocaleTimeString(locale, options);
    document.getElementById("time").textContent = time;
}
