import 'dotenv/config'; // Load environment variables
import express from 'express';
import cors from 'cors';
import connectDB from './Config/MongoDB.js';
import connectCloudinary from './Config/Cloudinary.js';
import adminRouter from './Routes/AdminRoute.js';

// App Config
const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(cors());

// Connect to Database
connectDB();

//connect to cloudinary
connectCloudinary()

// API Endpoints

app.use('/api/admin', adminRouter)

app.get('/', (req, res) => {
  res.send('API WORKING WELL JOE');
});

// Start Server
app.listen(port, () => console.log("Server started on port", port));
