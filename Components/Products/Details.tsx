import React, { FC } from 'react';
import styled from 'styled-components';
import Button from '../Button';



const WrapperDetails = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  margin: 10px;
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
  cursor: pointer;
  background: #fafafa;
`

const ButtonWrapper = styled.div`
float: right;
`

const ImageDescriptionsWrapper = styled.div`
  display: flex;
  padding: 10px;
  p{
    padding: 10px 0 0 0;
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
          <p>Descriptions: {descriptions}</p>
        </Descriptions>
      </ImageDescriptionsWrapper>

      <ButtonWrapper>
        <Button url='/' title='Add to cart' />
      </ButtonWrapper>

    </WrapperDetails>
    </>
  );
};

export default Details;
