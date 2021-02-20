import styled from 'styled-components';

export const Wrapper = styled.div`
  &:hover {
    box-shadow: 0 0 8px rgba(0.2, 0.2, 0.2, 0.5);
    transition: box-shadow 0.2s linear;
  }
  
  width: 300px;
  height: 350px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  padding: 10px;
  margin: 10px;
  background: white;
  position: relative;
  border-radius: 10px;
  transition: box-shadow 0.1s linear;
  
  img {
    width: 100%;
    height: 200px;
    overflow: hidden;
    text-align: right;
    user-select: none;
    pointer-events: none;
    cursor: pointer;
    padding: 2px;
    background: #fafafa;
  }
`;

export const DWrapper = styled.div`
  width: 100%;
  font-weight: 500;
`;

export const DWrapperName = styled.div`
  padding: 0 10px 0 0;
`

export const ButtonWrapper = styled.div`
  justify-content: space-around;
  display: flex;
  padding-top: 54px;
`;
