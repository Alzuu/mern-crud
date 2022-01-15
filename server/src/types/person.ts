import { Document } from 'mongoose';

export interface IPerson extends Document {
  firstName: string;
  lastName: string;
  age: number;
}
