
var { MongoClient } = require('mongodb');
var assert = require('assert');
var Twitter = require('twitter');

require('dotenv').load();

vat twitterClient = new Twitter({

    consumer_key : process.env.TWITTER_CONSUMER_KEY,
    consumer_secret : process.env.TWITTER_CONSUMER_SECRET,
    access_token_key : process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret : process.env.TWITTER_ACCESS_TOKEN_SECRET
});