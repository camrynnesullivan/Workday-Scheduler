//# 05 Third-Party APIs: Work Day Scheduler
// Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
// You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.
// ## User Story
// ```
// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively
// ```
// ## Acceptance Criteria
// ```
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// ----------- text block created in block
// THEN I can enter an event
// WHEN I click the save button for that timeblock atrribute same index as block
//------------store local
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
// ```
// The following animation demonstrates the application functionality:
// ![day planner demo](./Assets/05-third-party-apis-homework-demo.gif)
// ## Review
// You are required to submit the following for review:
// * The URL of the deployed application.
// * The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.
// - - -
// © 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
// as soon as i open my page get document on ready
// Create time blocks with sub divs
// use jQuery to add event listener, blocks
//bunch of rows and 3 colums
// col 1. time with text moved to the side and borders added, attribute added to target
// col 2. text box, which needs attribute to help differentiate it
// col 3. save box, which will locally save whats in the box, needs atrributes aswell
// ----------------------------------------------------------------
// ------------------------------------------------------------------
//TODO: as soon as i open my page get document on ready
$(document).ready(function () {
  console.log("ready!");
});
// TO GET THE CURRENT DATE - find a way to display the day of the week
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
//January is 0!
var yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;
document.write(today);
// TO GET CURRENT TIME - DONE
// gets the current of the user when are on the website
function myHour() {
  var d = new Date();
  var n = d.getHours();
  return parseInt(n);
}
console.log(myHour());
//TODO: generate the div - create 9 sub divs
//in each sub div display time on the left, input area in the middle, submit button the the right
//depending on the time of the day, it will diplay differently
//array of time objects
var time = [
  00,
  01,
  02,
  03,
  04,
  05,
  06,
  07,
  08,
  09,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
];
console.log(time);
// STYLING - for loop that iterates through the time array to generate the div colors
function colorBlock() {
  for (var i = 0; i < time.length; i++) {
    if (myHour === time[i]) {
      //if time.key === myHour, then block is red
    }
    if (myHour < time[i]) {
      //if time.key < myHour, then block is grey
    }
    if (myHour > time[i]) {
      // if time.key> if time.key < myHour, then block is green
    }
    //     if (myHour < 09 || myHour > 17){
    // //turn  all the divs to yellow
  }
}
// TODO: work on coloring the blocks with the for loop
//Code from assignement 28
// input - creates a pink banner on the page of the assignmeent after typing text in a text box above that once you press enter it will create a list item
// the list item will be that pink banner with the text inside that was typed and will be saved to localstorage and have a complete button
//the complete button targets the element via atrributes that we add and when pressed will remove the li item/pink banner and text
//We instead would like the banner when clicked, activate into a text area, which will allow the user to type in text
//which wil be saved once the user presses the button on the side
//LOCALSTORAGE if a local storage info is null set object to empty string
var userInputByHour = [];
//
// function renderTodos() {
//     // Clear todoList element and update todoCountSpan
//     todoList.innerHTML = "";
//     todoCountSpan.textContent = todos.length;
//     // Render a new li for each todo
//     for (var i = 0; i < todos.length; i++) {
//         var todo = todos[i];
//         var li = document.createElement(“li”);
//         li.textContent = todo;
//         li.setAttribute(“data-index”, i);
//         var button = document.createElement(“button”);
//         button.textContent = “Complete”;
//         li.appendChild(button);
//         todoList.appendChild(li);
//     }
// }
// function init() {
//     // Write code here to check if there are todos in localStorage
//     // If so, parse the value from localStorage and assign it to the todos variable
//     todos = JSON.parse(localStorage.getItem(“todos”)) || []; <<- short circuit operator
//     // Render todos to the DOM
//     renderTodos();
// }
// function storeTodos() {
//     // Add code here to stringify the todos array and save it to the “todos” key in localStorage
//     localStorage.setItem(“todos”, JSON.stringify(todos));
// }
// // When form is submitted...
// todoForm.addEventListener(“submit”, function (event) {
//     event.preventDefault();
//     var todoText = todoInput.value.trim();
//     // Return from function early if submitted todoText is blank
//     if (todoText === “”) {
//         return;
//     }