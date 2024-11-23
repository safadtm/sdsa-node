const intervalId = setInterval(() => {
    console.log("Haai, I am running every 2 secs");
}, 2000);

// Stop the interval after 5 seconds
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval cleared!");
}, 5000);