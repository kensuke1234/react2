import React, { useState } from 'react';
import { Table } from 'reactstrap';
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
  
  const [todos, SetTodo] = useState([]);
  
  const addTodo = text => {

    const newTodo = [...todos, text];

    SetTodo(newTodo);
    console.log(newTodo);
  
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log(value);
    addTodo(value); //ここでaddTodoを実行するとValueにTextが入り、todosの配列の中にどんどん追加。
  };

  const removeTodo = index => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    SetTodo(newTodo);
  };

  return (
    <div className="App">
     <Container>
    <h1 className="mt-4">人生でやり遂げたいリスト100</h1>
    
    <Form onSubmit={handleSubmit}> 
      <InputGroup>
      <Input 
      value={value} 
      onChange = {e => setValue(e.target.value)}
      />

      <InputGroupAddon addonType="append">
      <Button type="submit" color="primary">目標を決める</Button>
     </InputGroupAddon>
     </InputGroup>
     </Form>
     </Container>

    {/* リスト表示のロジック */}
    <Container>
      <Table>
        <tbody>
          {/* 論理演算子をつかつてTodosがある時のみに処理を実行}*/}
          {/*mapは新しく処理したのちに新しい配列を返してくれる */}
          {todos &&
           todos.map((todo, index) => (
          <tr>
            <tr key={index}>
            <th>{todo}</th>
            <td>
               <Button color="danger" onClick={() => removeTodo(index)}>
              達成
              </Button>
      </td>
      </tr>
          </tr>
           ))}
        </tbody>
       </Table>
    </Container>      

    </div>
  );
}
export default App;
