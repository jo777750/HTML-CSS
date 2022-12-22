/* 
debugger;
function foo() {
  return Promise.resolve(1);
}
foo()
let promise = new Promise(function(resolve, reject) {
  // the function is executed automatically when the promise is constructed
 x();
});
console.log('start')
async function x(){
  await 4;//
  console.log('after async')
}
console.log('end')
 

var arr = [2, 4, 8, 6, 0];
var max = Math.max(...arr);
let foo = {a:1}; for (let key of foo) { console.log(key); }
console.log(max);
*/
let a=0;
for(a=0;a<5;a++);
console.log(a)
document.querySelector('#myelement').innerHTML=a