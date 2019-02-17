import { observable, decorate } from "mobx";

// observable

const alice = observable({
  name: "Alice"
});

// console.log(alice);

// const box = observable.box(7);
// console.log(box);

// const map = observable.map({ key: "value" });
// map.set("key", "new value");
// console.log(map);

// class User {
//   id: number;
//   @observable name: string;
//   @observable age: number;

//   constructor(u: { name: string; age: number }) {
//     this.id = Math.random();
//     this.name = u.name;
//     this.age = u.age;
//   }
// }

// decorate(User, {
//   name: observable,
//   age: observable
// });
