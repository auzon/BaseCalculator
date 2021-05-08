import { Container, Jumbotron } from "react-bootstrap";
import BinaryInput from "./BinaryInput";
import DecimalInput from "./DecimalInput";
import HexInput from "./HexInput";
import { useState } from "react";

function App() {
  const [baseValue, setBaseValue] = useState();

  const updateBaseValue = (value) => {
    setBaseValue(value);
  };

  return (
    <Container className="mt-5">
      <Jumbotron>
        <h1>Base Calculator</h1>
        <DecimalInput baseValue={baseValue} updateBaseValue={updateBaseValue} />
        <BinaryInput baseValue={baseValue} updateBaseValue={updateBaseValue} />
        <HexInput baseValue={baseValue} updateBaseValue={updateBaseValue} />
      </Jumbotron>
    </Container>
  );
}

export default App;
