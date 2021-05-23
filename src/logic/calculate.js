import operate from './operate';

const calculate = (buttonName, stateData = { total: null, next: null, operation: null }) => {
  const tempData = { ...stateData };
  if (buttonName.match(/\d/)) {
    if (tempData.next == null || (tempData.next[0] === '0' && tempData.next.length === 1)) {
      tempData.next = buttonName;
    } else {
      tempData.next += buttonName;
    }
  } else if (buttonName === 'AC') {
    tempData.total = null;
    tempData.next = null;
    tempData.operation = null;
  } else if (tempData.next !== null) {
    switch (buttonName) {
      case '+/-':
        tempData.next = operate(tempData.next, -1, 'X');
        break;
      case '%':
        tempData.next = operate(tempData.next, -1, '÷');
        break;
      case '.':
        if (tempData.next.indexOf('.') < 0) {
          tempData.next += buttonName;
        }
        break;
      case '=':
        if (tempData.total !== null) {
          tempData.total = operate(tempData.total, tempData.next, tempData.operation).toString();
          tempData.next = null;
          tempData.operation = null;
        }
        break;
      default:
        if (tempData.total === null) {
          tempData.total = tempData.next;
          tempData.next = null;
          tempData.operation = buttonName;
        } else {
          tempData.total = operate(tempData.total, tempData.next, tempData.operation).toString();
          tempData.next = null;
          tempData.operation = buttonName;
        }
        break;
    }
  } else if (tempData.total !== null) {
    if (tempData.operation === null) {
      switch (buttonName) {
        case '%':
          tempData.total = operate(tempData.total, '100', '÷').toString();
          break;
        case '+/-':
          tempData.total = operate(tempData.total, '-1', 'X').toString();
          break;
        case '=':
          break;
        case '.':
          tempData.total = null;
          tempData.next = '0.';
          break;
        default:
          tempData.operation = buttonName;
      }
    }
  }
  return tempData;
};

export default calculate;
