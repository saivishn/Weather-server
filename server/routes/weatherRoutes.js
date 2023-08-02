const express = require('express');
const axios = require('axios');
const router = express.Router();
const { apiKey } = require('../config');

router.get('/', async (req, res) => {
  console.log("hiiii");
  try {
    const { lat, lon } = req.query;

    // Call the OpenWeatherMap Weather API with the received lat and lon
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Unable to fetch weather data' });
  }
});

module.exports = router;
