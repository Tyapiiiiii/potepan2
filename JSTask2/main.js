function append(value) {
    const result = document.getElementById('display');
  result.value += value;
}

function clearScreen() {
  const result = document.getElementById('display');
  result.value = '';
}

function calculate() {
    const result = document.getElementById('display');
try {
    result.value = eval(result.value); // 文字列を計算式として実行
  } catch {
    document.getElementById('display').value = 'Error';
  }
}