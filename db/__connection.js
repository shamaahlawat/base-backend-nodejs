/**
 * Created by noushad on 31/10/17.
 */

const mongoose = require("mongoose");
const redis = require("redis");
const bluebird = require("bluebird");

const Config  = require("../configs/config");

mongoose.Promise = require('bluebird');
mongoose.connect(Config.MONGO_URL);

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
const redis_client = redis.createClient();

redis_client.on("error", function (err) {
    console.log("Error " + err);
});

exports.redis_client = redis_client;

exports.mongoose = mongoose;
