console.log('start')
async function withAwait() {
	await 0;
  console.log('with await')
  return Promise.resolve(15);//same as return 15,promise is 15

}
withAwait().then(alert) //use promise returned by withAwait and put in alert
withAwait().catch((err) => { //to check for errors use promise returned by withAwait  
    console.error(err);
  });
console.log('end')