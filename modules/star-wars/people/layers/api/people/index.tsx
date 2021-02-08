import * as React from 'react';
// utils
import { useQuery } from '@md-utils/mock/query';
// mock
import { Person, people } from '@md-modules/shared/mock';

interface Context {
  people: Person[] | undefined;
  isLoading: boolean;
}

const PeopleAPIContext = React.createContext<Context>({
  people: [],
  isLoading: false
});

const PeopleAPIContextProvider: React.FC = ({ children }) => {
  // make api call here
  const { data, loading } = useQuery(people);

  return (
    <PeopleAPIContext.Provider
      value={{
        people: data,
        isLoading: loading
      }}
    >
      {children}
    </PeopleAPIContext.Provider>
  );
};

export { PeopleAPIContextProvider, PeopleAPIContext };
