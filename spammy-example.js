// Import the CryptoJS library
const CryptoJS = require("crypto-js");

// Define the url to post to
const url = 'https://cocainebear-game.films.apps.nbcuni.com/saveScore.php';

// Calculate the release value this is a MD5 string of the score + release date
const score = 2147483647;
const release = CryptoJS.MD5(score + "10/31/22").toString();

function CoolFetch(name) {
    fetch(url, {
        "headers": {
            // Define the content-type as application/x-www-form-urlencoded so it sents the data as a form (url encoded)
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        // Define the data (name, score, release) as a string (url encoded)
        "body": `name=${name}&score=${score}&release=${release}`,

        // Define the method as POST
        "method": "POST"
    }).then(response => response.text()).then(response => console.log(response)).catch(err => console.log(err));
}

const names = ["CyP", "wnd"];

// Loop 10000 times
for (let i = 0; i < 10000; i++) {
    // Loop through the names
    names.forEach(name => {
        // Run the function with delay
        setTimeout(() => {
            CoolFetch(name);
        }, i * 100);
    });
}