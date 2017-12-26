//console.log(document.getElementById("title"));
//console.log(document instanceof HTMLDocument);
document.addEventListener("DOMContentLoaded",
  function (event) {

function sayHello (event) {
	console.log(event);

	this.textContent = "Thanks";
	var name =
	document.getElementById("name").value;
	var message = "<h2>Hello " + name + "!</h2>";

	//document
	//     .getElementById("content")
	//     .textContent = message;

	document
	   .getElementById("content")
	   .innerHTML = message;

	if (name === "Tomiko") {
		var title =
		  document
		    .querySelector("#title")
		    .textContent;
		title += " Hello Tomiko, Stop Hating on the Code!!";
		document
		    .querySelector("#title")
		    .textContent = title;
	}
}


//Unobstrusive event binding
document.querySelector("button")
  .addEventListener("click", sayHello);

document.querySelector("body")
  .addEventListener("mousemove",
    function (event) {
      console.log("x: " + event.clientX);
      console.log("y: " + event.clientY);
    }
  );
 


  }
);
