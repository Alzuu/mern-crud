import express, { Express } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import personRoutes from './routes';

const app: Express = express();

const port: number = 3001;

app.use(express.json());
app.use(cors());
app.use(personRoutes);

const uri: string = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lxpc1.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const options: object = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(uri, options)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    throw error;
  });
