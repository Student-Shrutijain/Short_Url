const shortid = require('shortid');
const URl = require('../models/url');
async function handleGenerateNewShortURL(req,res){
    const body = req.body;
    if(!body.url)return res.status(400).json({error: 'url is required'});



    const shortID = shortid();
    await URL.create({
        shortID: shortId,
        redirectURL: req.body.redirectURL,
        visitHistory: [],
    });
    return res.json({id: shortID})

}
module.exports= {handleGenerateNewShortURL,

};