const { promisify } = require('util');
const redis = require('redis');
const config = require('./config');

const redisClient = redis.createClient({
    password: config.REDIS_PASS,
    socket: {
        host: 'redis-10320.c283.us-east-1-4.ec2.cloud.redislabs.com',
        port: 10320
    }
});

try{
    redisClient.getAsync = promisify(redisClient.get).bind(redisClient);
    redisClient.setAsync = promisify(redisClient.set).bind(redisClient);
    redisClient.clear = promisify(redisClient.del).bind(redisClient);
} catch(error){
    console.log('redis Error', e);
}

redisClient.on('connected', function(){
    console.log("Redis is connected");
})

redisClient.on("error", function(err){
    console.log("Redis Error", err);
});

setInterval(()=>{
    console.log('Keeping Alive - Node Js Redis');
    redisClient.set('ping', 'PONG');
}, 1000*60*1);

global.cache = redisClient;
module.exports= redisClient;