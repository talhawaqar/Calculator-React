import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = null;
  const number1 = new Big(numberOne);
  const number2 = new Big(numberTwo);

  const operations = {
    '+': (number1, number2) => number1.plus(number2),
    '-': (number1, number2) => number1.minus(number2),
    X: (number1, number2) => number1.times(number2),
    '÷': (number1, number2) => number1.div(number2),
  };
  result = operations[operation](number1, number2);
  return result;
};

export default operate;
