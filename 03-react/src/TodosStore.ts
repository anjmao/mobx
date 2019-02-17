import { TodosService } from "./TodosService";
import { observable, action, runInAction, computed } from "mobx";

export class TodoModel {
  id: string;
  @observable title: string;
  @observable description: string;
  @observable finished = false;

  constructor(t: { id: string; title: string; describe: string }) {
    this.id = t.id;
    this.title = t.title;
    this.description = t.describe;
  }
}

export class TodosStore {
  @observable todos: TodoModel[] = [];
  @observable err?: string;

  constructor(private todosService: TodosService) {}

  @computed get totalCount(): number {
    return this.todos.length;
  }

  @computed get finishedCount(): number {
    return this.todos.reduce((c, n) => c + (n.finished ? 1 : 0), 0);
  }

  @computed get unfinishedTodos(): TodoModel[] {
    return this.todos.filter(x => !x.finished);
  }

  @action async loadTodos() {
    try {
      const apiTodos = await this.todosService.fetchTodos();
      runInAction(() => {
        this.todos = apiTodos.map(
          t =>
            new TodoModel({
              id: t.id,
              title: t.title,
              describe: t.description
            })
        );
      });
    } catch {
      runInAction(() => (this.err = "Failed to load todos."));
    }
  }

  @action addTodo() {
    const newTodo = new TodoModel({
      id: `${Math.random()}`,
      title: "New todo",
      describe: "New todo"
    });

    this.todos.push(newTodo);
  }

  @action finishTodo(todo: TodoModel, val: boolean) {
    todo.finished = val;
  }
}
