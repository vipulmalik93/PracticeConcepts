
function printCurrentTimeAndSeconds() {
    const now = new Date(); // gets current date and time
  
    // get hours, minutes, and seconds
    let hours = now.getHours();     // 0–23
    let minutes = now.getMinutes(); // 0–59
    let seconds = now.getSeconds(); // 0–59
  
    // Format to 12-hour clock (optional)
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 becomes 12
  
    // format output (add leading zeros)
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${ampm}`;
      
      return formattedTime;
  
  }
  
  printCurrentTimeAndSeconds();
  
  console.log("Started time:", printCurrentTimeAndSeconds())
  
  
  setTimeout(() => {
      console.log("setTimeout executed in call stack time::",printCurrentTimeAndSeconds())
    setInterval(() => console.log("setInterval running time:", printCurrentTimeAndSeconds()), 5000);
  }, 2000);





































//   OUTPUT:

                // Started time: 03:14:47 PM
                // setTimeout executed in call stack time:: 03:14:49 PM
                // setInterval running time: 03:14:54 PM
                // setInterval running time: 03:14:59 PM
                // setInterval running time: 03:15:04 PM
                // setInterval running time: 03:15:09 PM
  