const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  const response = {
    message: "My name is Ilayda Turgut",
    timestamp: Date.now()
  };

  // minified JSON response
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(response)); 
});

const PORT = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
