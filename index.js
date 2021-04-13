const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('express-flash');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json);

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
    console.log("Ta bala!")
});


app.listen(8080, () => {
    console.log("Site rodando");
});