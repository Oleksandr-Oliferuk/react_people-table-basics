import { useContext } from 'react';
import { TableRow } from '../TableRow/TableRow';
import { dataContext } from '../dataContext/dataContext';
import { Person } from '../../types';

export const Table = () => {
  const { dataFromServer, isLoading } = useContext(dataContext)!;

  return (
    <>
      {!isLoading && (
        <table
          data-cy="peopleTable"
          className="table is-striped is-hoverable is-narrow is-fullwidth"
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Sex</th>
              <th>Born</th>
              <th>Died</th>
              <th>Mother</th>
              <th>Father</th>
            </tr>
          </thead>

          <tbody>
            {dataFromServer?.map((person: Person) => (
              <TableRow person={person} key={person.slug} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
