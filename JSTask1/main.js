let startTime;
let elapsedTime = 0;
let timerInterval;

function start() {
  clearInterval(timerInterval);
  startTime = Date.now() - elapsedTime;

  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;

    const h = String(Math.floor(elapsedTime / 3600000)).padStart(2, '0');
    const m = String(Math.floor((elapsedTime % 3600000) / 60000)).padStart(2, '0');
    const s = String(Math.floor((elapsedTime % 60000) / 1000)).padStart(2, '0');
    const ms = String(Math.floor((elapsedTime % 1000) / 10)).padStart(2, '0');

    document.getElementById('time').textContent = `${h}:${m}:${s}.${ms}`;
  }, 10);
  console.log("タイマーがスタートしました");
}

function stop() {
  clearInterval(timerInterval);
  console.log("タイマーがストップしました");
}

function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  document.getElementById('time').textContent = "00:00:00.00";
  console.log("タイマーがリセットされました");
}

