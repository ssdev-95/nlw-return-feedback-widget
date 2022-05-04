import express from 'express';
import cors from 'cors';
import 'dotenv/config';

// TODO: run npx prisma init ondesktop later :D

const PORT = process.env.PORT || 9000;
const app = express();

app.use(cors({ origin: '*' }));

app.listen(
	PORT,
	()=>console.log(`Server is running at port ${PORT}`)
);
