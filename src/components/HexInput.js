import { Form } from "react-bootstrap";

const HexInput = ({ baseValue, updateBaseValue }) => {
  const changeHandler = (e) => {
    const givenInput = e.target.value;
    const calculatedDecimal = parseInt(givenInput, 16);
    updateBaseValue(calculatedDecimal);
  };

  const calculateHex = (decimal) => {
    const stringHex = decimal ? decimal.toString(16) : "";
    return stringHex;
  };

  return (
    <Form.Group>
      <Form.Label>Hexadecimal</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter hexadecimal number"
        value={calculateHex(baseValue)}
        onInput={(e) => changeHandler(e)}
      />
    </Form.Group>
  );
};

export default HexInput;
