var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mysql = require("mysql2");
const bodyParser = require("body-parser");
// const axios = require('axios').default;

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers',"Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin, Cache-Control");
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var pool = mysql.createConnection({
    database: 'mytestdb',
    host: 'localhost',
    user: 'root',
    password: '12345',
});


// get events list
app.get("/allEvents",  function(req, res){
    pool.query("SELECT * FROM event", function(err, data) {
        if(err) return console.log(err);
        res.json(data);
    });
});



// получаем отправленные данные и добавляем их в БД
app.post("/postNewEvent", function (req, res) {
    if(!req.body) return res.sendStatus(400);
    const rec = `INSERT INTO event (event_from, event_monthAndDate, event_text, event_title, event_to, event_year, event_id) VALUES 
    ('${req.body.event_from}',
     '${req.body.event_monthAndDate}',
      '${req.body.event_text}',
       '${req.body.event_title}',
        '${req.body.event_to}',
         ${req.body.event_year},
          '${req.body.event_id}'
          )`;
    pool.query(rec, function(err) {
      if(err) return console.log(err);
    })

.then((newEvent) => {
        return res.send({
            newEvent
        });
    })

});


app.delete("/deleteEvent", function (req, res) {
    console.log('@@@@@ req.body', req.body);
    console.log('@@@@@ req.body', req.body.id);

    if(!req.body) return res.sendStatus(400);

    pool.query(`DELETE FROM event WHERE event_id = '${req.body.id}'`
        , function(err) {
        if(err) return console.log(err);
        res.status(200);
    });
});


// получем id редактируемого пользователя, получаем его из бд и отправлям с формой редактирования
app.put("/modificationEvent", function(req, res){

    pool.query(`UPDATE event SET event_from = '${req.body.newEvent.from}',
     event_monthAndDate = '${req.body.newEvent.monthAndDate}',
      event_text ='${req.body.newEvent.text}', 
      event_title = '${req.body.newEvent.title}', 
      event_to = '${req.body.newEvent.to}', 
      event_year = ${req.body.newEvent.year}, 
      event_id = '${req.body.newEvent._id}' 
         WHERE event_id='${req.body.id}'`
        , function(err) {
            if(err) return console.log(err);
            res.status(200);
        })
        .then((newEvent) => {
        return res.send({
            newEvent
        });
    })

});



app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');

});

module.exports = app;
