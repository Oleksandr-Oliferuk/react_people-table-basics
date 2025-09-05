import 'bulma/css/bulma.css';
import { useContext } from 'react';
import { Table } from '../components/Table/Table';
import { dataContext } from '../components/dataContext/dataContext';
import { Loader } from '../components/Loader';

export const PeoplePage: React.FC = () => {
  const { dataFromServer, errorMessage, isLoading } = useContext(dataContext)!;

  if (isLoading) {
    return <Loader />;
  }

  if (errorMessage) {
    return (
      <p data-cy="peopleLoadingError" className="has-text-danger">
        {errorMessage}
      </p>
    );
  }

  if (dataFromServer?.length === 0) {
    return <p data-cy="noPeopleMessage">There are no people on the server</p>;
  }

  return <Table />;
};
