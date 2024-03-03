fetch("http:/localhost:3000/nametest")
  .then((response) => response.json())
  .then((json) => console.log(json));
