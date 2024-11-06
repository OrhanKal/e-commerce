// Basic action creators
export const setCategories = (categories) => ({
    type: 'SET_CATEGORIES',
    payload: categories,
  });
  
  export const setProductList = (products) => ({
    type: 'SET_PRODUCT_LIST',
    payload: products,
  });
  
  export const setTotal = (total) => ({
    type: 'SET_TOTAL',
    payload: total,
  });
  
  export const setFetchState = (state) => ({
    type: 'SET_FETCH_STATE',
    payload: state,
  });
  
  export const setLimit = (limit) => ({
    type: 'SET_LIMIT',
    payload: limit,
  });
  
  export const setOffset = (offset) => ({
    type: 'SET_OFFSET',
    payload: offset,
  });
  
  export const setFilter = (filter) => ({
    type: 'SET_FILTER',
    payload: filter,
  });
  
  // Thunk action creators for async operations
  export const fetchProducts = (params) => {
    return async (dispatch) => {
      try {
        dispatch(setFetchState('FETCHING'));
        
        // API call örneği
        const response = await fetch('/api/products', {
          method: 'GET',
          params: params
        });
        const data = await response.json();
        
        dispatch(setProductList(data.products));
        dispatch(setTotal(data.total));
        dispatch(setFetchState('FETCHED'));
      } catch (error) {
        dispatch(setFetchState('FAILED'));
        console.error('Error fetching products:', error);
      }
    };
  };
  
  export const fetchCategories = () => {
    return async (dispatch) => {
      try {
        const response = await fetch('/api/categories');
        const data = await response.json();
        dispatch(setCategories(data));
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
  };