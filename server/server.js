require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// 1. THIS IS THE MISSING PIECE! Tell the server where your auth routes are
// (Assuming your routes are inside src/routes/authRoutes.js)
app.use('/api/auth', require('./src/routes/authRoutes')); 
// Note: If your file is named differently, like auth.js, change 'authRoutes' to 'auth'

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB successfully!'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));

// 2. THE VERCEL FIX
module.exports = app;