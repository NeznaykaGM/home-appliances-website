import * as React from 'react';
import { PeopleAPIContextProvider } from '@md-sw-people/layers/api/people';
import { PeopleBLContextProvider } from '@md-sw-people/layers/business';
import { PeoplePresentation } from '@md-sw-people/layers/presentation';

const PeopleContainer = () => (
  <PeopleAPIContextProvider>
    <PeopleBLContextProvider>
      <PeoplePresentation />
    </PeopleBLContextProvider>
  </PeopleAPIContextProvider>
);

export { PeopleContainer };
