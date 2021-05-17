const express = require('express')
const app = express()
const port = 3001;
const cors = require('cors');
var fs = require('fs');
var pdf = require('html-pdf');
var bodyParser = require('body-parser');

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use(cors({origin: 'http://localhost:3000'})); 

app.use(bodyParser.json());

app.post('/createpdf', (req, res) => {
     //console.log(req);
        var html = req.body.params.html
        console.log(typeof html)
        var options = { format: 'Letter' };
        pdf.create(html, options).toFile('./businesscard.pdf', function(err, res) {
        if (err) return console.log(err);
        console.log(res); // { filename: '/app/businesscard.pdf' }
    })
   
});






app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})