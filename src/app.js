let currentDate = new Date();
let time = document.querySelector("h6");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentDate.getDay()];
let hour = currentDate.getHours();
let min = currentDate.getMinutes();
if (hour < 10) {
  hour = `0${hour}`;
}
if (min < 10) {
  min = `0${min}`;
}
time.innerHTML = `${day} ${hour}:${min}`;
