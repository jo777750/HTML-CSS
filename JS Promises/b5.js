document.addEventListener('DOMContentLoaded', () => {
debugger;
console.log('start')
async function withAwait() {
  await 0;
  console.log('with await')
  return 55;//4th way of returning promise
}
withAwait()
console.log('end')

});