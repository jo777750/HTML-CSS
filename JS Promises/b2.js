document.addEventListener('DOMContentLoaded', () => {
	debugger;
console.log('start')


async function withAwait() {
	await 0;
  console.log('with await')

  return new Promise(resolve => 5);  /* 1st way of returning promise */

}
withAwait()
console.log('end')

});