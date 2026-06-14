import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import tempRoute from './routes/temproute.js';
import userRoute from './routes/userRoute.js';
import db from './config/db.js';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World! from backend');
});
app.use('/api', tempRoute);
app.use('/api', userRoute);

export default app;