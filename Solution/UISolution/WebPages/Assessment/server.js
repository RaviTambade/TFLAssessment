const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'om1_210363@mmpolytechnic.com',
        pass: 'hqwa dngo lmfh lkny'
    }
});

app.post('/send-score-email', (req, res) => {
    const { candidateId, testId, score, email } = req.body;

    const mailOptions = {
        from: 'bhorsanika0239@gmail.com',
        to: email,
        subject: 'Your Test Score',
        text: `Hello Candidate ${candidateId},\n\nYou have completed test ${testId}.\nYour score is: ${score}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
