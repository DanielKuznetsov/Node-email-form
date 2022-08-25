const express = require("express");
const sgMail = require("@sendgrid/mail");

// This is very important because it gives a path to the config files
// ! Environmental variables
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = express();

app.use(express.json({ limit: "10kb" }));

// SendGrid Connection
sgMail.setApiKey(`${process.env.SEND_GRID_API_KEY}`);

const msg = {
  to: "kuznetsov.dg495@gmail.com",
  from: "danilkuznet@icloud.com",
  subject: "Testing Node Email Service",
  text: "This is test text from the node app",
};

sgMail.send(msg, (err, info) => {
  if (err) {
    console.log("Email Not Sent");
  } else {
    console.log("Email Sent Successfully");
  }
});

module.exports = app;
