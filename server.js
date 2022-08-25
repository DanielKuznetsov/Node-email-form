const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 6000;
const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
