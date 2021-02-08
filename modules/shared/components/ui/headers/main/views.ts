import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  background-color: ${({ theme }) => theme.colors.gray500};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray600};
`;

export const IWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  margin: 0 auto;

  max-width: ${({ theme }) => theme.dimensions.pageMaxWidth}px;
`;

export const LWrapper = styled.div`
  flex: 1;

  img {
    display: block;
    max-height: 20px;
  }

  ${({ theme }) => theme.templates.centerItems};
`;

export const RWrapper = styled.div`
  flex: 2;
  justify-content: flex-end;

  ${({ theme }) => theme.templates.centerItems};
`;
