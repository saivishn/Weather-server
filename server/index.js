// server/index.js
const express = require('express');
const cors = require('cors');
const weatherRoutes = require('./routes/weatherRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/weather', weatherRoutes); // Mount the router at /api/weather

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
