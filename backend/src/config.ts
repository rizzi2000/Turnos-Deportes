import { config } from "dotenv";
config();

// Si el valor de .env es nulo tomará el segundo valor
export const PORT = process.env.PORT ?? 3000;
export const HOST = process.env.HOST ?? "localhost";
export const DB_USER = process.env.DB_USER ?? "postgres";
export const DB_PASSWORD = process.env.DB_PASSWORD ?? "Richi@12";
export const DB_PORT = Number(process.env.DB_PORT) ?? 5432;
export const DB_DATABASE = process.env.DB_DATABASE ?? "complejosdb";