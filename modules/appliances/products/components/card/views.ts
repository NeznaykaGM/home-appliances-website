import styled from 'styled-components';

export const Wrapper = styled.div`
  &:hover {
    box-shadow: 0 0 8px rgba(0.2, 0.2, 0.2, 0.5);
    transition: box-shadow 0.2s linear;
  }
  width: 300px;
  height: 300px;
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
  display: flex;
`;

export const DWrapperName = styled.div`
  padding: 0 10px 0 0;
`

export const ButtonWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-around;
  float: right;
  position: absolute;
  bottom: 0;
  padding-bottom: 8px;
`;
