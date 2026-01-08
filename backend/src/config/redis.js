const { createClient }  = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-14177.c256.us-east-1-2.ec2.cloud.redislabs.com',
        port: 14177
    }
});

module.exports = redisClient;