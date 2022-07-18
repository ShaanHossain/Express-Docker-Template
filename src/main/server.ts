import express, { Request, Response } from 'express';
import cors from 'cors';
import { apiPrefix } from '../constants';
import { dateRouter } from './Date/date.routes';

export const app = express();
const port = 8000;

const options: cors.CorsOptions = {
  origin: [
    'http://localhost:8000',
  ],
};

app.use(express.json());
app.use(cors(options));

app.use(`${apiPrefix}/date`, dateRouter);

app.get('/', (req: Request, res: Response) => {
  res.status(200).send(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});