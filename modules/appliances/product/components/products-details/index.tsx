import React, { FC } from 'react';
import Button from '@md-ui/button/main';
import {
  DetailsWrapper,
  DescriptionsWrapper,
  TitleWrapper,
  Image,
  ButtonWrapper,
  ImageDescriptionsWrapper,
  ImageWrapper,
  Title
} from './views';

interface Props {
  img: string;
  name: string;
  price: string | number;
  id: string | number;
  descriptions?: string;
  callback: () => void;
}

const Details: FC<Props> = ({ callback, img, name, price, id, descriptions }) => {
  return (
    <>
      <DetailsWrapper>
        {/*<TitleWrapper>*/}
        {/*  <Title>{name}</Title>*/}
        {/*</TitleWrapper>*/}
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
            <Button callback={callback} key={id} title={'Add to cart'} type={''} />
          </ButtonWrapper>
        </ImageDescriptionsWrapper>
      </DetailsWrapper>
    </>
  );
};

export default Details;
