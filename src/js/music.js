let audiElem = document.getElementById("audio");
let playButton = document.getElementById("playbutton");

playButton.addEventListener("click", handlePlayButton, false);
playAudio();

async function playAudio() {
  try {
    await audioElem.play();
    playButton.className = "playing";
  } catch(err) {
    playButton.className = "";
  }
}

function handlePlayButton() {
	if (audioElem.paused) {
  	playAudio();
  } else {
  	audioElem.pause();
    playButton.className = "";
  }
}
