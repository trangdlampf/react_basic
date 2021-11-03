window.onload = function(){

  /*
  // Basic Callback function
  var fruits = ["banana", "apple", "pear"];
  fruits.forEach(function(val){
      console.log(val);
  });
  // Can be rewritten as below
  function callback(val){
      console.log(val);
  }
  var fruits = ["banana", "apple", "pear"];
  fruits.forEach(callback);
  */

  /*
  // Example 1: way of writing this
  $.get("https://jsonplaceholder.typicode.com/users", function(data){
      console.log(data);
  });
  console.log('Test: is Asynchronous because prints first');
  */

  // Example 2: another way of writing this
  function cb(data){
    console.log(data);
  }
  $.get("https://jsonplaceholder.typicode.com/users", cb);
  console.log('Test: is Asynchronous because prints first');

};
