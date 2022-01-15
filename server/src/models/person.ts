import { IPerson } from './../types/person';
import { model, Schema } from 'mongoose';

const personSchema: Schema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<IPerson>('Person', personSchema);
