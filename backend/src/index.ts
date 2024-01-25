import { PORT } from './config';
import app from './app';
import AppDataSource from './db/pg.pool';

// ejecuta db
async function main() {
    try {
        await AppDataSource.initialize();
        app.listen(PORT);
        console.log('servidor en el puerto ' + PORT);
    } catch (error) {
        console.log(error);
    }
}

main();