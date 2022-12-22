
// Code to Start 5 "jobs" in parallel and wait for both of them to complete

console.log("==PARALLEL with await Promise.all==");
        parallel();
    // Definition of parallel function to Start 5 "jobs" in parallel and wait for both of them to complete 
        async function parallel() {
        await Promise.all([
        (async () => await a()),
        (async () => await b()),
        (async () => await c()),
        (async () => await d()),
        (async () => await e()),
        ]);
        }
		.catch((err) => {
    console.error(err);
  });
function a()
{
console.log("In function a ");
return Promise.resolve(1);
}
function b(){
console.log("In function b ");
return Promise.resolve(2);
}
function c(){
console.log("In function c ");
return Promise.resolve(3);
}
function d(){
console.log("In function d ");
return Promise.resolve(4);
}
function e(){
console.log("In function e ");
return Promise.resolve(5);
}

/* async function parallel() {

await Promise.all([a(),b(),c(),d(),e(),
]);
} */

parallel();
