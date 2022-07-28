const express = require('express');
const ejs = require('ejs');

const app = express();

//app.use(express.urlencoded());
app.use(express.static('public'))
app.set('view engine','ejs')

app.get('/',function(req,res) {
    res.render('index');
});

app.get('/about',function(req,res) {
    res.render('about');
});
app.get(
    '/services',function(req,res) {
    res.render('services');
});

app.get('/login',function(req,res) {
    res.render('login');
});

app.get('/register',function(req,res) {
    res.render('register');
});
app.get('/booking',function(req,res) {
    res.render('booking');
});

app.post('/login' , function(req,res) {
  res.redirect('/booking');
})

app.post('/register' , function(req,res) {
  res.redirect('/login');
})

app.post('/booking', function(req,res) {
  res.send('<h1>Thanks for booking our sevices</h1><br><a href="/">Go to HomePage</a>')
})

app.listen(process.env.PORT || 3000, () => console.log('App is running'));
