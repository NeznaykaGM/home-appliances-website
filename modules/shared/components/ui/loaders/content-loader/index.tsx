import * as React from 'react';
// libs
import styled from 'styled-components';
// view components
import { Loader } from '../loader';

interface Props {
  isLoading: boolean;
}

const ContentLoader: React.FC<Props> = ({ children, isLoading }) =>
  isLoading ? (
    <Wrapper>
      <Loader />
    </Wrapper>
  ) : (
    <>{children}</>
  );

const Wrapper = styled.div`
  ${({ theme }) => theme.templates.absolute};
  ${({ theme }) => theme.templates.centerContent};
`;

export { ContentLoader };
