"use strict";

let today = new Date();

const getDate = (d) => {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return ` ${day}, ${date} ${month} ${year}`;
};

const date = document.querySelector(".date");
date.innerHTML = getDate(today);

//get time

function showTime() {
  let date = new Date();

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();


  // Append 0 to single digit
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let time = `${h}:${m}:${s}`;
  document.querySelector(".time").innerHTML = time;
}

setInterval(showTime, 1000);
