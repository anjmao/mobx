import {} from "mobx";

interface User {
  name: string;
  age?: number;
}

const reactions: (() => void)[] = [];

function autorun(cb: () => void) {
  cb();
  reactions.push(cb);
}

function observable(obj: User): User {
  let name = obj.name;
  Object.defineProperty(obj, "name", {
    get() {
      return name;
    },
    set(val) {
      name = val;
      reactions.forEach(r => r());
    }
  });
  return obj;
}

// const user = observable({
//   name: "Oscar"
// });

// autorun(() => {
//   console.log(`User name is ${user.name}.`);
// });

// user.name = "Bob";
// user.age = 18;
