interface IPerson {
  _id: string;
  firstName: string;
  lastName: string;
  age: number;
  createdAt?: string;
  updatedAt?: string;
}

interface PersonProps {
  person: IPerson;
}

type ApiDataType = {
  message: string;
  status: number;
  people: IPerson[];
  person: IPerson;
};
