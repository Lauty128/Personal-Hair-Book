import express from 'express';
import 'dotenv/config';
import morgan from 'morgan';
import { router } from './src/router';

//---- Config
    const app = express()
    const PORT = process.env.PORT || 4000
    
//---- Middlewares
    app.use(morgan('dev'));

//---- Routes
    app.use('/', router);

//---- Listen
    app.listen(PORT, ()=>{
        console.log("Server on in port " + PORT);
    })
