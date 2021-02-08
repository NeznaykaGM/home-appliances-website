import * as React from 'react';
import { PersonAPIContext } from '@md-sw-person/layers/api/person';

interface PersonInfo {
  label: string;
  value: string;
}

interface Context {
  personInfo: PersonInfo[];
}

const PersonBLContext = React.createContext<Context>({
  personInfo: []
});

const PersonBLContextProvider: React.FC = ({ children }) => {
  // add business logic here
  const { person } = React.useContext(PersonAPIContext);

  const personInfo = React.useMemo<PersonInfo[]>(() => {
    if (!person) {
      return [];
    }

    return [
      { label: 'Gender', value: person.gender },
      { label: 'Hair Color', value: person.hair_color },
      { label: 'Eye Color', value: person.eye_color },
      { label: 'Birth Year', value: person.birth_year }
    ];
  }, [typeof person === 'undefined']);

  return (
    <PersonBLContext.Provider
      value={{
        personInfo
      }}
    >
      {children}
    </PersonBLContext.Provider>
  );
};

export { PersonBLContextProvider, PersonBLContext };
