import calculate from '../calculate';

const myData = {
  total: null,
  next: null,
  operation: null,
};

test('It should not mutate the object provided as an argument', () => {
  const newData = calculate('', myData);
  expect(newData === myData).toBeFalsy();
  expect(newData !== myData).toBeTruthy();
});

test('It should mutate the object.next provided as an integer in first argument', () => {
  const newData = calculate('3', myData);
  expect(newData.next === '3').toBeTruthy();
  expect(newData.next !== '3').toBeFalsy();
  expect(newData.next).toBe('3');
});

test('It should mutate the object.result object.operation provided as an operator in first argument', () => {
  myData.next = '3';
  const newData = calculate('+', myData);
  expect(newData.total === '3').toBeTruthy();
  expect(newData.total !== '3').toBeFalsy();
  expect(newData.total).toBe('3');

  expect(newData.operation !== '+').toBeFalsy();
  expect(newData.operation === '+').toBeTruthy();
  expect(newData.operation).toBe('+');
  expect(newData.next).toBe(null);
});

test('it should mutate the object.next provided as a number in argument', () => {
  myData.total = '3';
  myData.next = null;
  const newData = calculate('3', myData);
  expect(newData.next).toBe('3');
  expect(newData.next === '3').toBeTruthy();
  expect(newData.next !== '3').toBeFalsy();
});

test('it should mutate the total with sum of tatal and next', () => {
  myData.total = '3';
  myData.next = '3';
  myData.operation = '+';
  const newData = calculate('=', myData);
  expect(newData.total).toBe('6');
  expect(newData.total === '6').toBeTruthy();
  expect(newData.total !== '6').toBeFalsy();

  expect(newData.next !== null).toBeFalsy();
  expect(newData.next === null).toBeTruthy();
  expect(newData.next).toBe(null);

  expect(newData.operation !== null).toBeFalsy();
  expect(newData.operation === null).toBeTruthy();
  expect(newData.operation).toBe(null);
});

test('AC in first argument mutate the object in a way that all keys have null values', () => {
  myData.next = '4';
  myData.total = '6';
  myData.operation = '-';

  const newData = calculate('AC', myData);

  expect(newData.total).toBe(null);
  expect(newData.total === null).toBeTruthy();
  expect(newData.total !== null).toBeFalsy();

  expect(newData.next !== null).toBeFalsy();
  expect(newData.next === null).toBeTruthy();
  expect(newData.next).toBe(null);

  expect(newData.operation !== null).toBeFalsy();
  expect(newData.operation === null).toBeTruthy();
  expect(newData.operation).toBe(null);
});

test('tests the +/- operator on object it should mutate object.next or object.total and multiply it with -1', () => {
  myData.next = '3';
  myData.operation = null;
  myData.total = null;

  const newData = calculate('+/-', myData);
  expect(newData.next !== '-3').toBeFalsy();
  expect(newData.next === '-3').toBeTruthy();
  expect(newData.next).toBe('-3');
});

test('tests the % operator on object it shuild mutate the object.next and divide it by 100', () => {
  myData.next = '5';
  myData.operation = null;
  myData.total = null;

  const newData = calculate('%', myData);
  expect(newData.next !== '0.05').toBeFalsy();
  expect(newData.next === '0.05').toBeTruthy();
  expect(newData.next).toBe('0.05');
});
