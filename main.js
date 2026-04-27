const result = document.getElementById('display');

function append(value) {
  result.value += value;
}

function clearScreen() {
  result.value = '';
}

function calculate() {
  try {
    result.value = eval(result.value); // 文字列を計算式として実行
  } catch {
    result.value = 'Error';
  }
}