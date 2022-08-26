require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 5000;

const app = express();

app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});
