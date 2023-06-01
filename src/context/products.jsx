import { createContext, useState } from 'react';

import SHOP_DATA from '../shop-data.js';

export const ProductsContext = createContext({
  categories: [],
});

export const ProductsProvider = ({ children }) => {
    debugger;   
  const [categories, setCategories] = useState(SHOP_DATA);
  const value = { categories };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};