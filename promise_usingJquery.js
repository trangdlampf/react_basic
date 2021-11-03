window.onload = function(){

  $.get("https://jsonplaceholder.typicode.com/users").then(function(users){
    console.log(users);
    return $.get("https://jsonplaceholder.typicode.com/todos/1");
  }).then(function(todos){
    console.log(todos);
    return $.get("https://jsonplaceholder.typicode.com/posts");
  }).then(function(posts){
    console.log(posts);
  })

};
