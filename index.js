const progress = document.getElementById("progress");
const audio = document.getElementById("audio");
const ctrlIcon = document.getElementById("ctrlIcon");

audio.onloadedmetadata = function () {
  progress.max = audio.duration;
  progress.value = audio.currentTime;
};

function playPause() {
  if (ctrlIcon.classList.contains("fa-pause")) {
    audio.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    audio.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
}

if (audio.play()) {
  setInterval(() => {
    progress.value = audio.currentTime;
  }, 500);
}

progress.onchange = function () {
  audio.play();
  audio.currentTime = progress.value;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
};
