import { useEffect, useMemo } from 'react';

export interface Product {
  name: string;
  id: string | number;
  price: number;
  img: string;
  descriptions: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Washer',
    price: 100,
    img:
      'https://cdn.comfy.ua/media/catalog/product/cache/4/image/1440x1080/62defc7f46f3fbfc8afcd112227d1181/d/_/d_z01.jpg',
    descriptions:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa dicta doloribus laborum magnam nisi, porro possimus quia quod? A accusantium deleniti doloribus est maxime minus, obcaecati saepe sapiente sit.'
  },
  {
    id: 2,
    name: 'Washer',
    price: 300,
    img:
      'https://cdn.comfy.ua/media/catalog/product/cache/4/image/1440x1080/62defc7f46f3fbfc8afcd112227d1181/d/_/d_z01.jpg',
    descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, totam.'
  },
  {
    id: 3,
    name: 'Fridge',
    price: 1200,
    img: 'https://hotline.ua/img/tx/238/238778856_s265.jpg',
    descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, totam.'
  },
  {
    id: 4,
    name: 'Fridge',
    price: 1200,
    img: 'https://hotline.ua/img/tx/238/238782043_s265.jpg',
    descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, totam.'
  },
  {
    id: 5,
    name: 'Vacuum cleaner',
    price: 400,
    img: 'https://polaris.company/upload/iblock/657/151_01_1.jpg',
    descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, totam.'
  }
];

export const CartProducts: Product[] = [
  {
    id: 1,
    name: 'Washer',
    price: 100,
    img:
      'https://cdn.comfy.ua/media/catalog/product/cache/4/image/1440x1080/62defc7f46f3fbfc8afcd112227d1181/d/_/d_z01.jpg',
    descriptions:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa dicta doloribus laborum magnam nisi, porro possimus quia quod? A accusantium deleniti doloribus est maxime minus, obcaecati saepe sapiente sit.'
  }
];
export const CountItems = CartProducts.length;
