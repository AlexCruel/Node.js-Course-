const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'testtesteryep@gmail.com',
        pass: 'Cj4du77G8aK8'
    }
}, {
    from: 'Mailer Test'
})

const sendWelcomeEmail = (email, name) => {
    transporter.sendMail({
        to: email,
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get alone with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    transporter.sendMail({
        to: email,
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}