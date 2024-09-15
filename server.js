const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public')); // Serve static files from 'public' directory

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/fitbuddy', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

// Example route
app.get('/', (req, res) => {
  res.send('Hello, FitBuddy!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

