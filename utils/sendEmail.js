const sgMail = require("@sendgrid/mail");

// This is very important because it gives a path to the config files
// ! Environmental variables
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

// SendGrid Connection
sgMail.setApiKey(`${process.env.SEND_GRID_API_KEY}`);

const sendEmail = (to, from, subject, text) => {
  const msg = {
    to,
    from,
    subject,
    html: text,
  };

  sgMail.send(msg, (err, info) => {
    if (err) {
      console.log("Email Not Sent Error Occured");
    } else {
      console.log("Email Sent Successfully");
    }
  });
};

module.exports = sendEmail;
