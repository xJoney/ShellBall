
const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();
const NEURELO_API_URL = process.env.NEURELO_API_URL;
const API_KEY = process.env.API_KEY;

// Fetch and display database contents
router.get('/data', async (req, res) => {
  try {
    const response = await axios.get(`${NEURELO_API_URL}/data`, {
      headers: {
        'API-Key': API_KEY
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;