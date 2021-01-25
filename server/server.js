import express from 'express';
import dotenv from 'dotenv';
import db from './db/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// Route imports
import auth from './routes/auth.js';
import profile from './routes/profile.js';
import expensetracker from './routes/expensetracker.js';
import user from './routes/user.js';
import calendar from './routes/calendar.js';
import errorHandler from './middleware/errorHandler.js';

import http from 'http';
import { Server } from 'socket.io';
import { socketLogic } from './socket.js';

dotenv.config();

const app = express();
db();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

socketLogic(io);

// body parser
app.use(express.json());
app.use(cookieParser());
app.use(cors());
// Routes
app.use('/api/v1/auth', auth);
app.use('/api/v1/profile', profile);
app.use('/api/v1/expense-tracker', expensetracker);
app.use('/api/v1/user', user);
app.use('/api/v1/calendar', calendar);

// after all routes
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

server.listen(PORT, console.log(`SERVER ON ${PORT}`));

// Handle Unhandled Promise Rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  //   close server & exit
  server.close(() => process.exit(1));
});
