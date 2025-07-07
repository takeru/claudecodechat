import express from 'express';
import { config } from './config';
import { healthRouter } from './routes/health';
import { claudeRouter } from './routes/claude';
import { errorHandler } from './middleware/errorHandler';
import { requestLogger } from './middleware/requestLogger';

const app = express();

app.use(express.json());
app.use(requestLogger);

app.use('/api/health', healthRouter);
app.use('/api/claude', claudeRouter);

app.use(errorHandler);

const server = app.listen(config.port, () => {
  console.log(`Server running on port ${config.port} in ${config.nodeEnv} mode`);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});

export { app };
