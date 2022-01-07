import { Response, Request } from 'express';
import { IPerson } from '../types/person';
import Person from '../models/person';

const getPeople = async (_req: Request, res: Response): Promise<void> => {
  try {
    const people: IPerson[] = await Person.find();
    res.status(200).json({ people });
  } catch (error) {
    throw error;
  }
};

const addPerson = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<IPerson, 'first_name' | 'last_name' | 'age'>;

    const person: IPerson = new Person({
      first_name: body.first_name,
      last_name: body.last_name,
      age: body.age,
    });

    const newPerson: IPerson = await person.save();
    const allPeople: IPerson[] = await Person.find();

    res
      .status(201)
      .json({ message: 'Person added', person: newPerson, people: allPeople });
  } catch (error) {
    throw error;
  }
};

const updatePerson = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const updatePerson: IPerson | null = await Person.findByIdAndUpdate(
      { _id: id },
      body
    );
    const allPeople: IPerson[] = await Person.find();

    res.status(200).json({
      message: 'Person updated',
      person: updatePerson,
      people: allPeople,
    });
  } catch (error) {
    throw error;
  }
};

const deletePerson = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedPerson: IPerson | null = await Person.findByIdAndRemove(
      req.params.id
    );
    const allPeople: IPerson[] = await Person.find();

    res.status(200).json({
      message: 'Person deleted',
      person: deletedPerson,
      people: allPeople,
    });
  } catch (error) {
    throw error;
  }
};

export { getPeople, addPerson, updatePerson, deletePerson };
