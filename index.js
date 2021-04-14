const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json);


app.use(cookieParser("akaskd=kasdfoasf"))
app.use(session({
    secret: 'ZWRpw6fDo28gZW0gY2/9tcHV0YWRvcmE=',
    cookie: {
        secure: true,
        maxAge: 3500000
    },
    saveUninitialized: true,
    resave: true
}));
app.use(flash());


app.get('/', (req, res) =>
{
    var emailError = req.flash("emailError");

    res.render('index', {email: emailError});
});

app.post('/form', (req, res) => 
{
    var {email, name, points} = req.body;

    var emailError;
    var nameError;
    var pointsError;

    if(email == undefined || email == "") 
    {
        //result
    }
    else if(points == undefined || points < 20)
    {
        //result
    }
    else if(name == undefined || name == "")
    {
        //result
    }

    if(name.length < 4)
    {
        //result
    }
});

app.listen(8080, () => {
    console.log("Site rodando");
});