const express = require('express');
const path = require('path');

//rutas
const pagesRutas = require('./routes/pages');

const app = express();
const port= 3025;

//automatico//
app.use(express.static('public'));

//ROUTER define rutas manualmente en routes.pages.js//
app.use('/',pagesRutas);

// el usuario entra a/ y se redirige a /page1 que ya esta manejado por mi router y me devuelve page1.html
app.get('/',(req,res)=>{
    res.redirect('/page1');
});


app.listen(port,()=>{
    console.log(`Server http://localhost:${port}`);
});