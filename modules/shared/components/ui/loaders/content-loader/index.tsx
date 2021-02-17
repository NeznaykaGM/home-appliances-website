import * as React from 'react';
// view components
import { Loader } from '../loader';
import styled from 'styled-components';

interface Props {
  isLoading: boolean;
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentLoader: React.FC<Props> = ({ children, isLoading }) =>
  isLoading ? (
    <Wrapper>
      <Loader />
    </Wrapper>
  ) : (
    <>{children}</>
  );

export { ContentLoader };
