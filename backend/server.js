require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const Contact = require('./models/Contact');
const Quote = require('./models/Quote'); // New import

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for frontend
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    // Save to MongoDB
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// New Quote Route
app.post('/api/quote', async (req, res) => {
  try {
    const { name, email, service, projectDetails } = req.body;

    // Basic validation
    if (!name || !email || !service) {
      return res.status(400).json({ error: 'Name, email, and service are required' });
    }

    // Save to MongoDB
    const newQuote = new Quote({ name, email, service, projectDetails });
    await newQuote.save();

    res.status(201).json({ message: 'Quote request submitted successfully' });
  } catch (error) {
    console.error('Error saving quote:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Health check route (optional)
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', db: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});