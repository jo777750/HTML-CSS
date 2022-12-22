  debugger;
    const myImage = document.querySelector("img");
    const myRequest = new Request("elephant.jpg");

    fetch(myRequest)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error, status = ${response.status}`);
        }
			//	console.log( "reponse blog is"+ response.blob());

        return response.blob();
      })
      .then((myBlob) => (
		console.log( "myBlob is"+ myBlob);
		const objectURL = URL.createObjectURL(myBlob);
        myImage.src = objectURL;
		console.log( "hi"+ myImage.src);
      )
      .catch((error) => {
        const p = document.createElement("p");
        p.appendChild(document.createTextNode(`Error: ${error.message}`));
        document.body.insertBefore(p, myImage);
      });
