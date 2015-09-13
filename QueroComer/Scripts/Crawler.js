var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'qTESyWF9Fm3Hp0sCOM1rybeh4',
    consumer_secret: '0MikGf5J3OpRKWKt97W5g9iJsF9upxB7WE7viWDml8DMoZAqTu',
    access_token_key: '229050848-0acyio3u1DfCAnygWYrjaSgYyBKlnVoaC3ULyTHY',
    access_token_secret: 'SUuaOg6RKAqXqHFhC5nJT0P9RNxZschMICt1dSRSl02gq'
});

var params = { screen_name: 'nodejs' };
client.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {
        console.log(tweets);
    } else {
        console.log(error);
    }
});