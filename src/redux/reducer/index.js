import {SHOWPRODUCT,ADDPRODUCT,DELETEPRODUCT} from '../action/index';

const initState = {
    products: [],
};

export default function (state = initState, action) {
    switch (action.type) {
      case DELETEPRODUCT: {
        return {
          ...state,
          products: state.products.pop(action.payload),
        };
      }
      case ADDPRODUCT: {
        return {
          ...state,
          products: state.products.push(action.payload),
        };
      }
      case SHOWPRODUCT:{
        return {
          ...state,
          products: action.payload,
        };
      }
      
      default:
        return state;
    }
   }
   