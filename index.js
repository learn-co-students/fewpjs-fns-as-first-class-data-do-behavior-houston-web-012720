/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  var time = time.split(":")
  var realtime = parseInt(time);
  debugger
  if (realtime < 12) {
    return "Good Morning";
  } else if (realtime >= 12 && realtime < 18) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  };
};

function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg
};
