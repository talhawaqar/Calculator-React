import PropTypes from 'prop-types';

const Button = (props)=>{
  cont {name} = props
  return(
    <button>{name}</button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
