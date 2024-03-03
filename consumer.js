// fetch(url, {
//   method: "GET", // default, so we can ignore
// });

fetch("http:/localhost:3000/nametest")
  .then((response) => response.json())
  .then((json) => console.log(json));
