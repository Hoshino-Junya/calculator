const display = document.getElementById('display');

// 数字を追加
function appendNumber(number) {
  display.value += number;
}

// 演算子を追加
function appendOperator(operator) {
  // 最後が演算子の場合、上書きしないようにする
  const lastChar = display.value.slice(-1);
  if (['+', '-', '*', '/'].includes(lastChar)) {
    return;
  }
  display.value += operator;
}

// 計算を実行
function calculate() {
  try {
    // eval関数を使用して計算
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'エラー';
  }
}

// 表示をクリア
function clearDisplay() {
  display.value = '';
}
