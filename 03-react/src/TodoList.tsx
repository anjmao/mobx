import React, { Component } from "react";
import { TodosStore, TodoModel } from "./TodosStore";
import { observer } from "mobx-react";

interface TodoProps {
  todo: TodoModel;
  onCheck: (todo: TodoModel, val: boolean) => void;
}
const Todo = observer((props: TodoProps) => {
  const todo = props.todo;
  const handleChange = () => props.onCheck(todo, !todo.finished);
  return (
    <div className="todo">
      <div>
        <h4 className="title">{todo.title}</h4>
        <div className="desc">{todo.description}</div>
      </div>
      <div>
        <input
          type="checkbox"
          checked={todo.finished}
          onChange={handleChange}
        />
      </div>
    </div>
  );
});

@observer
export class TodoList extends Component<{ todosStore: TodosStore }> {
  async componentDidMount() {
    await this.props.todosStore.loadTodos();
  }

  handleAddTodoClick = () => {
    this.props.todosStore.addTodo();
  };

  handleTodoCheck = (todo: TodoModel, checked: boolean) => {
    this.props.todosStore.finishTodo(todo, checked);
  };

  render() {
    const { todosStore } = this.props;
    return (
      <>
        <h3>Todo List</h3>
        <div className="bar">
          <button onClick={this.handleAddTodoClick}>Add Todo</button>
          <span>
            Total <b>{todosStore.totalCount}</b>
          </span>
          <span>
            Finished <b>{todosStore.finishedCount}</b>
          </span>
        </div>
        <hr />
        {todosStore.todos.map(t => (
          <Todo key={t.id} todo={t} onCheck={this.handleTodoCheck} />
        ))}
      </>
    );
  }
}
