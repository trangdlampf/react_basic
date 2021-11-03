window.onload = function(){

  function cb(data){
    console.log(data);
  }

  function handleError(jqXHR, textStatus, error){ //JQueryXHR
    console.log(error); // nomrally, you handle errors in a different way
  }

  $.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
    success: cb,          // callback function
    error: handleError
  });

};
