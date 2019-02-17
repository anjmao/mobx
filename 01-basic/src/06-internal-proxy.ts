import {} from "mobx";

const reactions: (() => void)[] = [];

function autorun(cb: () => void) {
  cb();
  reactions.push(cb);
}

function observable<T extends object>(obj: T): T {
  return new Proxy(obj, {
    get(obj, prop) {
      return obj[prop];
    },
    set(obj, prop, value) {
      obj[prop] = value;
      reactions.forEach(r => r());
      return true;
    }
  });
}

// const user = observable({
//   name: "Oscar"
// });

// autorun(() => {
//   console.log(`User changed`, user);
// });

// user.name = "Bob";
// user.age = 13;
