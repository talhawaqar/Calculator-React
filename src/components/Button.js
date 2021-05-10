import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, width, backgroundColor } = props;
  const style = {
    width, height: '70px', backgroundColor, fontSize: '20px',
  };
  return (
    <button style={style} type="button">{name}</button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  width: PropTypes.string,
  backgroundColor: PropTypes.string,
};

Button.defaultProps = {
  name: '',
  width: '70px',
  backgroundColor: 'white',
};

export default Button;
