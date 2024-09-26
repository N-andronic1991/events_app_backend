import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { env } from './utils/env.js';
import { ENV_VARS } from './constants/index.js';
import eventsRouter from './routers/events.js';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware.js';

const PORT = Number(env(ENV_VARS.PORT, '3000'));

export const startServer = () => {
  const app = express();

  app.use(
    express.json({
      type: ['application/json', 'application/vnd.api+json'],
    }),
  );
  app.use(cors());

  // app.use(
  //   pino({
  //     transport: {
  //       target: 'pino-pretty',
  //     },
  //   }),
  // );

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello world!',
    });
  });
  app.use(eventsRouter);

  app.use('*', (req, res, next) => {
    res.status(404).json({
      message: 'Not found',
    });
  });
  app.use(errorHandlerMiddleware);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
