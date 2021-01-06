import express from 'express';
import dotenv from 'dotenv';
import db from './db/db.js';

// Routes
import auth from './routes/auth.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();

const app = express();
db();

// body parser
app.use(express.json());

app.use('/api/v1/auth', auth);

// after all routes
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`SERVER ON ${PORT}`));

// Handle Unhandled Promise Rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  //   close server & exit
  app.close(() => process.exit(1));
});
