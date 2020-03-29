import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Form,
  InputGroup,
  Input,
  InputGroupAddon,
  Button
} from "reactstrap";

function App() {
  const [value, setValue] = useState("");

  const [todos, setTodo] = useState([]);

  const addTodo = text => {
  
  const newTodo = [...todos, text];

  setTodo(newTodo);
  console.log(newTodo);
};

  const handleSubmit = e => {
    e.preventDefault();

    console.log(value);
    addTodo(value);
};
  return (
    <div className="App">
     <Container>
    <h1 className="mt-4">Todo リスト</h1>
    
    <Form>
      <InputGroup>
      <Input value={value} 
      onCharge={e => setValue(e.target.value)}
      />

      <InputGroupAddon addonType="append">
      <Button type="submit" color="primary">追加</Button>
     </InputGroupAddon>
     </InputGroup>
     </Form>
     </Container>
    </div>
  );
}
export default App;
