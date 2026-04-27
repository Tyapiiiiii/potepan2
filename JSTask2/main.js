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

$('.btn').on('click', function() {
    const $display = $('#display');
    const input = $(this).text();
    const currentVal = $display.val();
    const lastChar = currentVal.slice(-1);
    const operators = ['+', '-', '*', '/'];

    // 1. 演算子の連続入力チェック
    if (operators.includes(lastChar) && operators.includes(input)) {
        // 演算子を打ち直したい場合は、最後の1文字を消して新しく追加
        $display.val(currentVal.slice(0, -1) + input);
        return;
    }

    // 2. 先頭の0チェック
    if (currentVal === '0' && input !== '.') {
        if (!operators.includes(input)) {
            $display.val(input);
            return;
        }
    }

    // 3. 小数点チェック（簡易版）
    if (input === '.' && lastChar === '.') return;

    // 問題なければ追加
    $display.val(currentVal + input);
});