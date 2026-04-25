// Debounce --> Agar user specific time ka lia kuch bi interuption nahi karta ha typing ma to hi hum API call karey gy otherwise we will reset the timer

// Run the function only when the user stops doing an action for some time.
function debounce(fn, delay) {
    let timerid;

    return function (...args) {
        clearTimeout(timerid);
        timerid = setTimeout(() => {
            fn(...args)
        }, delay);
    }
}

const search = (query) => {
    console.log(`Searching for`, query);
}

const searchWithDebounce = debounce(search, 4000);

searchWithDebounce("Hello");
searchWithDebounce("Hello how are you")

// Throttle --> Run the function after a fixed time interval, no matter how many times the event happens.

// function throttle(fn, delay){
//     let lastCall = 0;

//     return function(...args){
//         const now = Date.now();
//         if(now - lastCall < delay){
//             return;
//         }
//         lastCall = now
//         return fn(...args);
//     }
// }

// function sendChatMessage(message){
//     console.log(`Sending Message`, message);
// }

// const sendChatMessageWithSlowMode = throttle(sendChatMessage,1000);

// sendChatMessageWithSlowMode("Hello");
// sendChatMessageWithSlowMode("Hello how are you");