/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time){
  let time_arr = time.split(":")
  // debugger
  let hr = parseInt(time_arr[0])
  if (hr < 12) {
    return "Good Morning";
  } else if (hr < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

function displayMessage(greeting){
  let a = document.getElementById("greeting").innerText = greeting
}

