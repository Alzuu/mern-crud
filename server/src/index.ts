import express, { Express } from 'express';
import mongoose from 'mongoose';
import personRoutes from './routes';

const app: Express = express();

const port: number = 3001;

app.use(express.json());
app.use(personRoutes);

const uri: string = 'mongodb://127.0.0.1:27017/people';
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
