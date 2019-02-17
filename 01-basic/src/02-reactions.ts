import { autorun, reaction, observable, when } from "mobx";

// autorun
// reaction
// when

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

const alice = new User({ name: "Alice", age: 18 });

// autorun(() => {
//   console.log(`User ${alice.name} is ${alice.age} years old.`);
// });

// alice.age = 10;
// alice.name = "Bob";

// autorun(() => {
//   console.log(`User ID ${alice.id}`);
// });
// alice.id = 1333;

// const users: User[] = observable([]);
// reaction(
//   () => users.map(u => u.age),
//   ages => {
//     console.log(`Ages are ${ages.join(", ")}`);
//   }
// );

// users.push(alice);

// when(() => alice.active, () => console.log("Alice is active"));
// alice.active = true;
