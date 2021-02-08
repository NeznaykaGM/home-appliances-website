import * as React from 'react';
// view components
import { ContentLoader } from '@md-ui/loaders/content-loader';
import { Card } from '@md-sw-people/compoonents/card';
// context
import { PeopleAPIContext } from '@md-sw-people/layers/api/people';
import { PeopleBLContext } from '@md-sw-people/layers/business';
// views
import { Wrapper } from './views';

const PeoplePresentation = () => {
  const { isLoading } = React.useContext(PeopleAPIContext);
  const { peopleList } = React.useContext(PeopleBLContext);

  return (
    <Wrapper>
      <ContentLoader isLoading={isLoading}>
        {peopleList.map((person) => (
          <Card {...person} key={person.id} />
        ))}
      </ContentLoader>
    </Wrapper>
  );
};

export { PeoplePresentation };
