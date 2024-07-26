const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Prediction = require('./models/Prediction'); // Import the Prediction model

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Route to get all predictions
app.get('/predictions', async (req, res) => {
  try {
    const predictions = await Prediction.find();
    res.json(predictions);
  } catch (error) {
    console.error('Error fetching predictions', error);
    res.status(500).json({ error: 'Error fetching predictions' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
