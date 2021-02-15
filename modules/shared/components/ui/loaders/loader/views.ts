import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 10px solid #f3f3f3;
  border-top: 10px solid #5856d6;
  border-radius: 50%;
  width: 96px;
  height: 96px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Circle = styled.div``;
