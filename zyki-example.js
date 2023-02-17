// Import the CryptoJS library
const CryptoJS = require("crypto-js");

// Calculate the release value this is a MD5 string of the score + release date
const score = 21140;
const release = CryptoJS.MD5(score + "02/27/22").toString();

// Define the url to post to
const url = 'https://cocainebear-game.films.apps.nbcuni.com/saveScore.php';

// Define a function that will post to the url
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

// Add "LOL" to the leaderboard
CoolFetch("LOL");

// Wait 3 seconds before looping
setTimeout(() => {
    // Loop 25/2 (12) times in order to fill the leaderboard
    for (let i = 0; i < 12; i++) {
        setTimeout(CoolFetch, 3000 * i, "wnd");
        setTimeout(CoolFetch, 3000 * i + 1000, "CyP");
    }
}, 3000);