import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 95vh;
  height: 320px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  padding: 10px;
  margin: 10px;
  background: white;
  position: relative;

  img {
    width: 300px;
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
`;

export const ButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  margin: 0 0 4px;
`;
