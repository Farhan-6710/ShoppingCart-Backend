const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON request bodies

// Route to get products
app.get('/api/products', (req, res) => {
  fs.readFile('products.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching products');
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// Route for signup
app.post('/api/signup', (req, res) => {
  const { username, email, password } = req.body;

  // Basic validation
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Simulate saving user data (in practice, you would save to a database)
  console.log('Signup Data:', { username, email, password });

  res.status(200).json({ message: 'User signed up successfully' });
});

// Route for login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Simulate user authentication (in practice, you would check credentials against a database)
  console.log('Login Data:', { email, password });

  res.status(200).json({ message: 'Login successful' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
