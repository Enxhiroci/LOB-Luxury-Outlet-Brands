import { Fragment, useContext } from 'react';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import Spinner from '../../components/spinner/spinner.component';
import { ProductsContext } from '../../context/products';

const CategoriesPreview = () => {
  const { categories } = useContext(ProductsContext);
  const isLoading = false;

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        categories.map((category) => {
          const products = category.items;
          return (
            <CategoryPreview key={category.title} title={category.title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
