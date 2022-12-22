//document.addEventListener('DOMContentLoaded', () => {

console.log('start');
/*   setTimeout(() => {console.log("this is the first message")}, 5000);
  setTimeout(() => {console.log("this is the second message")}, 3000);
  setTimeout(() => {console.log("this is the third message")}, 1000);
  // Output:
  // this is the third message
  // this is the second message
  // this is the first message
setTimeout(()=>{console.log('TIMEOUT 30000')},30000);
setTimeout(()=>{console.log('TIMEOUT 1000')},1000);
setTimeout(()=>{console.log('TIMEOUT 500')},500); */
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {console.log("this is the first message");
    resolve("foo");
  }, 8000);
});
myPromise
  .then((value) => `${value} and bar`)
  .then((value) => `${value} and bar again`)
  .then((value) => `${value} andd again`)
  .then((value) => `${value} andddd again`)
  .then((value) => {
  console.log("here:" + value);
  })
  .catch((err) => {
    console.error(err);
  });

console.log(myPromise)

console.log('end')
/* async function withoutAwait() {
  console.log('without await')
}  
async function withAwait() {
  await 0
  console.log('with await')
withoutAwait()
withAwait()
console.log('end') */
 // });
 
