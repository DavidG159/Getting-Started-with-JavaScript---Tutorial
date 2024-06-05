/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Sirxavier David C. Gaspar
   Date: 2024-06-03

*/

//Display the current date & time
document.getElementById("dateNow").innerHTML = "m/d/y<br />h:m:s";

//Display the time left until New Year's End

document.getElementById("days").innerHTML = "dd";

document.getElementById("hrs").innerHTML = "hr";

document.getElementById("mins").innerHTML = "mm";

document.getElementById("secs").innerHTML = "ss";

function runClock(){

//New variable for date-time
var currentDay = new Date();
var dateString = currentDay.toLocaleDateString();
var timeString = currentDay.toLocaleTimeString();

//We are dynamically setting Current time
document.getElementById("dateNow").innerHTML = dateString + "<br />" + timeString;

var newYear = new Date("January 1, 2018");

var nextYear = currentDay.getFullYear() + 1;

newYear.setFullYear(nextYear);

var daysLeft = (newYear - currentDay)/(1000*60*60*24);

//Display the time left until New Year's Eve
days.innerHTML = daysLeft;

days.textContent = Math.floor(daysLeft);

//hours
var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;

document.getElementById("hrs").textContent = Math.floor(hrsLeft);

//minutes
var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
document.getElementById("mins").textContent = Math.floor(minsLeft);

//seconds
var secsLeft = (minsLeft - Math.floor(minsLeft))*60;
document.getElementById("secs").textContent = Math.floor(secsLeft);

console.log(daysLeft);

}

function stopClock(){
    clearInterval(intervalID);
}

intervalID = setInterval(runClock, 1000);
runClock();

/** 
function updateCountdown() {
   var now = new Date().getTime();
   var distance = newYear - now;
 
   if (distance > 0) {
       // Time calculations for days, hours, minutes and seconds
       var days = Math.floor(distance / (1000 * 60 * 60 * 24));
       var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
       var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
       // Output the result in the elements with corresponding IDs
       document.getElementById("days").textContent = days;
       document.getElementById("hrs").textContent = hours;
       document.getElementById("mins").textContent = minutes;
       document.getElementById("secs").textContent = seconds;
   } else {
       // If the countdown is over, display "EXPIRED"
       document.getElementById("days").textContent = "0";
       document.getElementById("hrs").textContent = "0";
       document.getElementById("mins").textContent = "0";
       document.getElementById("secs").textContent = "0";
   }
 }
 
 // Update the countdown every second
 setInterval(updateCountdown, 1000);
 
 // Initial call to display the countdown immediately
 updateCountdown();

 */