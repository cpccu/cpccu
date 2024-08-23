import dotenv from 'dotenv';
import { connectDB } from './DB/index.js';
import { app } from './app.js';

dotenv.config({
    path: './.env',
});

connectDB()
    .then(() => {
        const port = process.env.PORT || 3000;

        app.on('error', () => {
            console.log('Connection failed');
        });

        app.listen(port, () => {
            console.log('The portal hosted at port:', port);
        });
    })
    .catch((error) => {
        console.log('MONGODB connection is failed', error);
    });
