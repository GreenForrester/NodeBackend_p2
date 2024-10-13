import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import bodyparser from 'body-parser';

import productroutes  from './ca_presentation/routes/productroutes';
import customerroutes from './ca_presentation/routes/customerroutes';
import orderroutes    from './ca_presentation/routes/orderroutes';
import {exceptionHandler}  from './ca_presentation/middleware/errorhandling/errorhandler';


//loading environment variables from .env file
dotenv.config();

const app = express();

//Adding the middleware 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cookieParser());


//Order is important
app.use('/api/product', productroutes);
app.use('/api/customer', customerroutes);
app.use('/api/order', orderroutes);

app.use(express.static(path.join(__dirname, 'public')));

app.use(exceptionHandler); //global exception handler

export default app;
