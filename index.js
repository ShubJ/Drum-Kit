// JavaScript Drum Kit App

const crashRide = document.getElementById("crash-ride");
const hiHatTop = document.getElementById("hihat-top");

const removeCrashRideTransition = (e) => {
  if (e.propertyName !== "transform") return;

  e.target.style.transform = "rotate(-7deg)";
};

const removeHiHatTopTransition = (e) => {
  if (e.propertyName !== "top") return;

  e.target.style.top = "231px";
};

crashRide.addEventListener("transitionend", removeCrashRideTransition);
hiHatTop.addEventListener("transitionend", removeHiHatTopTransition);

const animateCrashOrRide = () => {
  crashRide.style.transform = "rotate(0deg) scale(1.1)";
};

const animateHiHatClosed = () => {
  hiHatTop.style.top = "235px";
};

const playSound = (e) => {
  const keyCode = e.keyCode,
    keyElement = document.querySelector(`div[data-key="${keyCode}"]`);

  if (!keyElement) return;

  const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
  audioElement.currentTime = 0;
  audioElement.play();

  switch (keyCode) {
    case 69:
    case 82:
      animateCrashOrRide();
      break;
    case 75:
      animateHiHatClosed();
      break;
  }
};

window.addEventListener("keydown", playSound);
