import { Document } from 'mongoose';

export interface IPerson extends Document {
  first_name: string;
  last_name: string;
  age: number;
}
