"use strict";

fetch('https://jsonplaceholder.typicode.com/users').then(function (res) {
  return res.json();
}).then(function (json) {
  return console.log(json);
})["catch"](function (err) {
  console.log('rejected', err);
});