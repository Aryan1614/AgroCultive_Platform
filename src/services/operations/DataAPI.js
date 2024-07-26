import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getPredictionsLoans = async () => {
  try {
    const response = await axios.get(`${API_URL}/predictions`);
    return response.data;
  } catch (error) {
    console.error('Error fetching predictions', error);
    throw error;
  }
};


