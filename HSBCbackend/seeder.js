const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const data = require('./data/jsondata.json');
const dataModel = require('./models/dataModel');
const path = require('path');
dotenv.config({path:'./config/config.env'});

mongoose.connect(process.env.MONGODB_CONN_URI)

const datajson = JSON.parse(fs.readFileSync(`${__dirname}/data/jsondata.json`));

const insertData = async() => {
    
    try{
        await dataModel.create(datajson);
        console.log("Data inserted succesfully");
        process.exit();
    }
    catch(err){
        console.log(err)
    }
}

const deleteData = async ()=>{
    try{
        await dataModel.deleteMany();
        console.log("Data deleted");
        process.exit();
    }
    catch(err){
        console.log(err)
    }
}

if(process.argv[2] == '-i'){
    insertData();
}
else if(process.argv[2] == '-d'){
    deleteData();
}

