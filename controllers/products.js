const path = require('path');
const rootDir = require('../util/path');


exports.getAddProduct =(req, res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
};

exports.postAddProduct = (req, res,next)=>{
    console.log(req.body);
    res.redirect("/");
};

exports.getProducts = (req, res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'));
};

exports.getContacts =(req, res,next)=>{
    res.sendFile(path.join(rootDir,'views','/contact-us.html'));
};

exports.postContacts = (req, res,next)=>{
    console.log(req.body);
    res.redirect("/success");
};

exports.getSuccess = (req, res,next)=>{
    res.sendFile(path.join(rootDir,'views','success.html'));
};
