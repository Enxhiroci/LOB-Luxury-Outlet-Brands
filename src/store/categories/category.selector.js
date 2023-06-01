import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => {
  debugger;
  return state.categories;
}

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    debugger;
    return categoriesSlice.categories
  }
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    debugger;
    return categories.reduce((acc, category) => {
      debugger;
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
  }
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
