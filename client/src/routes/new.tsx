import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { addPerson } from '../API';
import Header from '../components/Header';

type FormValues = Omit<IPerson, '_id'>;

const New: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const handleAddPerson = (data: Omit<IPerson, '_id'>): void => {
    addPerson(data)
      .then(({ status }) => {
        if (status !== 201) {
          throw new Error('Error! Person not added.');
        }
        window.alert('New person added successfully!');
        reset();
      })
      .catch((error: Error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Header />
      <button className="action action-back" onClick={() => navigate('/')}>
        Back
      </button>
      <h2>New person</h2>
      <form
        onSubmit={handleSubmit((data) => {
          handleAddPerson(data);
        })}
      >
        <label htmlFor="input-firstname">First name</label>
        <input
          {...register('firstName', {
            required: 'This is required.',
            minLength: {
              value: 2,
              message: 'Min length is 2.',
            },
          })}
          name="input-firstname"
          id="input-firstname"
          className="input-field"
        />
        <p className="error-message">{errors.firstName?.message}</p>
        <label htmlFor="input-lastname">Last name</label>
        <input
          {...register('lastName', {
            required: 'This is required.',
            minLength: {
              value: 2,
              message: 'Min length is 2.',
            },
          })}
          name="input-lastname"
          id="input-lastname"
          className="input-field"
        />
        <p className="error-message">{errors.lastName?.message}</p>
        <label htmlFor="age">Age</label>
        <input
          {...register('age', {
            required: 'This is required.',
            valueAsNumber: true,
            min: {
              value: 1,
              message: 'Min age is 1.',
            },
          })}
          name="input-age"
          id="input-age"
          className="input-field"
        />
        <p className="error-message">{errors.age?.message}</p>
        <input
          type="submit"
          value={'Submit'}
          className="action action-submit"
        />
      </form>
    </div>
  );
};

export default New;
