import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = (props) => {
  const { handleClick } = props;
  return (
    <div>
      <div>
        <Button name="AC" handleClick={handleClick} backgroundColor="#FFA500" />
        <Button name="+/-" handleClick={handleClick} backgroundColor="#FFA500" />
        <Button name="%" handleClick={handleClick} backgroundColor="#FFA500" />
        <Button name="÷" handleClick={handleClick} backgroundColor="#FFA500" />
      </div>
      <div>
        <Button name="7" handleClick={handleClick} />
        <Button name="8" handleClick={handleClick} />
        <Button name="9" handleClick={handleClick} />
        <Button name="X" backgroundColor="#FFA500" handleClick={handleClick} />
      </div>
      <div>
        <Button name="4" handleClick={handleClick} />
        <Button name="5" handleClick={handleClick} />
        <Button name="6" handleClick={handleClick} />
        <Button name="-" backgroundColor="#FFA500" handleClick={handleClick} />
      </div>
      <div>
        <Button name="1" handleClick={handleClick} />
        <Button name="2" handleClick={handleClick} />
        <Button name="3" handleClick={handleClick} />
        <Button name="+" backgroundColor="#FFA500" handleClick={handleClick} />
      </div>
      <div>
        <Button name="0" handleClick={handleClick} />
        <Button name="." handleClick={handleClick} />
        <Button name="=" width="140px" backgroundColor="#FFA500" handleClick={handleClick} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  handleClick: PropTypes.func,
};

ButtonPanel.defaultProps = {
  handleClick: null,
};

export default ButtonPanel;
