const secondsClockwise = document.querySelector(".seconds");
const secondsNumber = document.querySelectorAll(".seconds div");
const minutesClockwise = document.querySelector(".minutes");
const minutesNumber = document.querySelectorAll(".minutes div");
const hoursClockwise = document.querySelector(".hours");
const hoursNumber = document.querySelectorAll(".hours div");

const clockFormat = (time) => {
  return time < 10 ? `0${time}` : time;
};

const updateClock = () => {
  const dt = new Date();

  secondsNumber.forEach((e, i) => {
    secondsNumber[i].textContent = clockFormat(dt.getSeconds());
  });
  secondsClockwise.style.transform = `rotate(${6 * dt.getSeconds()}deg)`;

  minutesNumber.forEach((e, i) => {
    minutesNumber[i].textContent = clockFormat(dt.getMinutes());
  });
  minutesClockwise.style.transform = `rotate(${6 * dt.getMinutes()}deg)`;

  hoursNumber.forEach((e, i) => {
    hoursNumber[i].textContent = clockFormat(dt.getHours());
  });
  hoursClockwise.style.transform = `rotate(${30 * dt.getHours()}deg)`;
};

setInterval(updateClock, 1);
