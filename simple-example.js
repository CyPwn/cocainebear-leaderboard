// NodeJS example for the cocainebear-leaderboard "hack"
// This is a very simple example, it does not handle errors, etc.

// Define the url to post to
const url = 'https://cocainebear-game.films.apps.nbcuni.com/saveScore.php';

fetch(url, {
    "headers": {
        // Define the content-type as application/x-www-form-urlencoded so it sents the data as a form (url encoded)
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    // Define the data (name, score, release) as a string (url encoded) 
    // Check the readme for the release value
    "body": "name=cypwn.xyz&score=69420-1&release=d0b9f653cf6f359a3ee33f7f45f71b60",

    // Define the method as POST
    "method": "POST"
});