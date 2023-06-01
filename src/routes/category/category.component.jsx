import { Fragment, useMemo, useContext } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';


import { CategoryContainer, Title } from './category.styles';
import { ProductsContext } from '../../context/products';

const Category = () => {
  const { category } = useParams();
  const { categories } = useContext(ProductsContext);
  //const isLoading = useSelector(selectCategoriesIsLoading);
  const isLoading = false;

  const categoryObj = useMemo(() => {
   const selectedCategory = categories.filter(x => x.title.toLowerCase() === category.toLowerCase());
   debugger;
   if(selectedCategory && selectedCategory.length > 0)
    return selectedCategory[0];
  else return {title: ""  }
  }, [categories, category]);

  const products = useMemo(() => {
    const selectedCategory = categories.filter(x => x.title.toLowerCase() === category.toLowerCase());
    if(selectedCategory && selectedCategory.length > 0)
      return selectedCategory[0].items;
    else return []
   }, [categories, category]);


  return (
    <Fragment>
      <Title>{categoryObj.title.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
