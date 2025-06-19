const rateLimit=require('express-rate-limit');
//creating a limiter that allows 100 requests per 15 minutes
const limiter=rateLimit({
    windowMs: 15*60*1000, //15 minutes
    max: 100, //limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true, //Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, //Disable the `X-RateLimit-*` headers
});
module.exports=limiter;