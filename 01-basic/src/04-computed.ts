import {
  observable,
  action,
  configure,
  computed,
  autorun,
  runInAction
} from "mobx";

// computed

configure({
  enforceActions: "observed"
});

class User {
  @observable name: string;
  @observable age: number;
  @observable active?: boolean;

  constructor(u: { name: string; age: number; active?: boolean }) {
    this.name = u.name;
    this.age = u.age;
    this.active = u.active;
  }
}

export class UsersStore {
  @observable users: User[] = [];

  constructor() {
    autorun(() => {
      console.log("Active users", this.activeUsers);
      console.log("Active users under 18", this.activeUsersUnder18);
      console.log("--");
    });
  }

  @action addUser(u: User) {
    this.users.push(u);
  }

  @computed get activeUsers(): User[] {
    return this.users.filter(u => u.active);
  }

  @computed get activeUsersUnder18(): User[] {
    return this.activeUsers.filter(u => u.age < 18);
  }
}

// const usersStore = new UsersStore();
// const alice = new User({ name: "Alice", age: 17 });
// usersStore.addUser(alice);

// const bob = new User({ name: "Bob", age: 16, active: true });
// usersStore.addUser(bob);
// bob.active = false;
