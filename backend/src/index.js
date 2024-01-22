import { port } from './config.js';
import app from './app.js';

app.listen(port)

console.log('servidor en el puerto ' + port)