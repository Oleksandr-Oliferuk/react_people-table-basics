import React from 'react';
import cn from 'classnames';
import { useParams } from 'react-router-dom';
import { Person } from '../../types';
import { PersonLink } from '../PersonLink/PersonLink';

type Props = {
  person: Person;
  people: Person[];
};

export const TableRow: React.FC<Props> = ({ person, people }) => {
  const { slug } = useParams();

  // Шукаємо mother та father в масиві people
  const mother = people.find(p => p.name === person.motherName);
  const father = people.find(p => p.name === person.fatherName);

  return (
    <tr
      data-cy="person"
      className={cn({ 'has-background-warning': person.slug === slug })}
    >
      <td>
        <PersonLink name={person.name} slug={person.slug} sex={person.sex} />
      </td>

      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>

      <td>
        <PersonLink
          name={person.motherName || ''}
          slug={mother?.slug}
          sex={mother?.sex}
        />
      </td>

      <td>
        <PersonLink
          name={person.fatherName || ''}
          slug={father?.slug}
          sex={father?.sex}
        />
      </td>
    </tr>
  );
};
