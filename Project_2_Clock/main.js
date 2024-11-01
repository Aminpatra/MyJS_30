const secondHandEl = document.querySelector(".second-hand");
const minHandEl = document.querySelector(".min-hand");
const hourHandEl = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  
  const seconds = now.getSeconds();
  let secondsDeg = ((seconds / 60) * 360) + 90;
  secondHandEl.style.transform = `rotate(${secondsDeg}deg)`;

  const minutes = now.getMinutes();
  let minutesDeg = ((minutes / 60) * 360) + 90;
  minHandEl.style.transform = `rotate(${minutesDeg}deg)`;

  if (seconds === 0) {
    secondHandEl.style.transition = "unset";
    minHandEl.style.transition = "unset";
  } else {
    secondHandEl.style.transition = `all 0.05s`;
    minHandEl.style.transition = `all 0.05s`;
  }

  const hours = now.getHours();
  let hoursDeg = ((hours / 12) * 360) +90;
  hourHandEl.style.transform = `rotate(${hoursDeg}deg)`;

}

setInterval(setDate, 1000);
