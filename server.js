import express from 'express'
import ejs from 'ejs'
var app=express();
app.use(express.static('public'));
app.listen(8880);
console.log("Server running on port 8880");
app.set('view engine','ejs');

app.get('/',function(req,resp){
    resp.render('pages/index');
})