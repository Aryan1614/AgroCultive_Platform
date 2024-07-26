import React from 'react'
import { useState } from 'react';

export default function FertilizerRecommendation() {
  const[formData, setFormData] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    temperature: "",
    humidity: "",
    soilType: "",
    cropType: "",
  });

  const [fertilizer, setFertilizer] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to get fertilizer recommendation goes here
    setFertilizer("Recommended fertilizer based on your inputs.");
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 md:px-6 mt-20">
      <div className="grid gap-8">
        <div>
          <h1 className="text-3xl font-bold">Fertilizer Recommendation</h1>
          <p className="text-muted-foreground">Get the best fertilizer recommendation for your crops.</p>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label htmlFor="nitrogen" className="text-sm font-medium text-gray-700">
                Nitrogen
              </label>
              <input
                id="nitrogen"
                type="number"
                placeholder="Enter nitrogen value"
                value={formData.nitrogen}
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="phosphorus" className="text-sm font-medium text-gray-700">
                Phosphorus
              </label>
              <input
                id="phosphorus"
                type="number"
                placeholder="Enter phosphorus value"
                value={formData.phosphorus}
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label htmlFor="potassium" className="text-sm font-medium text-gray-700">
                Potassium
              </label>
              <input
                id="potassium"
                type="number"
                placeholder="Enter potassium value"
                value={formData.potassium}
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="temperature" className="text-sm font-medium text-gray-700">
                Temperature (°C)
              </label>
              <input
                id="temperature"
                type="number"
                placeholder="Enter temperature"
                value={formData.temperature}
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label htmlFor="humidity" className="text-sm font-medium text-gray-700">
                Humidity (%)
              </label>
              <input
                id="humidity"
                type="number"
                placeholder="Enter humidity"
                value={formData.humidity}
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="soilType" className="text-sm font-medium text-gray-700">
                Soil Type
              </label>
              <select
                id="soilType"
                value={formData.soilType}
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="" disabled>
                  Select soil type
                </option>
                <option value="sandy">Sandy</option>
                <option value="clay">Clay</option>
                <option value="loamy">Loamy</option>
                <option value="peat">Peat</option>
              </select>
            </div>
          </div>
          <div className="grid gap-2">
            <label htmlFor="cropType" className="text-sm font-medium text-gray-700">
              Crop Type
            </label>
            <select
              id="cropType"
              value={formData.cropType}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="" disabled>
                Select crop type
              </option>
              <option value="wheat">Wheat</option>
              <option value="rice">Rice</option>
              <option value="corn">Corn</option>
              <option value="soybean">Soybean</option>
              <option value="cotton">Cotton</option>
            </select>
          </div>
          <button type="submit" className="w-full md:w-auto bg-blue-600 text-white py-2 px-4 rounded-md">
            Get Fertilizer Recommendation
          </button>
        </form>
        {fertilizer && (
            <div className="bg-gray-100 rounded-lg p-6">
                <h2 className="text-2xl font-bold">Fertilizer Recommendation</h2>
                <p className="text-gray-700">{fertilizer}</p>
            </div>
        )}
        </div>
    </div>
    );
}