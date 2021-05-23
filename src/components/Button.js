import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    name, width, backgroundColor, handleClick,
  } = props;
  const style = {
    width, height: '70px', backgroundColor, fontSize: '20px',
  };
  return (
    <button style={style} onClick={() => handleClick(name)} type="button">{name}</button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  width: PropTypes.string,
  backgroundColor: PropTypes.string,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  name: '',
  width: '70px',
  backgroundColor: 'white',
  handleClick: null,
};

export default Button;
