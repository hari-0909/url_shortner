const express= require('express');
const router=express.Router();

router.post('/shorten',shortenUrl);
router.get('/:shortId',redirectUrl);

module.exports=router;