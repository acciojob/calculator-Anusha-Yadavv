//your code here
function appendNumber(number) {
      document.getElementById('input').value += number;
    }

    function appendOperator(operator) {
      document.getElementById('input').value += operator;
    }

    function appendDot() {
      const input = document.getElementById('input').value;
      if (!input.includes('.')) {
        document.getElementById('input').value += '.';
      }
    }

    function calculate() {
      try {
        const result = eval(document.getElementById('input').value);
        document.getElementById('input').value = result;
      } catch (error) {
        document.getElementById('input').value = 'Error';
      }
    }

    function clearInput() {
      document.getElementById('input').value = '';
    }