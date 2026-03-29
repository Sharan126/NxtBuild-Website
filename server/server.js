import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './src/app.js';

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB successfully!'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));

// Export for Vercel
export default app;