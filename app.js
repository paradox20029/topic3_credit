const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configure middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

app.post('/', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'password') {
    res.sendFile(__dirname + '/public/admin.html');
  } else if (username === 'user' && password === 'password') {
    res.sendFile(__dirname + '/public/user.html');
  } else {
    res.sendFile(__dirname + '/public/error.html');
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
