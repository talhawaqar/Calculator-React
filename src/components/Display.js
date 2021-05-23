import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { result } = props;

  return (
    <input
      type="text"
      value={result}
      style={{
        boxSizing: 'border-box', width: '280px', backgroundColor: 'white', fontSize: '40px', textAlign: 'right', padding: '3px 0',
      }}
      readOnly
    />
  );
};

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
