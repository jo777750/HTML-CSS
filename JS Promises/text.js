document.addEventListener('DOMContentLoaded', () => {
const myRequest = new Request("a.txt");
fetch(myRequest).then (async response => {
cc=await response.text() 
console.log(cc)
//innerText , note: NEWLINE charecter considered
document.getElementById('txt').innerText=cc
//innerHTML, note: NEWLINE charecter NOT NOT NOT considered
document.getElementById('txt1').innerHTML=cc
});
});