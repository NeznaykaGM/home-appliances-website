import * as React from 'react';
import { PersonPresentation } from '@md-sw-person/layers/presentation';
import { PersonAPIContextProvider } from '@md-sw-person/layers/api/person';
import { PersonBLContextProvider } from '@md-sw-person/layers/business';

const PersonContainer = () => (
  <PersonAPIContextProvider>
    <PersonBLContextProvider>
      <PersonPresentation />
    </PersonBLContextProvider>
  </PersonAPIContextProvider>
);

export { PersonContainer };
