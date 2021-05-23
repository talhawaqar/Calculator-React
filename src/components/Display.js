import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { result } = props;

  return (
    <div style={{
      width: '280px', boxSizing: 'border-box', fontSize: '70px', border: 'solid 1px black', display: 'flex', justifyContent: 'flex-end', padding: '0 5px',
    }}
    >
      <span>
        {result}
      </span>
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
