window.onload = function(){

  // BOTH ARE ASYNCHRONOUS CALLS
  // Example 1: vanilla javasript
  var http = new XMLHttpRequest();

  http.onreadystatechange = function(){

    if(http.readyState == 4 && http.status == 200){
      console.log(JSON.parse(http.response));
    }
  };

  // true if asynchronous
	http.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  http.send();

  // Example 2: jquery method with callback function
  $.get("https://jsonplaceholder.typicode.com/users", function(data){
    console.log(data);
  });

};
