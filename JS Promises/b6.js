async function foo() {
  const result1 = await new Promise((resolve) => //6th way of creating and resolving a promise
    setTimeout(() => resolve("1"))
  );