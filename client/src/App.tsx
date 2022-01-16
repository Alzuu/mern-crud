import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPeople, deletePerson } from './API';
import './App.css';
import TableItem from './components/TableItem';
import Header from './components/Header';

const App: React.FC = () => {
  const [people, setPeople] = useState<IPerson[]>([]);

  useEffect(() => {
    fetchPeople();
  }, []);

  const navigate = useNavigate();

  const fetchPeople = (): void => {
    getPeople()
      .then(({ data: { people } }: IPerson[] | any) => setPeople(people))
      .catch((error: Error) => console.log(error));
  };

  const handleDeletePerson = (_id: string): void => {
    deletePerson(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! Person not removed.');
        }
        setPeople(data.people);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <Header />
      <main className="content">
        <button className="action action-new" onClick={() => navigate('/new')}>
          New
        </button>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {people.map((person: IPerson) => (
                <TableItem
                  key={person._id}
                  deletePerson={handleDeletePerson}
                  person={person}
                />
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default App;
