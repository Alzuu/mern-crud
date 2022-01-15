import axios, { AxiosResponse } from 'axios';

const baseURL: string = 'http://localhost:3001';

export const getPeople = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const people: AxiosResponse<ApiDataType> = await axios.get(
      `${baseURL}/people`
    );
    return people;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getPerson = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const person: AxiosResponse<ApiDataType> = await axios.get(
      `${baseURL}/people/${_id}`
    );
    return person;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const addPerson = async (
  data: Omit<IPerson, '_id'>
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const person: Omit<IPerson, '_id'> = {
      firstName: data.firstName,
      lastName: data.lastName,
      age: data.age,
    };
    const savePerson: AxiosResponse<ApiDataType> = await axios.post(
      `${baseURL}/add-person`,
      person
    );
    return savePerson;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updatePerson = async (
  data: IPerson,
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const personUpdate: Pick<IPerson, 'firstName' | 'lastName' | 'age'> = {
      firstName: data.firstName,
      lastName: data.lastName,
      age: data.age,
    };
    const savePerson: AxiosResponse<ApiDataType> = await axios.put(
      `${baseURL}/edit-person/${_id}`,
      personUpdate
    );
    return savePerson;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deletePerson = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedPerson: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseURL}/delete-person/${_id}`
    );
    return deletedPerson;
  } catch (error: any) {
    throw new Error(error);
  }
};
