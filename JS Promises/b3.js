debugger;
console.log('start')
async function withAwait() {//// no need for async here????
	await 0;
  console.log('with await')
  return Promise.resolve(100);
}
withAwait()//2nd way of returning promise
console.log('end')