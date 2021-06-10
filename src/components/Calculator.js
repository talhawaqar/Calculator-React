import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calcData, setCalcData] = useState({ total: null, next: null, operation: null });

  const handleClick = (buttonName) => {
    const btnName = buttonName;
    let tempData = calcData;
    tempData = calculate(btnName, tempData);
    setCalcData(tempData);
  };

  const displayResult = () => {
    let result = '';
    let { total, next, operation } = calcData;
    if ((total === null) && (next === null)) {
      result = '0';
    } else {
      total = total === null ? '' : total;
      next = next === null ? '' : next;
      operation = operation === null ? '' : operation;

      result = `${total} ${operation} ${next}`;
    }

    return result;
  };

  return (
    <>
      <Display result={displayResult()} />
      <ButtonPanel handleClick={handleClick} />
    </>
  );
};

export default Calculator;
