import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log('Server running on port', process.env.PORT);
});
