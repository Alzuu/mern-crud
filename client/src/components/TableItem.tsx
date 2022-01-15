import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = PersonProps & {
  deletePerson: (_id: string) => void;
};

const TableItem: React.FC<Props> = ({ person, deletePerson }) => {
  const navigate = useNavigate();

  return (
    <tr>
      <td>{person.firstName}</td>
      <td>{person.lastName}</td>
      <td>{person.age}</td>
      <td>
        <button
          className="action action-edit"
          onClick={() => {
            navigate(`/edit/${person._id}`);
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            if (
              window.confirm(`Are you sure you want to delete this entry?`) ===
              true
            ) {
              deletePerson(person._id);
            }
          }}
          className="action action-delete"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default TableItem;
