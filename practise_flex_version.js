let temp = [];
document.addEventListener('DOMContentLoaded', () => {
				document.getElementById('wrapper').addEventListener('click', (e) => Calculat(e.target.innerText))
				document.getElementById('clear').addEventListener('click', () => {
					temp = [];
					arrayOfStrings=[];
					document.getElementById('buffer_zone').textContent=('');
		            });
	});
function Calculat(z) {
document.getElementById('buffer_zone').append(z);
if (z =='='){

document.getElementById('buffer_zone').append( eval(arrayOfStrings));
return false;
}
temp.push(z);
arrayOfStrings = temp.join("");
}