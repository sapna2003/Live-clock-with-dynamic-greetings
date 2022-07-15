// Selector
const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const date = document.getElementById("date");
// shift+alt+Down Arrow to duplicate code

//Event Listener

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

// Functions
function showtime() {
  let today = new Date();
  let hour = today.getHours(); // 8
  let min = today.getMinutes(); // 32
  let sec = today.getSeconds(); // 23
  let todaydate = today.toDateString(); // fri nov 6 2020

  //am Pm Format
  const amPm = hour > 12 ? "PM" : "AM";

  //12hr Format
  hour = hour % 12 || 12; // hour=12%12=0

  // output time
  time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(
    min
  )}<span>:</span>${addZero(sec)} ${amPm}`;

  date.innerHTML = `${todaydate}`;

  //   hh:mm:ss AM (Required Time Format)
  setTimeout(showtime, 1000);
}
// adding zero to a Number lessthan 10
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}
function setGreeting() {
  let today = new Date();
  let hour = today.getHours(); //17

  if (hour < 12) {
    document.body.style.backgroundImage =
      'url("https://images.unsplash.com/38/QoR8Bv1S2SEqH6UcSJCA_Tea.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fG1vcm5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")';
    greeting.innerHTML = "Good Morning";
  } else if (hour < 18) {
    document.body.style.backgroundImage =
      'url("https://images.unsplash.com/photo-1465311355940-7d4bdf6b04e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGFmdGVybm9vbiUyMGZhcm18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")';
    greeting.innerHTML = "Good Afternoon";
  } else {
    document.body.style.backgroundImage =
      'url("https://images.unsplash.com/photo-1473643852383-a47c2b255eea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ0fHxldmVuaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")';
    greeting.innerHTML = "Good Evening";
    document.body.style.color = "white";
  }
}

function getName() {
  if (localStorage.getItem("myData") === null) {
    name.innerHTML = "[Enter Name]";
  } else {
    name.innerHTML = localStorage.getItem("myData");
  }
}

function setName(e) {
  if (e.type === "keypress") {
    if (e.keyCode == 13) {
      localStorage.setItem("myData", e.target.innerHTML);
      name.blur();
    }
  } else {
    localStorage.setItem("myData", e.target.innerHTML);
  }
}

getName();
showtime();
setGreeting();
