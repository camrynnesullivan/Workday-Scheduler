// DOC READY===========================================

$(function () {
  console.log("ready!");
});

//DEPENDENCIES=========================================================

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
var yyyy = today.getFullYear();

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

//When the user opens their workday schedule
//they see the date
today = mm + "/" + dd + "/" + yyyy;
$("#currentDay").append(today);

//FUNCTIONS==========================================================

//they also see hours of the day from 9am-5pm
function myHour() {
  var d = new Date();
  var n = d.getHours();
  return parseInt(n);
}
console.log(myHour());

//The user can create content within each hour of the day
//Depending on the time of the workday (9am-5pm), the color of the hour alerts the user to...

$(".time-block").each(function () {
  console.log(this);
  var timeRow = $(this);
  var now = myHour();
  var time = parseInt(timeRow.attr("id").split("-")[1]);
  console.log(time);

  //current hour (red)
  if (now === time) {
    $(this).addClass("present");
  }
  //past hour (grey)
  if (now > time) {
    $(this).addClass("past");
  }
  //future hour(green)
  if (now < time) {
    $(this).addClass("future");
  }
});

//DISPLAY=======================================================

//The user can save the content they create
$(".saveBtn").on("click", function () {
  //get nearby values (Content in textarea box)
  console.log(this);
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  //set (save) items in local storage.
  localStorage.setItem(time, text);
});

//when the user saves the content, they can revisit their content at any time...
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

console.log(myHour());
