import { DataSource } from 'typeorm';
import { HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_DATABASE } from '../config';
import User from '../entities/Usuario.entity';
import Club from '../entities/Club.entity';
import Cancha from '../entities/Cancha.entity';
import Deporte from '../entities/Deporte.entity';

// const pool = new Pool({
//     user: DB_USER,
//     password: DB_PASSWORD,
//     host: HOST,
//     port: DB_PORT,
//     database: DB_DATABASE
// });


export const AppDataSource = new DataSource({
    type: "postgres",
    host: HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    synchronize: true,
    entities: [User, Club, Deporte, Cancha],
    subscribers: [],
    migrations: [],
})

export default AppDataSource;