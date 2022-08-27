const express = require("express");
const path = require("path");
const sendEmail = require("./utils/sendEmail");

const app = express();

app.use(express.urlencoded({ extended: false })); // Body parser
app.use(express.json({ limit: "10kb" }));
app.use(express.static(`${__dirname}`));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.status(200).render("contact");
});

app.get("/sent", (req, res) => {
  res.status(200).render("sent");
});

app.post("/sendemail", (req, res) => {
  const { name, surname, email } = req.body; // comes from the form 'name' tags

  const from = "danilkuznet@icloud.com";
  const to = "kuznetsov.dg495@gmail.com";

  const subject = "New Contact Request";

  const output = `
    <p>You have a new Contact Request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${name}</li>
      <li>Surname: ${surname}</li>
      <li>Email: ${email}</li>
    </ul>
  `;

  sendEmail(to, from, subject, output);

  res.redirect("/sent");
});

module.exports = app;
