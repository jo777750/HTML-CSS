document.addEventListener('DOMContentLoaded', () => {
var z=0;
var temp,arrayOfStrings=[];
console.log("start:")
console.log(document.querySelectorAll('#wrapper button'))
console.log("mid:")
console.log([...document.querySelectorAll('#wrapper button')] )//choose button only in the wrapper div and not the others like CLR
//listen to only button events(other than the CLR)
document.querySelectorAll('#wrapper button').forEach(button=> button.addEventListener('click',Calculat));
//listen to CLR button events
document.getElementById('clear1').addEventListener('click', () => {
temp = [];
arrayOfStrings=[];
document.querySelector('.my_flex').textContent=('');
});
function Calculat(e) {
z=e.target.innerText;
console.log(typeof z);
document.querySelector('.my_flex').append(z);//append to the flex object
if (z =='='){
document.querySelector('.my_flex').append( eval(arrayOfStrings));
return false;
}
temp.push(z);
arrayOfStrings = temp.join("");
}
});