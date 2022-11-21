require("dotenv").config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require("cors")

var personalinfoRouter = require('./routes/personalinfo');
var skillsRouter = require("./routes/skills");
var experienceRouter = require("./routes/experience");
// var usersRouter = require('./routes/users');

var app = express();
const mongoose = require("mongoose");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/personalinfo', personalinfoRouter);
app.use("/skills", skillsRouter);
app.use("/experience", experienceRouter);
// app.use('/users', usersRouter);


mongoose
    .connect(process.env.URL, {
        dbName: process.env.DB_NAME,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected Successfully to the Database");
    })
    .catch(console.error);

    //error handling
    app.use((err, req, res, next) => {
        res.status(err.status || 500).send({
            success: false,
            message: err.message,
        });
    });
    
    // Undefined routes error handling
    app.use((req, res, next) => {
        next(createError(404));
        });

module.exports = app;
