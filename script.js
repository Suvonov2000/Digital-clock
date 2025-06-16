window.addEventListener(`load`, calculateTime);

function calculateTime() {
  var date = new Date();

  var utc = date.getTime() + date.getTimezoneOffset() * 60000;
  var japanDate = new Date(utc + 9 * 60 * 60000); // JST = UTC + 9

  var dayNumber = japanDate.getDay();
  var hour = japanDate.getHours();
  var minute = japanDate.getMinutes();
  var ampm = hour >= 12 ? "PM" : "AM";
  var dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  hour = hour % 12;
  hour = hour ? hour : 12;
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;

  document.getElementById("day").innerHTML = dayNames[dayNumber];
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = minute;
  document.getElementById("ampm").innerHTML = ampm;

  setTimeout(calculateTime, 1000);
}
