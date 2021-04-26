import React from "react";
import PropTypes from 'prop-types';

export default class Display extends React.Component {
  
  render(){
    return(
      <div>
        <span>{this.props.result}</span>
      </div>
    );
  }
}

Display.propTypes = {
  result: PropTypes.string
};

Display.defaultProps = {
  result: '0'
};
