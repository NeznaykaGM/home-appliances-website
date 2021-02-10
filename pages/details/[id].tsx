import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Details from '../../Components/Products/Details';

const PRODUCTS_DATA = [
  {
    id: 1,
    name: 'Washer',
    price: 100,
    img:
      'https://cdn.comfy.ua/media/catalog/product/cache/4/image/1440x1080/62defc7f46f3fbfc8afcd112227d1181/d/_/d_z01.jpg',
    descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa dicta doloribus laborum magnam nisi, porro possimus quia quod? A accusantium deleniti doloribus est maxime minus, obcaecati saepe sapiente sit.',
  },
  {
    id: 2,
    name: 'Washer',
    price: 300,
    img:
      'https://cdn.comfy.ua/media/catalog/product/cache/4/image/1440x1080/62defc7f46f3fbfc8afcd112227d1181/d/_/d_z01.jpg',
    descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, totam.',
  },
  {
    id: 3,
    name: 'Fridge',
    price: 1200,
    img: 'https://hotline.ua/img/tx/238/238778856_s265.jpg',
    descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, totam.',
  },
  {
    id: 4,
    name: 'Fridge',
    price: 1200,
    img: 'https://hotline.ua/img/tx/238/238782043_s265.jpg',
    descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, totam.',
  }
];

const DetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = PRODUCTS_DATA.find((elemet) => {
    if (elemet.id.toString() === id) {
      return elemet;
    }
  });

  return (
    <>
      <Head>
        <title>Website | Details</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
        <meta charSet='utf-8' />
      </Head>

      <div>
        {/*{id}*/}
        {/*{JSON.stringify(product)}*/}
        {product ? <Details img={product.img} name={product.name} price={product.price} descriptions={product.descriptions} /> : <div>Loading...</div>}
      </div>
    </>
  );
};

export default DetailsPage;
