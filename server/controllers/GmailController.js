const nodemailer = require('nodemailer')
const {google} = require('googleapis')
const tokens = require('../gmail/token.json')
require('dotenv').config()

const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URIS
)
