const sgMail = require('@sendgrid/mail')

//const sendgridAPIKey = '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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ashishsingh07.work@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app!`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ashishsingh07.work@gmail.com',
        subject: 'We are sorry that you are cancelling you account!',
        text: `Goodbye, ${name}. Is there anything we could have done to keep you on board? `
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}