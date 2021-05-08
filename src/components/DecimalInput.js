import { Form } from "react-bootstrap";

const DecimalInput = ({ updateBaseValue, baseValue }) => {
  const changeHandler = (e) => {
    const givenInput = e.target.valueAsNumber;
    updateBaseValue(givenInput);
  };

  const toStr = () => {
    const strBaseValue = baseValue ? baseValue.toString(10) : "";
    return strBaseValue;
  };

  return (
    <Form.Group>
      <Form.Label>Decimal</Form.Label>
      <Form.Control
        type="number"
        placeholder="Enter decimal number"
        value={toStr()}
        onInput={(e) => changeHandler(e)}
      />
    </Form.Group>
  );
};

export default DecimalInput;
