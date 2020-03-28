const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Failed to start server: ${err}`);
  } else {
    console.log(`Listening on ${PORT}`);
  }
});
