interface APITodo {
  id: string;
  title: string;
  description: string;
}

export class TodosService {
  fetchTodos(): Promise<APITodo[]> {
    return Promise.resolve([
      { id: "t1", title: "Buy milk", description: "One bottle" },
      { id: "t2", title: "Feed cat", description: "Use milk" }
    ]);
  }
}
