const getExpeditiousCache = require('express-expeditious');

const defaultOptions = {
    namespace        : 'expresscache',
    defaultTtl       : '1 minute',
    satusCodeExpires : {
        404 : '5 minutes',
        500 : 0 //1 minute en milliseconds
    },
}

// engine : require('expeditious-engine-redis')(
//     {
//         host : 'redis-server.acme.com',
//         port : 6379
//     }
// )
const cacheInit = getExpeditiousCache(defaultOptions);

module.exports  = { cacheInit }