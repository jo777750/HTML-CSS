const promise1 = new Promise((resolve, reject) => {
  resolve('Success!');
  reject('fail')
});

promise1.then(alert)
  // expected output: "Success!"


