import { useRouter } from 'next/router';

import Details from '@md-modules/appliances/product/components/products-details';
//views
import { MainLayout } from '@md-modules/shared/layouts/main';
import { products } from '../../modules/shared/mock/index';

const DetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find((elemet) => (elemet.id.toString() === id ? elemet : undefined));

  return (
    <>
      <MainLayout>
        {product ? (
          <Details img={product.img} name={product.name} price={product.price} descriptions={product.descriptions} />
        ) : (
          <div>This page is empty</div>
        )}
      </MainLayout>
    </>
  );
};

export default DetailsPage;
