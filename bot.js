console.log("Bot is Working");

let Twit = require('twit');
let config = require('./config');
let T = new Twit(config);


let parameters = {
    q: 'nasa',
    count: 2
}
T.get('search/tweets', parameters, gotData);
function gotData(err, data, response) {
    let tweets = data.statuses;
    for (let i = 0; i < tweets.length; i++) {
        console.log(tweets[i].text);
    }
}



let tweet = { status: '#Hi!' }
T.post('statuses/update', tweet, tweeted);
function tweeted(err, data, response) {
    console.log(data); 
}


