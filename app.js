const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  const response = {
    message: "My name is Ilayda Turgut",
    timestamp: Date.now()
  };
  res.json(response);
});

const PORT = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
