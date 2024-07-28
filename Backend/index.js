import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Configure CORS
const allowedOrigins = [process.env.BASE_URL];
app.use(cors({
  origin: allowedOrigins,
  optionsSuccessStatus: 200
}));

app.use(express.json());

// Connect to MongoDB
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.log("Error: ", error));

// Define routes
app.use('/api/books', bookRoute);
app.use('/api/user', userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
