// Create h1 element and add to DOM
h1 = document.createElement('h1');
h1.innerText = "CallBack Hell";
document.querySelector('body').appendChild(h1);

/**
 * changeColor - Returns a Promise that changes h1 color after delay
 * @param {string} color - Color to change to
 * @param {number} delay - Delay in milliseconds
 * @returns {Promise} - Resolves on success, rejects on random error
 */
function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate random error (30% chance)
            let number = Math.floor(Math.random() * 5) + 1;
            if (number > 3) {
                reject("error in changing color");
                return;
            }
            // Change color and log
            h1.style.color = color;
            console.log(`color change to ${color}`);
            resolve("color changed!");
        }, delay);
    });
}

/**
 * demo - Async function that chains color changes sequentially
 * Uses async/await for clean, readable sequential Promise handling
 * Catches errors with try/catch instead of .catch()
 */
let demo = async () => {
    try {
        // Wait for each color change to complete before moving to next
        await changeColor("red", 1000);
        await changeColor("green", 1000);
        await changeColor("blue", 1000);
        await changeColor("orange", 1000);
    } catch (err) {
        // Handle any rejection from changeColor()
        console.log(err);
    }

    // This runs after all color changes or after error caught
    let a = 5;
    console.log(a);
}

// Uncomment to run in browser:
// demo();