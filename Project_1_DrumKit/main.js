// implementation before
// const allKeys = document.querySelectorAll(".key");
// const allSounds = document.querySelectorAll("audio");

// window.addEventListener("keydown", function (event) {
//   allKeys.forEach((element) => {
//     if (event.keyCode === +element.getAttribute("data-key")) {
//       element.classList.add("playing");
//       setTimeout(() => {
//         element.classList.remove("playing");
//       }, 100);
//     }
//   });
//   allSounds.forEach((element) => {
//     if (event.keyCode === +element.getAttribute("data-key")) {
//       console.log("Playing");
//       console.log(element);
//       element.play();
//     }
//   });
// });

// Implementation after



function playSound (e) {
  const audioEl = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const keyEl = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audioEl) return; // stops the function form running all together
  audioEl.currentTime = 0; // rewind to the start
  audioEl.play();
  keyEl.classList.add("playing");
}

function removeTransition(e) {
  // console.log(e)
  if (e.propertyName !== "transform") return; // skip it if it's not a
  // transform
  this.classList.remove("playing")
}

const allKeys = document.querySelectorAll(".key");

// from its name, when the transition ends, it will call the removeTransition callback function
// there is also animationend event
allKeys.forEach((key) =>
  key.addEventListener("transitionend", removeTransition)
);

window.addEventListener("keydown", playSound);