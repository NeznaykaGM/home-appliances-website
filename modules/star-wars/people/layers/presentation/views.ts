import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 30px 0;
  margin: 0 auto;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  max-width: ${({ theme }) => theme.dimensions.pageMaxWidth}px;
`;
