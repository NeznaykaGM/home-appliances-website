import * as React from 'react';
// context
import { PersonAPIContext } from '@md-sw-person/layers/api/person';
import { PersonBLContext } from '@md-sw-person/layers/business';
// view components
import { ContentLoader } from '@md-ui/loaders/content-loader';
import { PersonInfo } from '@md-sw-person/components/person-info';
// views
import {
  ContentWrapper,
  PersonDetailsContainer,
  PersonImgContainer,
  PersonInfoContainer,
  PersonName,
  Wrapper
} from './views';

const PersonPresentation = () => {
  const { isLoading } = React.useContext(PersonAPIContext);
  const { personInfo } = React.useContext(PersonBLContext);

  return (
    <ContentWrapper>
      <Wrapper>
        <ContentLoader isLoading={isLoading}>
          <PersonImgContainer>
            <img src='/static/images/Ben-Kenobi.jpg' alt='Kenobi' />
          </PersonImgContainer>
          <PersonDetailsContainer>
            <PersonName>Darth Vader</PersonName>
            <PersonInfoContainer>
              {personInfo.map((i, idx) => (
                <PersonInfo key={idx} {...i} />
              ))}
            </PersonInfoContainer>
          </PersonDetailsContainer>
        </ContentLoader>
      </Wrapper>
    </ContentWrapper>
  );
};

export { PersonPresentation };
