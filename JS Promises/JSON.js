document.addEventListener('DOMContentLoaded', () => {
const myRequest = new Request("a.json");
  console.log(myRequest);
fetch(myRequest).then (async response => {
cc=await response.json() 
//console.log(typeof cc)
for (var keykk in cc){
a1 = document.createElement('a');
a1.setAttribute('title', cc[keykk]);
a1.setAttribute('href', keykk);
a1.innerHTML=a1.title+"<br>";//perfect place using to put a new line
document.getElementById('json').appendChild(a1);
}
for (const property in cc) {
  console.log(`${property}: ${cc[property]}`);}
});
fetch('https://www.cnn.com')
});