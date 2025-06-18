const express=require('express');
const { validate } = require('../models/url');
const urlRepo=require('../repository/urlRepository');
async function shortenUrl(req,res){
    const {url}=req.body;
    validate();
    try{
        const {url}=req.body;
        const shortId=generateShortId();
        const savedUrl=await urlRepo.saveUrl(shortId,url);
        console.log(`converted url:${savedUrl}`);
        res.json({
            shortUrl:`https://${res.get('host')}/${savedUrl.shortUrl}`
        });
    }
    catch(err){
        next(err);
    }
}