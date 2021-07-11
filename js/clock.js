const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    let hours = date.getHours();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours :12;
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerHTML = `${hours} : ${minutes} : ${seconds} ${ampm}`;
}

getClock();
setInterval(getClock, 1000);