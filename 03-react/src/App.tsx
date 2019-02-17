import React, { Component } from "react";
import { TodosStore } from "./TodosStore";
import { TodoList } from "./TodoList";
import { TodosService } from "./TodosService";

const todosService = new TodosService();
const todosStore = new TodosStore(todosService);

class App extends Component {
  render() {
    return (
      <>
        <TodoList todosStore={todosStore} />
      </>
    );
  }
}

export default App;
