import { spy, observable, intercept, runInAction } from "mobx";

// spy
// intercept

const alice = observable({
  name: "Alice",
  active: true,
  age: 33
});

// spy(e => {
//   console.log(e);
// });

// alice.active = false;
// runInAction('Update alice', () => alice.active = true);

// intercept(alice, "age", (change) => {
//     change.newValue = change.newValue + 5;
//     return change
// })

// alice.age = 30
// console.log(alice.age);