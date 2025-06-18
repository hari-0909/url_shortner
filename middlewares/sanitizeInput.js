const {sanitizeBody}=reuire('express-validator');
module.exports.sanitizeInput=(req,res,next)=>{
    if(req.body&&typeof req.body.url=='String'){
        req.body.url=req.body.url.trim();
    }
    next();
}