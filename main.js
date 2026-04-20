let startTime;
let elapsedTime = 0;
let timerInterval;


  // スタートボタンを押したとき
  function start() {
    // 現在の時刻から、これまでの経過時間を引いたものを「開始時間」にする
    // （こうすることで、一時停止後の再開もうまくいきます）
    startTime = Date.now() - elapsedTime;

    let timerInterval = setInterval(() => {
      // 1. 今の経過時間を出す
      elapsedTime = Date.now() - startTime;

      // 2. 計算して整形
      const h = String(Math.floor(elapsedTime / 3600000)).padStart(2, '0');
      const m = String(Math.floor((elapsedTime % 3600000) / 60000)).padStart(2, '0');
      const s = String(Math.floor((elapsedTime % 60000) / 1000)).padStart(2, '0');
      const ms = String(Math.floor((elapsedTime % 1000) / 10)).padStart(2, '0');

      // 3. 表示を更新
      $('#time').text(`${h}:${m}:${s}.${ms}`);
    }, 10);
  };

  // ストップボタンを押したとき
  $('#stop').click(function() {
    clearInterval(timerInterval); // タイマーを止める
  });

  // リセットボタンを押したとき
  $('#reset').click(function() {
    clearInterval(timerInterval); // タイマーを止める
    elapsedTime = 0;              // データを空にする
    $('#time').text("00:00:00:00");   // 表示を戻す
  });
;

