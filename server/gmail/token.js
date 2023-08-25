const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');
const credentials = require('../credentials.json');
require('dotenv').config()

// Replace with the code you received from Google
const code = '4/0Adeu5BXTFbst8jahwbQLwsRf53VLugWLCHZT0ctbg_SZqglYPA94YDWq_Uv7l3hoSkSFLw';
const { CLIENT_SECRET, CLIENT_ID, REDIRECT_URIS } = process.env;
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URIS);

oAuth2Client.getToken(code).then(({ tokens }) => {
const tokenPath = path.join(__dirname, 'token.json');
fs.writeFileSync(tokenPath, JSON.stringify(tokens));
console.log('Access token and refresh token stored to token.json');
});