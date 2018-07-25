const nodemailer = require('nodemailer')
const email = 'sender@email.com';

console.log("Email to: " + email);
var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "user@gmail.com",
        pass: "gmailpassword"
    },
    tls: {
        rejectUnauthorized: false
    }
});

var mailOptions = {
    from: "SENDER NAME",
    to: email,
    subject: "SUBJECT HERE",
    text: `EMAIL HERE`
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    }
});