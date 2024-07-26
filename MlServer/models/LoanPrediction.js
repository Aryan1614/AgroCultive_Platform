const mongoose = require('mongoose');

const LoanPredictionSchema = new mongoose.Schema({
  area: Number,
  land_contour: String,
  distance_from_road: Number,
  soil_type: String,
  income: Number,
  loan_request: Number,
  predicted_price: Number,
  loan_value: Number,
  approval_probability: Number,
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('LoanPrediction', LoanPredictionSchema);
