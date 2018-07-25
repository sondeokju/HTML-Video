const video = document.querySelector(".js-video"),
  muteBtn = document.querySelector(".js-muteBtn"),
  playBtn = document.querySelector(".js-playBtn"),
  range = document.querySelector(".js-range");

video.autoplay = true;
video.loop = true;

const loadMutedPreference = () => {
  const mutedPref = localStorage.getItem("muted");
  if (mutedPref !== null) {
    if (mutedPref === "true") {
      video.muted = true;
      muteBtn.innerHTML = "Unmute";
    } else {
      video.muted = false;
      muteBtn.innerHTML = "Mute";
    }
  } else {
    video.muted = false;
    muteBtn.innerHTML = "Mute";
  }
};

const handleMuteBtnClick = () => {
  if (video.muted) {
    // Unmuting
    video.muted = false;
    muteBtn.innerHTML = "Mute";
    localStorage.setItem("muted", false);
  } else {
    // Muting
    range.value = 0;
    video.muted = true;
    muteBtn.innerHTML = "Unmute";
    localStorage.setItem("muted", true);
  }
};

const handlePlayBtnClick = () => {
  if (video.paused) {
    playBtn.innerHTML = "▶️";
    video.play();
  } else {
    playBtn.innerHTML = "⏸";
    video.pause();
  }
};

const handleRageChange = event => {
  const currentVolume = event.target.value;
  video.volume = currentVolume;
};

muteBtn.addEventListener("click", handleMuteBtnClick);
playBtn.addEventListener("click", handlePlayBtnClick);
range.addEventListener("change", handleRageChange);
loadMutedPreference();

/*
const handleContentLoaded = () => {
  muteBtn.addEventListener("click", handleMuteBtnClick);
  window.addEventListener("scroll", handleScroll);
}
*/

// document.addEventListener("DOMContentLoaded", handleContentLoaded);
