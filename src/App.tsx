import { Loader } from './components/Loader';
import cn from 'classnames';
import './App.scss';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { dataContext } from './components/dataContext/dataContext';
import { useLocation } from 'react-router-dom';

export const App = () => {
  const { dataFromServer, errorMessage } = useContext(dataContext)!;
  const { isLoading } = useContext(dataContext)!;
  const location = useLocation();
  const isPeopleLocation = location.pathname.startsWith('/people');
  const isHomeLocation = location.pathname === '/';
  const isPeoplePage = isPeopleLocation && isLoading;
  const isEmptyData = !dataFromServer && !isPeoplePage && !isHomeLocation;

  return (
    <div data-cy="app">
      <nav
        data-cy="nav"
        className="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className={cn('navbar-item', {
                'has-background-grey-lighter': isHomeLocation,
              })}
            >
              Home
            </Link>

            <Link
              to="/people"
              className={cn('navbar-item', {
                'has-background-grey-lighter': isPeopleLocation,
              })}
            >
              People
            </Link>
          </div>
        </div>
      </nav>

      <main className="section">
        <div className="container">
          {isPeopleLocation && <h1 className="title">People Page</h1>}

          <div className="block">
            <div className="box table-container">
              {isPeoplePage && <Loader />}

              {errorMessage && (
                <p data-cy="peopleLoadingError" className="has-text-danger">
                  {errorMessage}
                </p>
              )}

              {isEmptyData && (
                <p data-cy="noPeopleMessage">
                  There are no people on the server
                </p>
              )}

              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
