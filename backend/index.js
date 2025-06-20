import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import ConnectDB from './Config/db.js';




dotenv.config();


const app = express();


app.use(cors());
app.use(express.json());


ConnectDB();


// app.use('/api/analytics', analyticsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));