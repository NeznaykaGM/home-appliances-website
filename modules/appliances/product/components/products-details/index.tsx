import React, { FC } from 'react';
import Button from '@md-ui/button/main';
import {
  DetailsWrapper,
  DescriptionsWrapper,
  StyledImage,
  ButtonWrapper,
  ImageDescriptionsWrapper,
  ImageWrapper
} from './views';

interface Props {
  img: string;
  name: string;
  price: string | number;
  id: string | number;
  descriptions?: string;
}

const Details: FC<Props> = ({ img, name, price, id, descriptions }) => {
  return (
    <>
      <DetailsWrapper>
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
            <Button key={id} title={'Add to cart'} type={''} />
          </ButtonWrapper>
        </ImageDescriptionsWrapper>
      </DetailsWrapper>
    </>
  );
};

export default Details;
