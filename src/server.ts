import 'reflect-metadata';
import 'dotenv/config';
import './typeorm';

import express from 'express';
import cors from 'cors';
import { router } from './routes';

const json = {
	limit: '50mb',
	extended: false
}
const PORT = process.env.PORT || 9000;
const app = express();

app.use(express.json(json));
app.use(cors({ origin: '*' }));
app.use(router);

app.listen(
	PORT,
	()=>console.log(`Server is running at port ${PORT}`)
);
