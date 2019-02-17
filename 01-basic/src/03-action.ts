import { autorun, observable, action, configure, reaction, toJS } from "mobx";

// action

class User {
  id: number;
  @observable name: string;
  @observable age: number;
  @observable active: boolean;

  constructor(u: { name: string; age: number }) {
    this.id = Math.random();
    this.name = u.name;
    this.age = u.age;
  }
}

export class UsersStore {
  @observable users: User[] = [];

  constructor() {
    autorun(() => {
      console.log("Total users", this.users.length);
    });
  }

  @action addUser(u: User) {
    this.users.push(u);
  }

  @action setActive(u: User, active: boolean) {
    u.active = active;
  }
}

// const usersStore = new UsersStore();

// const alice = new User({ name: "Alice", age: 18 });
// usersStore.addUser(alice);
// usersStore.setActive(alice, true);

// const bob = new User({ name: "Bob", age: 26 });
// usersStore.addUser(bob);

// configure({
//   enforceActions: "observed"
// });
