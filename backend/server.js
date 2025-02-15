import 'dotenv/config'; // Load environment variables
import express from 'express';
import cors from 'cors';
import connectDB from './Config/MongoDB.js';

// App Config
const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(cors());

// Connect to Database
connectDB();

// API Endpoints
app.get('/', (req, res) => {
  res.send('API WORKING WELL JOE');
});

// Start Server
app.listen(port, () => console.log("Server started on port", port));
