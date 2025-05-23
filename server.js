const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mock reward endpoint
app.post('/submit', (req, res) => {
  const { email, phone } = req.body;

  // Basic validation
  if (!email || !phone || !phone.match(/^07\d{8}$/)) {
    return res.status(400).json({ message: 'Invalid input' });
  }

  // Log or save to database here
  console.log(Received submission: ${email}, ${phone});

  // Simulate sending reward (you would call M-Pesa API here)
  res.json({ message: Reward is being sent to ${phone} });
});

// Start server
app.listen(PORT, () => {
  console.log(Server running on http://localhost:${PORT});
});