import operate from '../operate';

test('It should return the sum of 2 and 3', () => {
  const result = operate(2, 3, '+');
  expect(result).toBe('5');
  expect(result === '5').toBeTruthy();
  expect(result !== '5').toBeFalsy();
});

test('It should return the difference of 7 and 5', () => {
  const result = operate(7, 5, '-');
  expect(result).toBe('2');
  expect(result === '2').toBeTruthy();
  expect(result !== '2').toBeFalsy();
});

test('It should return the multiplication of 7 and 5', () => {
  const result = operate(7, 5, 'X');
  expect(result).toBe('35');
  expect(result === '35').toBeTruthy();
  expect(result !== '35').toBeFalsy();
});

test('It should return the division of 8 by 2', () => {
  const result = operate(8, 2, '÷');
  expect(result).toBe('4');
  expect(result === '4').toBeTruthy();
  expect(result !== '4').toBeFalsy();
});
