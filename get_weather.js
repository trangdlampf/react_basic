document.addEventListener('DOMContentLoaded', myFunction);

function myFunction() {  
    
	document.getElementById('urlSubmit').addEventListener('click', function(event){
																				
		var city = document.getElementById("cityId").value;											                // create variables	
		var dataString = city + ',us&appid=e5d42729fdbc1ff1b2320e63faf9b6b9';
		
		var req = new XMLHttpRequest();																                          // request
		req.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+ dataString, true);	// if asynchronous, it has to be true
		
		// req.setRequestHeader('Content-Type', 'application/json');								
		req.addEventListener('load',function(){
		if(req.status >= 200 && req.status < 400){
			
			var myData = JSON.parse(req.responseText);												                  // parse the JSON
			console.log(myData);																	                              
			  
			$('#demo1').html(myData.weather[0].description);										                // send data to HTML using id: #demo1 
			$('#demo2').html(myData.main.humidity);													                    // #demo2 			
			
		} else {
			console.log("Error in network request: " + req.statusText);
		}});	
			
		req.send(null);
		event.preventDefault();
	  	
	});
}
