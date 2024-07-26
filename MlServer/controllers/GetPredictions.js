


exports.getLoanPredictions = async(req,res) => {
    try {
        const inputDataAll = req.body;
        // Here you would call your ML model with inputDataAll and get the prediction
        // For the sake of example, let's assume you have a function called `getPrediction`:
        const prediction = await getPrediction(inputDataAll);
    
        // Save the input data and prediction in the database
        const newPrediction = new Prediction({
          ...inputDataAll,
          prediction
        });
    
        const savedPrediction = await newPrediction.save();
        res.json({ prediction });
      } catch (error) {
        console.error('Error getting Loan prediction', error);
        res.status(500).json({ error: 'Error getting Loan prediction' });
      }
}