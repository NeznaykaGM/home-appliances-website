import React, { FC } from 'react';
import Button from '@md-ui/button/main';
import {
  WrapperDetails,
  DescriptionsWrapper,
  StyledImage,
  ButtonWrapper,
  ImageDescriptionsWrapper,
  ImageWrapper
} from './views';

interface PropsI {
  img: string;
  name?: string;
  price?: string | number;
  id?: string | number;
  descriptions?: string;
}

const Details: FC<PropsI> = ({ img, name, price, id, descriptions }) => {
  return (
    <>
      <WrapperDetails>
        <ImageDescriptionsWrapper>
          <ImageWrapper>
            <StyledImage src={img} />
          </ImageWrapper>

          <DescriptionsWrapper>
            <div>Name: {name}</div>
            <div>Price: {price}</div>
            <hr />
            <h4>Descriptions:</h4>
            <p>{descriptions}</p>
          </DescriptionsWrapper>

          <ButtonWrapper>
            <Button title={"Add to cart"} type={''}/>
          </ButtonWrapper>
        </ImageDescriptionsWrapper>
      </WrapperDetails>
    </>
  );
};

export default Details;
