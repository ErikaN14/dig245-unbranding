/* javascript */

// main.js
/** 
// 1 - This is just a test
console.log("Hello from main.js");

// 2 - Store a reference to the target element
let targetElement = document.querySelector(".cssBackgrounImg:hover");

// 3 - Log the reference to confirm it works
console.log(targetElement);

// 4 - Add a mouseover event listener
targetElement.addEventListener("mouseover", mouseoverHandler);

// 5 - Create a handler function to run code when the event happens
function mouseoverHandler() {
   //console.log(this.innerText);
    this.style = "cursor: wait"; // 7 - Update the cursor style
}

// 6 - An event listener and handler in the same statement
targetElement.addEventListener("mouseout", function () {
    this.style = "cursor: pointer";*/

