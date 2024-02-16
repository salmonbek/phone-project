let hrs = document.getElementById("hrs");
let min = document.getElementById("min");

setInterval(() => {
  let currentTime = new Date();

  hrs.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  min.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
}, 1000);

let percentage = document.querySelector(".percentage");
let percent = document.querySelector(".percent");
navigator.getBattery().then(function (battery) {
  percentage.style.width = battery.level * 100 + "%";
  percent.innerHTML = battery.level * 100 + "%";
});
