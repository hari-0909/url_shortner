const express=require('express');
const url = require('../models/url');
const urlRepo=require('../repository/urlRepository');
const {nanoid}=require('nanoid');
const {saveUrl,getUrlByShortId,incrementCount}=require('../repository/urlRepository');

function isValidUrl(url){
    try{
        new URL(url);
        return true;
    }catch(err){
        return false;
    }
}
async function shortenUrl(originalUrl){
    try{
        if(!originalUrl){
            throw new Error('URL is required');
        }
        //add http:// if protocol is missing
        if(!originalUrl.startsWith('http://') && !originalUrl.startsWith('https://')){
            originalUrl=`http://${originalUrl}`;
        }
        if(!isValidUrl(originalUrl)){
            throw new Error('Invalid URL format');
        }
        const shortId=nanoid(6);//generate a 6-character unique ID
        const urlDoc=await saveUrl(shortId,originalUrl);
        return urlDoc;
    }catch(error){
        throw new Error('Error creating short URL: ' + error.message);
    }
}
async function redirectUrl(shortId){
    try{
        const urlDoc=await getUrlByShortId(shortId);
        if(!urlDoc){
            throw new Error('URL not found');
        }
        console.log(urlDoc)
        await incrementCount(urlDoc);
        return urlDoc.originalUrl;
    }catch(error){
        throw new Error('Error redirecting URL:'+error.message);
    }
}
async function shortenUrlHandler(req,res,next){
    try{
        const{url}=req.body;
        if(!url){
            return res.status(400).json({error:'URL is required'});
        }
        const urlDoc=await shortenUrl(url);
        res.json({
            shortUrl:`https://${req.get('host')}/api/${urlDoc.shortUrl}`
        });
    }catch(err){
        if(err.message.includes('Invalid URL')){
            return res.status(400).json({error:err.message});
        }
        next(err);
    }
}
module.exports={shortenUrl,shortenUrlHandler,redirectUrl};