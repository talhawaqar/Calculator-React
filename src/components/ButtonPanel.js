import Button from './Button';

const ButtonPanel = () => (
  <div>
    <div>
      <Button name="AC" backgroundColor="#FFA500" />
      <Button name="+/-" backgroundColor="#FFA500" />
      <Button name="%" backgroundColor="#FFA500" />
      <Button name="÷" backgroundColor="#FFA500" />
    </div>
    <div>
      <Button name="7" />
      <Button name="8" />
      <Button name="9" />
      <Button name="X" backgroundColor="#FFA500" />
    </div>
    <div>
      <Button name="4" />
      <Button name="5" />
      <Button name="6" />
      <Button name="-" backgroundColor="#FFA500" />
    </div>
    <div>
      <Button name="1" />
      <Button name="2" />
      <Button name="3" />
      <Button name="+" backgroundColor="#FFA500" />
    </div>
    <div>
      <Button name="0" />
      <Button name="." />
      <Button name="=" width="140px" backgroundColor="#FFA500" />
    </div>
  </div>
);
export default ButtonPanel;
