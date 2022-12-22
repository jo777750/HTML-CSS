document.addEventListener('DOMContentLoaded', () => {
//	debugger;
console.log('start')
const p = new Promise((res, rej) => {res(1);});
console.log('p'+ p)

async function withAwait() {
  await 0;
  console.log('with await')
  return p;//3rd way of returning promise
}
withAwait()
console.log('end')

});