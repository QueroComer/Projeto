var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'qTESyWF9Fm3Hp0sCOM1rybeh4',
  consumer_secret: '0MikGf5J3OpRKWKt97W5g9iJsF9upxB7WE7viWDml8DMoZAqTu',
  access_token_key: '229050848-0acyio3u1DfCAnygWYrjaSgYyBKlnVoaC3ULyTHY',
  access_token_secret: 'SUuaOg6RKAqXqHFhC5nJT0P9RNxZschMICt1dSRSl02gq'
});
 
var params = {screen_name: 'nodejs', track: ['food', 'hungry', 'comida', 'gourmet']};

var fs = require('fs');

client.stream('statuses/filter', params, function (stream) {
    stream.on('data', function (tweet) {
      fs.appendFile('C:/Users/Amanda/Documents/GitHub/Projeto/QueroComer/Projeto/twetts.txt', tweet.text, function (err) {
		console.log( err );
	});
  });
  

  stream.on('error', function(error) {
    throw error;
  });
});