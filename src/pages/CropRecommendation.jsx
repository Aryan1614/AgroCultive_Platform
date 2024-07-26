
import React from 'react'
import { useState } from 'react';

function CropRecommendation() {

    const [formData, setFormData] = useState({
        nitrogen: "",
        phosphorus: "",
        potassium: "",
        temperature: "",
        humidity: "",
        ph: "",
        rainfall: "",
      });
      const [recommendation, setRecommendation] = useState(null);
    
      const handleInputChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        fetchRecommendation(formData)
          .then((data) => setRecommendation(data))
          .catch((error) => console.error(error));
      };
    
      const fetchRecommendation = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return {
          crop: "Tomato",
          description: "Tomatoes thrive in the given conditions.",
        };
      };
  return (
    <div className='mx-auto max-w-[950px]'>
        <div className="w-full mx-auto pt-10 md:p-8 mt-24">
            <h1 className="text-3xl font-bold mb-6">Optimize Your Crop Production</h1>
            <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                    <label htmlFor="nitrogen" className="font-bold">
                    Nitrogen
                    </label>
                    <input
                    id="nitrogen"
                    name="nitrogen"
                    type="number"
                    placeholder="Enter Nitrogen value"
                    value={formData.nitrogen}
                    onChange={handleInputChange}
                    className="border-gray-300 border rounded-md p-2"
                    />
                </div>
                <div className="grid gap-2">
                    <label htmlFor="phosphorus" className="font-bold">
                    Phosphorus
                    </label>
                    <input
                    id="phosphorus"
                    name="phosphorus"
                    type="number"
                    placeholder="Enter Phosphorus value"
                    value={formData.phosphorus}
                    onChange={handleInputChange}
                    className="border-gray-300 border rounded-md p-2"
                    />
                </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                    <label htmlFor="potassium" className="font-bold">
                    Potassium
                    </label>
                    <input
                    id="potassium"
                    name="potassium"
                    type="number"
                    placeholder="Enter Potassium value"
                    value={formData.potassium}
                    onChange={handleInputChange}
                    className="border-gray-300 border rounded-md p-2"
                    />
                </div>
                <div className="grid gap-2">
                    <label htmlFor="temperature" className="font-bold">
                    Temperature (°C)
                    </label>
                    <input
                    id="temperature"
                    name="temperature"
                    type="number"
                    placeholder="Enter Temperature value"
                    value={formData.temperature}
                    onChange={handleInputChange}
                    className="border-gray-300 border rounded-md p-2"
                    />
                </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                    <label htmlFor="humidity" className="font-bold">
                    Humidity (%)
                    </label>
                    <input
                    id="humidity"
                    name="humidity"
                    type="number"
                    placeholder="Enter Humidity value"
                    value={formData.humidity}
                    onChange={handleInputChange}
                    className="border-gray-300 border rounded-md p-2"
                    />
                </div>
                <div className="grid gap-2">
                    <label htmlFor="ph" className="font-bold">
                    pH
                    </label>
                    <input
                    id="ph"
                    name="ph"
                    type="number"
                    placeholder="Enter pH value"
                    value={formData.ph}
                    onChange={handleInputChange}
                    className="border-gray-300 border rounded-md p-2"
                    />
                </div>
                </div>
                <div className="grid gap-2">
                <label htmlFor="rainfall" className="font-bold">
                    Rainfall (mm)
                </label>
                <input
                    id="rainfall"
                    name="rainfall"
                    type="number"
                    placeholder="Enter Rainfall value"
                    value={formData.rainfall}
                    onChange={handleInputChange}
                    className="border-gray-300 border rounded-md p-2"
                />
                </div>
                <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
                >
                Get Recommendation
                </button>
            </form>
            {recommendation && (
                <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-4">Recommended Crop</h2>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                    <div className="h-6 w-6 bg-green-500 rounded-full"></div>
                    <span className="font-medium">{recommendation.crop}</span>
                    </div>
                    <p className="text-gray-500">{recommendation.description}</p>
                </div>
                </div>
            )}
            </div>
    </div>
  )
}

export default CropRecommendation;
