import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getPerson, updatePerson } from '../API';
import Header from '../components/Header';

const Edit: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.id) {
      handleFetchPerson(params.id);
    }
  }, []);

  const handleFetchPerson = (_id: string): void => {
    getPerson(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! Person not found.');
        }
        setValue('firstName', data.person.firstName);
        setValue('lastName', data.person.lastName);
        setValue('age', data.person.age);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEditPerson = (data: IPerson, _id: string) => {
    updatePerson(data, _id)
      .then(({ status }) => {
        if (status !== 200) {
          throw new Error('Error! Person not updated.');
        }
        window.alert('Person has been successfully updated.');
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IPerson>();

  return (
    <div>
      <Header />
      <button className="action action-back" onClick={() => navigate('/')}>
        Back
      </button>
      <h2>Edit person</h2>
      <form
        onSubmit={handleSubmit((data) => {
          if (params.id) {
            handleEditPerson(data, params.id);
          }
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
        <label htmlFor="input-age">Age</label>
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

export default Edit;
