import React, { FC } from 'react';
import styled from 'styled-components';
import Button from '../Button';



const WrapperDetails = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  margin: 10px;
  position: relative;
`;

const Descriptions = styled.div`
  width: 100%;
  padding-left: 20px;
  font-size: 20px;
  
  div {
    padding: 0 50px 0 0;
  }
`;

const StyledImage = styled.img`
  max-width: 300px;
  max-height: 300px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  padding: 25px;
  overflow: hidden;
  justify-content: center;
  user-select: none;
  pointer-events: none;
  cursor: crosshair;
  background: #fafafa;
`

const ButtonWrapper = styled.div`
  //float: right;
  padding: 10px;
  right: 0;
  bottom: 0;
  position: absolute;
`

const ImageDescriptionsWrapper = styled.div`
  display: flex;
  padding: 10px;
  p{
    padding: 10px 0 0 0;
    font-size: 16px;
  }
`

const ImageWrapper = styled.div`
  width: 300px;
  height: 100%;
`

interface PropsI {
  img: string;
  name?: string;
  price?: string | number;
  id?: string | number;
  descriptions?: string;
}

const Details: FC<PropsI> = ({ img, name, price, id , descriptions}) => {
  return (
    <>
    <WrapperDetails>
      <ImageDescriptionsWrapper>
        <ImageWrapper>
          <StyledImage src={img}/>
        </ImageWrapper>

        <Descriptions>
          <div>Name: {name}</div>
          <div>Price: {price}</div>
          <hr/>
          <h4>Descriptions:</h4>
          <p>{descriptions}</p>
        </Descriptions>


        <ButtonWrapper>
          <Button url='/' title='Add to cart' />
        </ButtonWrapper>

      </ImageDescriptionsWrapper>
    </WrapperDetails>
    </>
  );
};

export default Details;
