const express = require('express');
const cors = require('cors');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = 5000;
const SECRET_KEY = process.env.JWT_SECRET; 

app.use(cors());
app.use(express.json());

/**
 * JWT Verification Middleware
 * Validates the JWT token in the Authorization header
 */
const verifyJWT = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(403).send("Access Denied");

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).send("Invalid Token");
  }
};

/**
 * Search Route
 * Proxies requests to iTunes Search API with authentication
 * @param {string} term - Search term
 * @param {string} media - Media type filter
 */
app.get('/api/search', verifyJWT, async (req, res) => {
  const { term, media } = req.query;

  try {
    const response = await axios.get('https://itunes.apple.com/search', {
      params: { term, media, limit: 20 },
    });
    res.json(response.data.results);
  } catch (error) {
    res.status(500).send("Error fetching data from iTunes API");
  }
});

/**
 * Token Generation Route
 * Creates a new JWT token for client authentication
 */
app.post('/api/token', (req, res) => {
  const payload = { user: "itunes-user" }; 
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  res.json({ token });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});