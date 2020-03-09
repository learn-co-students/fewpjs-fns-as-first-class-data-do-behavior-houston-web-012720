/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  // const splitTime = time.split(":");
  // const hours = parseInt(splitTime[0]);
  // const minutes = parseInt(splitTime[1]);

  const [hours, minutes] = time.split(":").map(num=> parseInt(num));

  if (hours < 12) {
    return "Good Morning";
  } else if (hours < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(message) {
  let greeting = document.querySelector('#greeting');
  greeting.innerText = message;
}