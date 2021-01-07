import express from 'express';
import dotenv from 'dotenv';
import db from './db/db.js';

// Route imports
import auth from './routes/auth.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();

const app = express();
db();

// body parser
app.use(express.json());
// Routes
app.use('/api/v1/auth', auth);

// after all routes
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`SERVER ON ${PORT}`));

// Handle Unhandled Promise Rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  //   close server & exit
  server.close(() => process.exit(1));
});
