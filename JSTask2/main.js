$(function() {
    const $display = $('#display');
    const operators = ['+', '-', '*', '/'];

    $('.btn').on('click', function() {
        const input = $(this).text();      // ボタンの文字を取得
        const currentVal = $display.val(); // 現在の表示を取得
        const lastChar = currentVal.slice(-1); // 最後の1文字
        const btnId = $(this).attr('id');  // ボタンのIDを取得

        // --- 1. ACボタン（クリア）の処理 ---
        if (btnId === 'clear') {
            $display.val('');
            return;
        }

        // --- 2. ＝ボタン（計算）の処理 ---
        if (btnId === 'equal') {
            if (currentVal === '' || operators.includes(lastChar)) return;
            try {
                // 計算結果を出し、その後も数字を繋げられるように文字列に戻す
                const result = eval(currentVal);
                $display.val(String(result));
            } catch (e) {
                $display.val('Error');
            }
            return;
        }

        // --- 3. 入力制限（ガード） ---

        // 演算子の連続入力を防ぐ（例：++ を防ぎ、後の記号に書き換える）
        if (operators.includes(lastChar) && operators.includes(input)) {
            $display.val(currentVal.slice(0, -1) + input);
            return;
        }

        // 先頭の「0」や「00」を制御する
        if (currentVal === '0' || currentVal === '') {
            if (input === '0' || input === '00') {
                $display.val('0'); // 0の次は0を入力させず「0」を維持
                return;
            }
            if (!operators.includes(input) && input !== '.') {
                $display.val(input); // 「01」にならないよう新しい数字で上書き
                return;
            }
        }

        // 小数点の連続・重複を防ぐ
        if (input === '.') {
            // 直前がドットなら無視
            if (lastChar === '.') return;
            // 現在入力中の塊（最後の演算子より後ろ）にドットが含まれていたら無視
            const tempArray = currentVal.split(/[\+\-\*\/]/);
            const lastNumberChunk = tempArray[tempArray.length - 1];
            if (lastNumberChunk.includes('.')) return;
            // 何も入力されていない時にドットを押したら「0.」にする
            if (currentVal === '') {
                $display.val('0.');
                return;
            }
        }

        // --- 4. 画面への追加 ---
        $display.val($display.val() + input);
    });
});