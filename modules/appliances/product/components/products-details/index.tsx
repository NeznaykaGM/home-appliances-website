import React, { FC } from 'react';
import Button from '@md-ui/button/main';
import {
  DetailsWrapper,
  DescriptionsWrapper,
  Image,
  ButtonWrapper,
  ImageDescriptionsWrapper,
  ImageWrapper
} from './views';

interface Props {
  img: string;
  name: string;
  price: number;
  id: number;
  descriptions?: string;
  onClick: () => void;
}

const Details: FC<Props> = ({ onClick, img, name, price, id, descriptions }) => {
  return (
    <>
      <DetailsWrapper>
        <ImageDescriptionsWrapper>
          <ImageWrapper>
            <Image src={img} />
          </ImageWrapper>

          <DescriptionsWrapper>
            <div>Name: {name}</div>
            <div>Price: {price}</div>
            <hr />
            <h4>Descriptions:</h4>
            <p>{descriptions}</p>
          </DescriptionsWrapper>

          <ButtonWrapper>
            <Button onClick={onClick} key={id} title={'Add to cart'} type={''} />
          </ButtonWrapper>
        </ImageDescriptionsWrapper>
      </DetailsWrapper>
    </>
  );
};

export default Details;
