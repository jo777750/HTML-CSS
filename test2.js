
let buffer = [];
let arrayOfNumbers=[];
     
document.addEventListener('DOMContentLoaded', () => {
	 
      document.getElementById('buffer1').style.color = 'purple';
      document.getElementById('buffer1').style.backgroundColor = 'tomato';
	  document.getElementById('buffer1').style.fontWeight = 'bold';
	 });
        
		
document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('one').addEventListener('click', () => {
            Calculat(document.getElementById('one').textContent);
			

            });
        });

   
document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('two').addEventListener('click', () => {

                Calculat(document.getElementById('two').textContent);
            });
        });
			
 document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('three').addEventListener('click', () => {

                Calculat(document.getElementById('three').textContent);
            });
        });
		
document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('four').addEventListener('click', () => {
                Calculat(document.getElementById('four').textContent);
            });
        });

document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('five').addEventListener('click', () => {
                Calculat(document.getElementById('five').textContent);
            });
        });

document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('six').addEventListener('click', () => {
                Calculat(document.getElementById('six').textContent);
            });
        });		
	
document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('seven').addEventListener('click', () => {
                Calculat(document.getElementById('seven').textContent);
            });
        });

document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('eight').addEventListener('click', () => {

                Calculat(document.getElementById('eight').textContent);

            });
        });

document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('nine').addEventListener('click', () => {

                Calculat(document.getElementById('nine').textContent);
            });
        });		
		
		document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('zero').addEventListener('click', () => {
                Calculat(document.getElementById('zero').textContent);
            });
        }); 
		
		document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('dot').addEventListener('click', () => {
                Calculat(document.getElementById('dot').textContent);
            });
        }); 
		
		
		//operators
		document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('plus').addEventListener('click', () => {

                Calculat(document.getElementById('plus').textContent);
            });
        });

	document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('sub').addEventListener('click', () => {
				Calculat(document.getElementById('sub').textContent);
            });
        });
		
			document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('multiply').addEventListener('click', () => {
                Calculat(document.getElementById('multiply').textContent);
            });
        });
		
			document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('divide').addEventListener('click', () => {
				Calculat(document.getElementById('divide').textContent);
            });
        });

document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('lbrace').addEventListener('click', () => {
				Calculat(document.getElementById('lbrace').textContent);
            });
        });

document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('rbrace').addEventListener('click', () => {
				Calculat(document.getElementById('rbrace').textContent);
            });
        });
		
document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('equal').addEventListener('click', () => {
                Calculat(document.getElementById('equal').textContent);
            });
        });
			
		
document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('clear').addEventListener('click', () => {
				buffer = [];
                arrayOfNumbers=[];
				document.getElementById('result').textContent=('');
			  document.getElementById('buffer1').textContent=('');
			//   console.log('Buffer flushed: ' + document.getElementById('clear').textContent);


            });
        });
		
function Calculat(z) {
//5.6-.7=-1.400000000000004??
				  document.getElementById('buffer1').append(z);

if (z =='='){

 console.log("Mathematical Array : " + arrayOfStrings);
//console.log("typeof arrayOfStrings : " + typeof arrayOfStrings);
 console.log("Result is : " + eval(arrayOfStrings));
   document.getElementById('result').style.color = 'red';
      document.getElementById('result').style.backgroundColor = 'lightgrey';
	  document.getElementById('result').style.fontWeight = 'bold';

document.getElementById('result').textContent=eval(arrayOfStrings);


return false;
//throw new Error("Stop script");
}
//console.log("in calculat func  " + z);

buffer.push(z);
arrayOfStrings = buffer.join("");

}
