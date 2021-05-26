import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

const App = () => {
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

export default App;

// old class component

// import React from 'react';
// import ButtonPanel from './ButtonPanel';
// import Display from './Display';
// import calculate from '../logic/calculate';

// class App extends React.Component {
//   constructor() {
//     super();
//     this.btnName = '';
//     this.state = { total: null, next: null, operation: null };
//   }

//   handleClick = (buttonName) => {
//     this.btnName = buttonName;
//     let tempData = this.state;
//     tempData = calculate(this.btnName, tempData);
//     this.setState(tempData);
//   }

//   displayResult = () => {
//     let result = '';
//     let { total, next, operation } = this.state;
//     if ((total === null) && (next === null)) {
//       result = '0';
//     } else {
//       total = total === null ? '' : total;
//       next = next === null ? '' : next;
//       operation = operation === null ? '' : operation;

//       result = `${total} ${operation} ${next}`;
//     }

//     return result;
//   };

//   render() {
//     return (
//       <>
//         <Display result={this.displayResult()} />
//         <ButtonPanel handleClick={this.handleClick} />
//       </>
//     );
//   }
// }
// export default App;
