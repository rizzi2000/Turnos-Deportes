import { port } from './config';
import app from './app';

app.listen(port)

console.log('servidor en el puerto ' + port);