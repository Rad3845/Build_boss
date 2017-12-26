//console.log(document.getElementById("title"));
//console.log(document instanceof HTMLDocument);
   document.addEventListener("DOMContentLoaded",
     function (event) {

  //Unobstrusive event binding
   document.querySelector("button")
     .addEventListener("click", function () {
  	   

// Call server to get the name
       $ajaxUtils
        .sendGetRequest("/astro_page/name.json",
  	      function (res) {
  	      	var message =
  	      	  res.firstName + " " + res.lastName
  	      	 if (res.likeChineseFood) {
  	      	 	message += " likes Chinese food";
  	      	 }
  	      	 else {
  	      	 	message += " doesn't like Chinese food"; 
  	      	 }
  	      	 message += " and uses ";
  	      	 message += res.numberOfDisplays + 2;
  	      	 message += " displays for coding.";

  		   

  		   document.querySelector("#content") 
            .innerHTML = "<h2>" + message + "</h2>";
                          

  	     });
       
                          
     });
  }
);
  

  

	
