import { IPerson } from './../types/person';
import { model, Schema } from 'mongoose';

const personSchema: Schema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
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
