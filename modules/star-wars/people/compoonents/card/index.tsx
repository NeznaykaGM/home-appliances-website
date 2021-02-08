import * as React from 'react';
// views
import { CardWrapper, CardImgWrapper, CardImg, CardFooter, CardFooterTitle, ViewButton } from './views';
// view components
import { PersonLink } from '../person-link';

interface Props {
  id: string;
  name: string;
}

const Card: React.FC<Props> = ({ id, name }) => (
  <CardWrapper key={id}>
    <CardImgWrapper>
      <CardImg src={'/static/images/Ben-Kenobi.jpg'} alt={`${name}-${id}`} />
    </CardImgWrapper>
    <CardFooter>
      <PersonLink pId={id}>
        <CardFooterTitle>{name}</CardFooterTitle>
      </PersonLink>
      <PersonLink pId={id}>
        <ViewButton>Details</ViewButton>
      </PersonLink>
    </CardFooter>
  </CardWrapper>
);

export { Card };
