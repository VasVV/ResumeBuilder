const express = require('express')
const app = express()
const port = 3001;
const cors = require('cors');
var fs = require('fs');
var pdf = require('html-pdf');
var bodyParser = require('body-parser');
var nodemailer = require("nodemailer");

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use(cors({origin: 'http://localhost:3000'})); 

app.use(bodyParser.json());

app.post('/createpdf', (req, res) => {
     //console.log(req);
        var html = req.body.params.param[0]
        console.log(html)
        var options = { format: 'Letter' };
        pdf.create(html, options).toFile('./resume.pdf', function(err, res) {
        if (err) return console.log(err);
        console.log(res);
    })
   
});

app.post('/sendmail', (req,res) => {
  let p = req.body.params;
  console.log(p);
  async function main() {
      
    
      
      let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'radioheadboy0@gmail.com', 
          pass: 'brbaricvegcwyarf', 
        },
      });
    
     
      let info = await transporter.sendMail({
          attachments: [
              {
                  filename: 'Resume.pdf',
                  path: `./resume.pdf`
              }
          ],  
        from: '"Me" <radioheadboy0@gmail.com>', // sender address
        to: p.email, // list of receivers
        subject: "✔ Your resume", // Subject line
        html: `Hello, ${p.name} <br /> Here's your resume`, // html body
      });
    
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

    main().catch(console.error);
})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})