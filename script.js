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

// Search functionality
document.getElementById('search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

document.getElementById('search-button').addEventListener('click', performSearch);

function performSearch() {
    const query = document.getElementById('search-input').value.trim();
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
}
