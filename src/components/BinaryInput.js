import { Form } from "react-bootstrap";

const BinaryInput = ({baseValue, updateBaseValue}) => {
  const changeHandler = (e) => {
    const givenInput = e.target.value;
    const calculatedDecimal = parseInt(givenInput, 2);
    updateBaseValue(calculatedDecimal);
  }
  
  const calculateBinary = (decimal) => {
    const stringBinary = decimal ? decimal.toString(2) : "";
    return stringBinary;
  }

  return (
    <Form.Group>
      <Form.Label>Binary</Form.Label>
      <Form.Control type="number" placeholder="Enter binary number" value={calculateBinary(baseValue)} onInput={(e) => changeHandler(e)}/>
    </Form.Group>
  );
};

export default BinaryInput;
