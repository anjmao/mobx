export function slow() {
    for (let index = 0; index < 50000; index++) {
        try {
          throw new Error();
        } catch {}
      }
}