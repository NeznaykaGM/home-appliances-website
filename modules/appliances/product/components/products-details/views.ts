import styled from 'styled-components';

export const DetailsWrapper = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  margin: 10px;
  position: relative;
  background: white;
`;

export const DescriptionsWrapper = styled.div`
  width: 100%;
  padding-left: 20px;
  font-size: 20px;

  div {
    padding: 0 50px 0 0;
  }
`;

export const StyledImage = styled.img`
  max-width: 300px;
  max-height: 300px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  padding: 25px;
  overflow: hidden;
  justify-content: center;
  user-select: none;
  pointer-events: none;
  cursor: crosshair;
  background: white;
`;

export const ButtonWrapper = styled.div`
  padding: 10px;
  right: 0;
  bottom: 0;
  position: absolute;
`;

export const ImageDescriptionsWrapper = styled.div`
  display: flex;
  padding: 10px;
  p {
    padding: 10px 0 0 0;
    font-size: 16px;
  }
`;

export const ImageWrapper = styled.div`
  width: 300px;
  height: 100%;
`;
