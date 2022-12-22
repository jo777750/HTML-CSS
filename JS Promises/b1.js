document.addEventListener('DOMContentLoaded', () => {
	debugger;
console.log('start')

async function withAwait() {
	await 0;
    console.log('with await')
    const res1=await new Promise(resolve => 15)
  
}
withAwait()
console.log('end')

});