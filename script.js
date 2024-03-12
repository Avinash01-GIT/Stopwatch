window.onload = function () {
  let minutes = 0;
  let seconds = 0;
  let tens = `00`;

  let appendMinutes = document.querySelector("#minutes");
  let appendSeconds = document.querySelector("#seconds");
  let appendTens = document.querySelector("#tens");

  let startBtn = document.querySelector("#start");
  let stopBtn = document.querySelector("#stop");
  let resetBtn = document.querySelector("#reset");

  let Interval;

  const startTimer = () => {
    tens++;
    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
      appendTens.innerHTML = tens;
    }
    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
    if (seconds > 59) {
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
    }
  };

  startBtn.onclick = () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  stopBtn.onclick = () => {
    clearInterval(Interval);
  };

  resetBtn.onclick = () => {
    clearInterval(Interval);
    tens = 0;
    seconds = 0;
    minutes = 0;
    appendTens.innerHTML = "00";
    appendSeconds.innerHTML = "00";
    appendMinutes.innerHTML = "00";
  };

  startBtn.onclick = () => {
    clearInterval(Interval);

    setTimeout(() => {
      const stopwatchAudio = document.getElementById("stopwatchAudio");
      stopwatchAudio.loop = true; // Set audio to loop
      stopwatchAudio.play();
    }, 1000); // Adjust delay in milliseconds (1000 milliseconds = 1 second)

    Interval = setInterval(startTimer, 10);
  };

  const muteButton = document.getElementById("muteButton");

  muteButton.onclick = () => {
    const stopwatchAudio = document.getElementById("stopwatchAudio");
    if (stopwatchAudio.muted) {
      stopwatchAudio.muted = false; // Unmute audio
      muteButton.textContent = "Mute Audio";
    } else {
      stopwatchAudio.muted = true; // Mute audio
      muteButton.textContent = "Unmute Audio";
    }
  };
};
