function changeBackground() {
    var date = new Date();                    // Global variable
    var hour = date.getHours();
    var body = document.body;
    if (hour >= 6 && hour < 18) {
      // Light theme
      body.style.transition = "background-color 0.5s ease-in-out";
      body.style.backgroundColor = "#EDDCA9"; // Light greenish color
    } else {
      // Dark theme
      body.style.transition = "background-color 0.5s ease-in-out";
      body.style.backgroundColor = "#3F335F"; // Dark blueish color
    }
}

// Call the function when the page loads
window.onload = changeBackground;

// Call the function every hour to update the background
setInterval(changeBackground, 3600000); // 3600000 milliseconds = 1 hour


/* let body = document.body;
// let startTime = null;
// let startColor = "#3F335F"; // Dark blueish color
// let endColor = "#EDDCA9"; // Light greenish color

// function animate(time) {
//   if (!startTime) {
//     startTime = time;
//   }
//   let progress = (time - startTime) / 1000; // 1 second animation
//   let r = parseInt(startColor.substring(1, 3), 16) + Math.round(progress * (parseInt(endColor.substring(1, 3), 16) - parseInt(startColor.substring(1, 3), 16)));
//   let g = parseInt(startColor.substring(3, 5), 16) + Math.round(progress * (parseInt(endColor.substring(3, 5), 16) - parseInt(startColor.substring(3, 5), 16)));
//   let b = parseInt(startColor.substring(5, 7), 16) + Math.round(progress * (parseInt(endColor.substring(5, 7), 16) - parseInt(startColor.substring(5, 7), 16)));
//   body.style.backgroundColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
//   if (progress < 1) {
//     requestAnimationFrame(animate);
//   }
// }

// function changeBackground() {
//   startTime = null;
//   animate(performance.now());
// }

// // Call the function when the page loads
// window.onload = changeBackground;

// // Call the function every hour to update the background
// setInterval(changeBackground, 3600000); // 3600000 milliseconds = 1 hour */