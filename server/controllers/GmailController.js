const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const tokens = require('../gmail/token.json')
require('dotenv').config()

const oAuth2Client = new google.auth.OAuth2(
process.env.CLIENT_ID,
process.env.CLIENT_SECRET,
process.env.REDIRECT_URIS
)

oAuth2Client.setCredentials({ refresh_token: tokens.refresh_token })

const sendMail = async (req, res) => {
const { name, email, message } = req.body
try {
    await createMail()
    res.status(200).send('Email Sent')
    return
} catch (error) {
    console.log('SendMail Error', error)
    res.send(error)
}

const createMail = async () => {
    try {
    console.log('Creating Transport')
    let transporter = await nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
        user: process.env.USERNAME,
        pass: process.env.PASSWORD
        }
    })
    console.log('Transport Created')
    console.log('Setting Token')
    await transporter.verify(function (error, success) {
        if (error) {
        console.log('Transporter Error:', error)
        } else {
        console.log('Server is ready to take messages')
        }
    })
    console.log('Attempting to send mail')

    await transporter.sendMail(
        {
        from: 'jaclynfoster89@gmail.com',
        to: 'fosterjaclynd@gmail.com',
        subject: 'New Portfolio Message',
        html: `
                    <div>
                    <h2>New Portfolio Message:</h2>
                    <br>
                    <h2>Name: </h2><span>${name}</span>
                    <br>
                    <h3>Email: </h3><span>${email}</span>
                    <br>
                    <h4>Message: </h4><span>${message}</span>
                    </div>
                `
        },
        (err, info) => {
        if (err) {
            console.log('error trying to send', err)
        } else {
            console.log('mail info', info)
        }
        }
    )
    console.log('Send Mail Complete')
    } catch (err) {
    console.log('Send Mail Error', err)
    }
}
}

module.exports = { sendMail }

