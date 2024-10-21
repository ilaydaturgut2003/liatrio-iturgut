const express = require('express');
const app = express();
const port = 80;

app.set('json spaces', 2);

app.get('/', (req, res) => {
  const response = {
    message: "My name is Ilayda Turgut",
    timestamp: Date.now(),
    automatedDeployment: "success"
  };
  //const minifiedJson = JSON.stringify(response);
  //res.send(minifiedJson);
  res.json(response);
});

const PORT = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
