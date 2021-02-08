import * as React from 'react';
// libs
import { useRouter } from 'next/router';
// utils
import { useQuery } from '@md-utils/mock/query';
// mock
import { people, Person } from '@md-modules/shared/mock';

interface Context {
  person: Person | undefined;
  isLoading: boolean;
}

const PersonAPIContext = React.createContext<Context>({
  person: undefined,
  isLoading: false
});

const PersonAPIContextProvider: React.FC = ({ children }) => {
  const { query } = useRouter();

  const { data, loading } = useQuery(people.find(({ id }) => id === query.id));

  return (
    <PersonAPIContext.Provider
      value={{
        person: data,
        isLoading: loading
      }}
    >
      {children}
    </PersonAPIContext.Provider>
  );
};

export { PersonAPIContextProvider, PersonAPIContext };
