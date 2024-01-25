import express from 'express';
import corsMiddleware from './middleware/cors/cors.middleware';
import userRouter from './v1/routes/user.router';
import errorHandler from './middleware/error/error.middleware';

const app = express();

// Initial Middlewares
app .use(corsMiddleware) // cors
    .use(express.json()) // necesario para usar json
    .use(express.urlencoded({ extended: false })) // necesario para leer datos del body request
    .disable('x-powered-by'); // elimina "marca de agua" de express

app.use('/api/v1/users', userRouter);

app.use(errorHandler);

export default app;