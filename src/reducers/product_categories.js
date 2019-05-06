import * as ProductCategoriesAction from '../actions/product_categories'; 

const initialState = {
  isFetching: false,
  data: null,
  fetchError: null,
};

const ProductCategories = (state = initialState,action) => {

  switch(action.type){
    case ProductCategoriesAction.PRODUCT_CATEGORIES_LOADING:{
	    return {
		      ...state,
		      isFetching: true,
		  };
    }

    case ProductCategoriesAction.PRODUCT_CATEGORIES_SUCCESSFULLY:{
    	const { product_categories } = action.payload;
	    return {
	      ...state,
	      data: product_categories,
	      fetchError: null,
	      isFetching: false,
	    };
	}

    case ProductCategoriesAction.PRODUCT_CATEGORIES_FAILD:{
	    return {
	      ...state,
	      fetchError:'Error In Product Categories',
	      isFetching: false,
	    };
	}

	default:{
    	return state;
 	}
 	
  }
}

export default ProductCategories;